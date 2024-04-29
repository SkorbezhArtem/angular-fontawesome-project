import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCoffee,
  faHome,
  faSearch,
  faHeart,
  faUser,
  faPhone,
  faStar,
  faBomb,
  faMusic,
  faCloud,
  faClock,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-random-icon',
  templateUrl: './random-icon.component.html',
  styleUrls: ['./random-icon.component.css'],
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
})
export class RandomIconComponent {
  randomIcon: any;
  iconList = [
    faCoffee,
    faHome,
    faSearch,
    faHeart,
    faUser,
    faPhone,
    faStar,
    faBomb,
    faMusic,
    faCloud,
    faClock,
  ];

  showRandomIcon() {
    setTimeout(() => {
      this.randomIcon =
        this.iconList[Math.floor(Math.random() * this.iconList.length)];
    }, 3000);
  }
}
