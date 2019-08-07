function EmailParser(mail) {
  this.setting = {
    email: mail,
    name: 1,
    domain: "yandex"
  };
  
  // Object.defineProperty(this, "email", {
  //   get: () => {
  //     return this.setting.email;
  //   },
  //   set: (value) => {
  //     this.setting.email = value;
  //   }
  // })
  // Object.defineProperty(this, "name", {
  //   get: () => {
  //     return this.setting.name;
  //   }
  // })
  // Object.defineProperty(this, "domain", {
  //   get: () => {
  //     return this.setting.domain;
  //   }
  // })
}

let date = {
    a: 1,
    b: 2
}

export default new Proxy(date, {
  get(target, name) {
    return target[name];
  },
  set(target, name, value) {
    target[name] = value;
    return true;
  }
})
