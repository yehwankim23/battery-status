const { app, Tray, Menu } = require("electron");

if (require("electron-squirrel-startup")) {
  app.quit();
}

app.whenReady().then(() => {
  const tray = new Tray("src/images/icon.ico");
  tray.setToolTip("Battery Status");
  tray.setContextMenu(Menu.buildFromTemplate([{ role: "quit", label: "Quit" }]));
});
