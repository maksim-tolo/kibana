import { uiModules } from 'ui/modules';

import { translate } from './common';

uiModules.get('i18n')
  .directive('i18n', function (i18n) {
    const translateMessage = translate.bind(null, i18n.getMessages());

    return {
      restrict: 'A',
      scope: {
        path: '@i18n',
        defaultMessage: '@',
        vars: '=',
      },
      link: function ($scope, $element) {
        $scope.$watchGroup([
          'path',
          'vars',
          'defaultMessage'
        ], function ([
          path,
          vars = {},
          defaultMessage = '',
        ]) {
          if (path) {
            $element.text(translateMessage({
              path,
              vars,
              defaultMessage,
            }));
          }
        });
      }
    };
  });
