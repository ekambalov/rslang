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
    this.listeners = this.listeners.filter((listener) => name !== listener.name);
  }

  dispath(name: string, ...params: string[]): void {
    this.listeners.filter((it) => it.name === name).forEach((it) => it.callback(...params));
  }
}
