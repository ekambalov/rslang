export interface IComponent<T = HTMLDivElement> {
    start(): T;
}
export interface IComponentUl {
    start(): HTMLUListElement;
}
export interface IComponentForm {
    start(): HTMLFormElement;
}
export interface IComponentBtns {
    start: (id: number, name: string) => HTMLDivElement;
}
export interface IComponentBody {
    start: () => HTMLBodyElement;
}
export interface IComponentHead {
    showMenu: () => void;
    start: () => HTMLElement;
}
export interface IComponentNav {
    closeMenu: (e: Event) => void;
    start: () => HTMLDivElement;
}
