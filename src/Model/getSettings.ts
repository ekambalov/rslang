import { ILinkProps } from '../Interfaces/interfaces';

export async function getNavSetting(): Promise<ILinkProps[]> {
  debugger;
  const res = await fetch('./settings/menu.json');
  const links: ILinkProps[] = await res.json();
  debugger;
  return links;
}

export async function getSettingTypeShirt(): Promise<string[]> {
  const res = await fetch('./settings/type-shirt.json');
  const setting: string[] = await res.json();
  return setting;
}
