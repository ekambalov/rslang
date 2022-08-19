export interface IComponent {
    start(): HTMLDivElement;
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
    start: () => HTMLDivElement;
}
export interface IComponentNav {
    closeMenu: (e: Event) => void;
    start: () => HTMLDivElement;
}
