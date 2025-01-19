import { contextBridge, ipcRenderer } from 'electron'

/**
 * @type {Object.<string, Function>}
 */
const api = {
  send: (channel, data) => {
    // Whitelist channels here for security
    const validChannels = ['toMain'];
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },
  receive: (channel, func) => {
    // Whitelist channels here for security
    const validChannels = ['fromMain'];
    if (validChannels.includes(channel)) {
      ipcRenderer.on(channel, (event, ...args) => func(...args));
    }
  }
};

contextBridge.exposeInMainWorld('electron', api);
