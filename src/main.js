const { app, Tray, Menu, BrowserWindow } = require("electron");

if (require("electron-squirrel-startup")) {
  app.quit();
}

app.whenReady().then(() => {
  const platform = process.platform;

  if (platform === "darwin") {
    app.dock.hide();
  }

  const tray = new Tray(`src/images/${platform === "darwin" ? "iconTemplate.png" : "icon.ico"}`);
  tray.setToolTip("Battery Status");
  tray.setContextMenu(Menu.buildFromTemplate([{ role: "quit", label: "Quit" }]));

  const browserWindow = new BrowserWindow({
    show: false,
  });

  browserWindow.loadFile("src/index.html");
});
