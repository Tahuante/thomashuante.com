import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  isDarkTheme: Observable<boolean>;
  themeTitle = "Dark";

  constructor(private _theme: ThemeService) { }

  ngOnInit() {
    this._theme.checkTheme();
    this.isDarkTheme = this._theme.isDarkTheme;
    this.setThemeTitle();
  }

  toggleTheme() {
    if (this._theme.isDarkTheme.value) {
      this._theme.setLightTheme();
    } else {
      this._theme.setDarkTheme();
    }
    console.log(this._theme.isDarkTheme.value);
    this.setThemeTitle();
  }

  setThemeTitle() {
    if (this._theme.isDarkTheme.value) {
      this.themeTitle = "Light";
    } else {
      this.themeTitle = "Dark";
    }
  }
}
