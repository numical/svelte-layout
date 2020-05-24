const storageAvailable = require('storage-available');
const enabled = storageAvailable('localStorage');

const settingsKey = 'settings';
const disabledFn = () => {};

const get = key => {
  const s = localStorage.getItem(key);
  return s ? JSON.parse(s) : {};
};

const save = (key, value) => localStorage.setItem(key, JSON.stringify(value));

export const getSettings = enabled ? get.bind(null, settingsKey) : disabledFn;

export const saveSettings = enabled ? save.bind(null, settingsKey) : disabledFn;
