export const createDiv = (classes: string[] = []): HTMLDivElement => {
    const div = document.createElement('div');
    div.classList.add(...classes);
    return div;
};
export const createInput = (type: string, classes: string[] = []): HTMLInputElement => {
    const input = document.createElement('input');
    input.classList.add(...classes);
    input.type = type;
    return input;
};
export const createSVG = (img: string, tag: string, classes: string[] = []): SVGSVGElement => {
    const namespace = 'http://www.w3.org/2000/svg';
    const xlinkNS = 'http://www.w3.org/1999/xlink';
    const svg = document.createElementNS(namespace, 'svg');
    const use = document.createElementNS(namespace, 'use');
    use.setAttributeNS(xlinkNS, 'xlink:href', `${img}#${tag}`);
    svg.append(use);
    svg.classList.add(...classes);
    return svg;
};
export const createImg = (img: string, alt: string, classes: string[] = []): HTMLImageElement => {
    const image = new Image();
    image.src = img;
    image.alt = alt;
    image.classList.add(...classes);
    return image;
};

export const createBtn = (name: string, classes: string[] = []): HTMLButtonElement => {
    const btn = document.createElement('button');
    btn.textContent = name;
    btn.classList.add(...classes);
    return btn;
};

type HTMLTextElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'span' | 'p';

export function createText(
    text: string,
    tag: HTMLTextElement,
    classes: string[] = []
): HTMLHeadElement | HTMLSpanElement | HTMLParagraphElement {
    const textBlock = document.createElement(tag);
    textBlock.classList.add(...classes);
    textBlock.textContent = text;
    return textBlock;
}
export function createTable(headers: string[], tableClassName = 'table', classes: string[] = []): HTMLTableElement {
    const table = document.createElement('table');
    table.classList.add(tableClassName, ...classes);
    const head = document.createElement('thead');
    const headerLine = document.createElement('tr');
    headers.forEach((header) => {
        const headerBlock = document.createElement('th');
        headerBlock.textContent = header;
        headerBlock.classList.add(`${tableClassName}__header`);
        headerLine.append(headerBlock);
    });
    head.append(headerLine);
    table.append(head);
    return table;
}
export function createTableBody(
    matrix: (string | SVGSVGElement)[][],
    tableClassName = 'table'
): HTMLTableSectionElement {
    const body = document.createElement('tbody');

    matrix.forEach((rowMatrix) => {
        const row = document.createElement('tr');
        rowMatrix.forEach((cellMatrix) => {
            const cell = document.createElement('td');
            cell.append(cellMatrix);
            cell.classList.add(`${tableClassName}__cell`);
            row.append(cell);
        });
        body.append(row);
    });
    return body;
}
export const createAnchor = (href: string, classes: string[] = [], target = '_blank'): HTMLAnchorElement => {
    const anchor = document.createElement('a') as HTMLAnchorElement;
    anchor.href = href;
    anchor.classList.add(...classes);
    anchor.target = target;
    return anchor;
};
