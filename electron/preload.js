const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("morslum", {
  version: "1.0.0",
});