@echo off
title LibrisMind Edebi Hafiza Platformu
echo ===================================================
echo   LibrisMind - Edebi Hafiza ve Kitap Ezberleme
echo ===================================================
echo.
echo Sunucu baslatiliyor...
echo Tarayicinizda su adresi acin: http://localhost:5173/
echo.
start http://localhost:5173/
npm run dev -- --host --port 5173
pause
