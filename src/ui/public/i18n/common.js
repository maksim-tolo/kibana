export const isFunction = value => typeof value === 'function';

export const translate = (messages, {
  path,
  vars,
  defaultMessage,
}) => {
  if (isFunction(messages.get)) {
    const message = messages.get(path, vars);

    if (message !== path) {
      return message;
    }
  }

  return defaultMessage || path;
};
