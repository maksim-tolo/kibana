import { uiModules } from 'ui/modules';

import { translate } from './common';

uiModules.get('i18n')
  .filter('i18n', function (i18n) {
    const translateMessage = translate.bind(null, i18n.getMessages());

    return function (path, {
      defaultMessage = '',
      vars = {},
    } = {}) {
      return translateMessage({
        path,
        vars,
        defaultMessage,
      });
    };
  });
