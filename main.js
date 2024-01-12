const { app, Tray, Menu } = require("electron");
const path = require("node:path");

if (require("electron-squirrel-startup")) {
  app.quit();
}

app.whenReady().then(() => {
  const platform = process.platform;

  if (platform === "darwin") {
    app.dock.hide();
  }

  const tray = new Tray(
    path.join(
      __dirname,
      "images",
      platform === "darwin" ? "iconTemplate.png" : platform === "win32" ? "icon.ico" : "icon.png"
    )
  );

  tray.setToolTip("Battery Status");
  tray.setContextMenu(Menu.buildFromTemplate([{ role: "quit", label: "Quit" }]));
});
