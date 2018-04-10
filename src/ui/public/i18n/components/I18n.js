import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { I18nConsumer } from './I18nProvider';

const isFunction = value => typeof value === 'function';

export class I18n extends PureComponent {
  static propTypes = {
    path: PropTypes.string,
    vars: PropTypes.object,
    defaultMessage: PropTypes.string,
    children: PropTypes.any,
  };

  static defaultProps = {
    path: '',
    vars: {},
    defaultMessage: '',
  };

  render() {
    const {
      children,
      path,
      vars,
      defaultMessage,
    } = this.props;

    return (
      <I18nConsumer>
        {translate =>
          isFunction(children) ?
            children(translate) :
            translate({
              path,
              vars,
              defaultMessage,
            })}
      </I18nConsumer>
    );
  }
}
