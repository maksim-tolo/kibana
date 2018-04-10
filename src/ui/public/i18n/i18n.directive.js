import { uiModules } from 'ui/modules';

uiModules.get('i18n')
  .directive('i18n', function (i18n) {
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
            $element.html(i18n({
              path,
              vars,
              defaultMessage,
            }));
          }
        });
      }
    };
  });
