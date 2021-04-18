import ZH_CN from './zh_CN';
import EN_US from './en_US';

export function getLang() {
  const lang = localStorage.getItem('lang');
  switch (lang) {
    case 'zh_CN':
      return ZH_CN;
    default:
      return EN_US;
  }
}
