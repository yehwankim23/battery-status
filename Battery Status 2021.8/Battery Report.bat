@ECHO OFF
TITLE Battery Report

IF EXIST "battery-report.html" (
    DEL "battery-report.html"
)

POWERCFG /BATTERYREPORT
ECHO.
PAUSE

battery-report.html
