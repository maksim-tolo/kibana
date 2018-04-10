import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { I18nConsumer } from './I18nProvider';

const isFunction = value => typeof value === 'function';

const translateMessage = (messages, {
  translate,
  vars,
  defaultMessage,
}) => {
  if (isFunction(messages.get)) {
    const message = messages.get(translate, vars);

    if (message !== translate) {
      return message;
    }
  }

  return defaultMessage || translate;
};

export class I18n extends PureComponent {
  static propTypes = {
    translate: PropTypes.string,
    vars: PropTypes.object,
    defaultMessage: PropTypes.string,
    children: PropTypes.any,
  };

  static defaultProps = {
    translate: '',
    vars: {},
  };

  render() {
    const {
      children,
      translate,
      vars,
      defaultMessage,
    } = this.props;

    return (
      <I18nConsumer>
        {messages =>
          isFunction(children) ?
            children(translateMessage.bind(null, messages)) :
            translateMessage(messages, {
              translate,
              vars,
              defaultMessage,
            })}
      </I18nConsumer>
    );
  }
}
