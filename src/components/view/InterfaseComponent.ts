/* eslint-disable no-unused-vars */
import { ICar, IWinner } from '../controller/apiInterfase';

export interface IComponent {
    start(): HTMLDivElement;
}
export interface IComponentImg {
    start: (color: string) => HTMLDivElement;
}
export interface IComponentForm {
    start(): HTMLFormElement;
}
export interface IComponentRoadAll {
    start: (arrayCar: ICar[]) => HTMLDivElement;
}
export interface IComponentBtns {
    start: (id: number, name: string) => HTMLDivElement;
}
export interface IComponentCarRoad {
    start: ({ id, name, color }: ICar) => HTMLDivElement;
}
export interface IComponentTable {
    start: (winner: IWinner, index: number) => HTMLDivElement;
}
export interface IComponentBody {
    start: () => HTMLBodyElement;
}
