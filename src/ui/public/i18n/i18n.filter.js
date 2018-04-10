import { uiModules } from 'ui/modules';

uiModules.get('i18n')
  .filter('i18n', function (i18n) {
    return function (path, {
      defaultMessage = '',
      vars = {},
    } = {}) {
      return i18n({
        path,
        vars,
        defaultMessage,
      });
    };
  });
