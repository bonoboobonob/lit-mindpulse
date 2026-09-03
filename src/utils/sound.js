import { Haptics, ImpactStyle, NotificationType } from '@capacitor/haptics';

// Web Audio API Sound & Native Haptics Manager for Memory Game
class SoundManager {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.hapticsEnabled = true;
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleSound() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  // Trigger gentle mobile haptic feedback
  async triggerHaptic(type = 'light') {
    if (!this.hapticsEnabled) return;
    try {
      if (type === 'light') {
        await Haptics.impact({ style: ImpactStyle.Light });
      } else if (type === 'medium') {
        await Haptics.impact({ style: ImpactStyle.Medium });
      } else if (type === 'heavy') {
        await Haptics.impact({ style: ImpactStyle.Heavy });
      } else if (type === 'success') {
        await Haptics.notification({ type: NotificationType.Success });
      } else if (type === 'error') {
        await Haptics.notification({ type: NotificationType.Error });
      }
    } catch (e) {
      // Degrades gracefully on desktop / non-supporting web browsers
    }
  }

  playTone(freq, type = 'sine', duration = 0.2, gainValue = 0.15) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(gainValue, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn('Audio error:', e);
    }
  }

  // Simon notes (Pentatonic scale: C4, D4, E4, G4, A4, C5, D5, E5, G5)
  playSequenceNote(index) {
    const freqs = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25, 783.99];
    const freq = freqs[index % freqs.length];
    this.playTone(freq, 'sine', 0.28, 0.2);
    this.triggerHaptic('light');
  }

  playCardFlip() {
    this.playTone(600, 'triangle', 0.08, 0.08);
    this.triggerHaptic('light');
  }

  playMatchSuccess() {
    if (this.enabled) {
      this.init();
      [523.25, 659.25, 783.99].forEach((f, i) => {
        setTimeout(() => this.playTone(f, 'triangle', 0.2, 0.15), i * 70);
      });
    }
    this.triggerHaptic('success');
  }

  playSuccess() {
    this.playMatchSuccess();
  }

  playType() {
    this.playTone(600 + Math.random() * 200, 'triangle', 0.04, 0.04);
    this.triggerHaptic('light');
  }

  playError() {
    if (this.enabled) {
      this.playTone(180, 'sawtooth', 0.25, 0.15);
    }
    this.triggerHaptic('error');
  }

  playLevelUp() {
    if (this.enabled) {
      this.init();
      [392.00, 523.25, 659.25, 1046.50].forEach((f, i) => {
        setTimeout(() => this.playTone(f, 'sine', 0.25, 0.18), i * 90);
      });
    }
    this.triggerHaptic('medium');
  }

  playVictory() {
    if (this.enabled) {
      this.init();
      [523.25, 659.25, 783.99, 1046.50, 1318.51].forEach((f, i) => {
        setTimeout(() => this.playTone(f, 'triangle', 0.35, 0.2), i * 110);
      });
    }
    this.triggerHaptic('heavy');
  }

  playClick() {
    this.playTone(800, 'sine', 0.05, 0.05);
    this.triggerHaptic('light');
  }
}

export const sounds = new SoundManager();
