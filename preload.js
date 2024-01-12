const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("exposed", {
  platform: process.platform,
});
