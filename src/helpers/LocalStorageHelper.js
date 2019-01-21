const LocalStorageHelper = {
    key: "",
    get: (keyName) => {
      return localStorage.getItem(keyName || this.key);
    },
    set: (data,keyName) => {
      localStorage.setItem(keyName || this.key, data);
    }
}

export default LocalStorageHelper;
