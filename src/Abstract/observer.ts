interface Listener {
  name: string;
  callback: (...params: string[]) => void;
}

export default class Observer {
  private listeners: Array<Listener> = [];

  add(name: string, callback: (...params: string[]) => void): void {
    this.listeners.push({ name, callback });
  }

  remove(name: string) {
    this.listeners.forEach((listener, idx) => {
      if (name === listener.name) {
        this.listeners.splice(idx, 1);
      }
    });
  }

  dispath(name: string, ...params: string[]): void {
    this.listeners.filter((it) => it.name === name).forEach((it) => it.callback(...params));
  }
}
