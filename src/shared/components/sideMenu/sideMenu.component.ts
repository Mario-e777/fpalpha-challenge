import { Component } from "@angular/core";

interface MenuLink {
  name: string;
  link: string;
  icon: string;
}

@Component({
  selector: 'sw-side-menu',
  templateUrl: './sideMenu.component.html',
  styleUrls: ['./sideMenu.component.css']
})
export class SideMenu {
  menuLinks: Array<MenuLink> = [
    { name: 'Movies', link: '/movies', icon: '🎬' },
    { name: 'Characters', link: '/characters', icon: '👯‍♀️' },
    { name: 'Planets', link: '/planets', icon: '🪐' },
    { name: 'Starships', link: '/starships', icon: '🚀' },
    { name: 'Vehicles', link: '/vehicles', icon: '🏎️' },
    { name: 'Species', link: '/species', icon: '👾' },
  ];
}
