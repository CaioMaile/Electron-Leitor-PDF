const { contextBridge, ipcRenderer } = require("electron")

contextBridge.exposeInMainWorld("electron", {
    Fechar: () => {
        ipcRenderer.send("Fechar")
    },
    Minimizar: () => {
        ipcRenderer.send("Minimizar")
    },
    Maximizar: () => {
        ipcRenderer.send("Maximizar")
    }
})