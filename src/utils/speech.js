// Web Speech Synthesis Engine for LibrisMind Literary Memory
class SpeechManager {
  constructor() {
    this.synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
    this.currentUtterance = null;
    this.currentText = null;
    this.speaking = false;
    this.listeners = new Set();
    this.preferredVoice = null;
    this.voicesLoaded = false;

    if (this.synth) {
      this.initVoices();
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.onvoiceschanged = () => {
          this.initVoices();
        };
      }
    }
  }

  initVoices() {
    if (!this.synth) return;
    const voices = this.synth.getVoices();
    if (!voices || voices.length === 0) return;

    this.voicesLoaded = true;
    // Prioritize natural Turkish voices
    const turkishVoices = voices.filter(v => v.lang && (v.lang.startsWith('tr') || v.lang.includes('TR')));
    
    if (turkishVoices.length > 0) {
      // Prioritize natural / neural / google / apple voices over robotic ones
      this.preferredVoice = turkishVoices.find(v => 
        v.name.toLowerCase().includes('google') ||
        v.name.toLowerCase().includes('natural') ||
        v.name.toLowerCase().includes('yelda') ||
        v.name.toLowerCase().includes('cem') ||
        v.name.toLowerCase().includes('tolga') ||
        v.name.toLowerCase().includes('ahmet')
      ) || turkishVoices[0];
    }
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.listeners.forEach(fn => fn({ speaking: this.speaking, text: this.currentText }));
  }

  isSupported() {
    return typeof window !== 'undefined' && 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
  }

  cleanText(rawText) {
    if (!rawText) return '';
    return rawText
      .replace(/[""''«»]/g, '') // strip decorative quotation marks
      .replace(/\s+/g, ' ')
      .trim();
  }

  speak(rawText, options = {}) {
    if (!this.isSupported() || !rawText) return;

    // If currently speaking this exact text, stop it
    if (this.speaking && this.currentText === rawText) {
      this.stop();
      return;
    }

    // Stop any existing speech
    this.stop();

    const clean = this.cleanText(rawText);
    if (!clean) return;

    if (!this.voicesLoaded) {
      this.initVoices();
    }

    const utterance = new SpeechSynthesisUtterance(clean);
    utterance.lang = 'tr-TR';
    
    if (this.preferredVoice) {
      utterance.voice = this.preferredVoice;
    }

    // 0.88x rate provides a calm, poetic, and cadence-focused pace for memorization
    utterance.rate = options.rate || 0.88;
    utterance.pitch = options.pitch || 1.0;
    utterance.volume = options.volume || 1.0;

    utterance.onstart = () => {
      this.speaking = true;
      this.currentText = rawText;
      this.currentUtterance = utterance;
      this.notify();
      if (options.onStart) options.onStart();
    };

    utterance.onend = () => {
      this.speaking = false;
      this.currentText = null;
      this.currentUtterance = null;
      this.notify();
      if (options.onEnd) options.onEnd();
    };

    utterance.onerror = (e) => {
      this.speaking = false;
      this.currentText = null;
      this.currentUtterance = null;
      this.notify();
      if (options.onError) options.onError(e);
    };

    // Keep active reference
    this.currentUtterance = utterance;
    this.currentText = rawText;
    this.speaking = true;
    this.notify();

    try {
      this.synth.speak(utterance);
    } catch (err) {
      console.warn('Speech synthesis error:', err);
      this.speaking = false;
      this.notify();
    }
  }

  stop() {
    if (!this.synth) return;
    try {
      this.synth.cancel();
    } catch (e) {
      // Ignore
    }
    this.speaking = false;
    this.currentText = null;
    this.currentUtterance = null;
    this.notify();
  }

  isSpeakingText(text) {
    return this.speaking && this.currentText === text;
  }
}

export const speechEngine = new SpeechManager();
