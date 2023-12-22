import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translation-selector',
  templateUrl: './translation-selector.component.html',
  styleUrls: ['./translation-selector.component.css']
})
export class TranslationSelectorComponent implements OnInit {

  langs = [
    {key: 'en', value: 'English'},
    {key: 'ar', value: 'Arabic'}
  ];
  selected: string = localStorage.getItem('LANG')??'en';

  constructor(private translationService: TranslateService, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    let savedLang = localStorage.getItem('LANG');
    if (savedLang){
      this.setDirection(savedLang);
    }
  }

  selectionChanged(c:MatSelectChange){
    console.log(c.value);
    this.translationService.setDefaultLang(c.value);
    localStorage.setItem('LANG', c.value);
    this.setDirection(c.value);
  }

  setDirection(c:string) {
    const html: HTMLHtmlElement = this.document.getElementsByTagName('html')[0];
    if (c == 'ar') {
      html.dir = 'rtl';
    } else {
      html.dir = 'ltr';
    }
  }

}
