
export interface INavMenu {
    title: string,
    href: string,
    description: string,
    sub_menu: Array<INavMenu>
}