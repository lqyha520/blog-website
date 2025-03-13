@echo off
rem 设置控制台代码页为UTF-8
chcp 65001 >nul

set NODEJS_PATH=%~dp0nodejs
set PATH=%NODEJS_PATH%;%PATH%

if not exist "%NODEJS_PATH%\node.exe" (
    echo Node.js not found!
    pause
    exit /b 1
)

if not exist "node_modules" (
    echo Installing dependencies...
    call "%NODEJS_PATH%\npm.cmd" install --legacy-peer-deps
)

echo Starting development server...
echo Server will be available at: http://localhost:3000

call "%NODEJS_PATH%\npm.cmd" run dev

pause 