import { Injectable } from '@angular/core';
import { DEFAULT_LANGUAGE, SITE_LANGUAGES } from '@app/components/models/translate.models';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  constructor() { }

  get() {
    return SITE_LANGUAGES.find(lang => lang.code === DEFAULT_LANGUAGE);
  }
}
