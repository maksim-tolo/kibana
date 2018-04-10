import MessageFormat from 'messageformat';
import Messages from 'messageformat/messages';

import { uiModules } from 'ui/modules';

uiModules.get('i18n')
  .provider('i18n', function () {
    const messages = {};

    let currentLocale = 'en';

    this.currentLocale = function (locale) {
      if (locale) {
        currentLocale = locale;
      }

      return currentLocale;
    };

    this.addTranslation = function (translation, locale = translation.locale) {
      const currentLocale = this.currentLocale(locale);
      const mf = new MessageFormat(currentLocale);

      messages[currentLocale] = new Messages({
        [currentLocale]: mf.compile(translation),
      }, currentLocale);
    };

    this.$get = function () {
      function i18n(path, vars) {
        return messages[currentLocale].get(path, vars);
      }

      i18n.getMessages = function () {
        return messages[currentLocale];
      };

      return i18n;
    };
  });
