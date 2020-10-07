
export interface INavMenu {
    title: string,
    href: string,
    sub_menu: Array<INavMenu>
}

export class NavMenu implements INavMenu {
    title: string;
    href: string;
    sub_menu: INavMenu[];
    
    constructor(title: string, href: string, sub_menu: Array<INavMenu>) {
        this.title = title;
        this.href = href;
        this.sub_menu = sub_menu;
    }
}