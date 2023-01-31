import { Pipe, PipeTransform } from '@angular/core';
import { DEFAULT_LANGUAGE, Lang } from '@shared/models/translate.models';
import { TranslateService } from '@shared/services/translate.service';

@Pipe({
  name: 'localizedDate'
})
export class LocalizedDatePipe implements PipeTransform {
  private readonly monthsShort: { [key: string]: string[] } = {
    en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    de: ['Jan.', 'Febr.', 'März', 'Apr.', 'Mai', 'Juni', 'Juli', 'Aug.', 'Sept.', 'Okt.', 'Nov.', 'Dez.'],
    fr: ['janv.', 'févr.', 'mars', 'avril', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'],
    it: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'],
    es: ['enero', 'feb.', 'marzo', 'abr.', 'mayo', 'jun.', 'jul.', 'agosto', 'sept.', 'oct.', 'nov.', 'dic.'],
    nl: ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
    jp: ['Jan.', 'Feb.', 'March', 'April', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'],
  };

  transform(data: string | number | Date, hasTime?: boolean): string {
    let timestamp: number;
    const currentLanguage: Lang = DEFAULT_LANGUAGE;

    try {
      if (Number.isInteger(data)) {
        timestamp = (data as number) * 1000;
      } else if (data instanceof Date) {
        timestamp = data.getTime();
      } else {
        timestamp = new Date(data).getTime();
      }
    } catch {
      return data as string;
    }

    let format = 'DD MMM YYYY';
    if (currentLanguage === Lang.en) {
      format = 'MMM DD, YYYY';
    } else if (currentLanguage === Lang.de) {
      format = 'DD. MMM YYYY';
    } else if (currentLanguage === Lang.jp) {
      format = 'YYYY  MM月DD日';
    }

    if (hasTime) {
      format += ' HH:mm';
    }

    const dateString = format.trim();
    const date = new Date(timestamp);
    const monthsTranslations = this.monthsShort[currentLanguage];

    return this.getDateString(dateString, date, monthsTranslations)
  }

  private getDateString(dateString: string, date: Date, monthsTranslations: string[]): string {
    const hh = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const mm = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    return dateString
      .replace('HH', hh.toString())
      .replace('mm', mm.toString())
      .replace('DD', date.getDate().toString())
      .replace('MMM', monthsTranslations[date.getMonth()])
      .replace('MM', (date.getMonth() + 1).toString())
      .replace('YYYY', date.getFullYear().toString());
  }

}
