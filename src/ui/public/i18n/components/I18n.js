import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { I18nConsumer } from './I18nProvider';

import {
  isFunction,
  translate,
} from '../common';

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
        {messages =>
          isFunction(children) ?
            children(translate.bind(null, messages)) :
            translate(messages, {
              path,
              vars,
              defaultMessage,
            })}
      </I18nConsumer>
    );
  }
}
