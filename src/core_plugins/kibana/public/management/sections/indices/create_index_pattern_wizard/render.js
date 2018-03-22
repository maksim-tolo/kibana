import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { CreateIndexPatternWizard } from './create_index_pattern_wizard';
import { IntlProvider } from 'react-intl';

const CREATE_INDEX_PATTERN_DOM_ELEMENT_ID = 'createIndexPatternReact';

export function renderCreateIndexPatternWizard(
  loadingDataDocUrl,
  initialQuery,
  services,
  messages,
  locale,
) {
  const node = document.getElementById(CREATE_INDEX_PATTERN_DOM_ELEMENT_ID);
  if (!node) {
    return;
  }

  render(
    <IntlProvider
      locale={locale}
      messages={messages}
    >
      <CreateIndexPatternWizard
        loadingDataDocUrl={loadingDataDocUrl}
        initialQuery={initialQuery}
        services={services}
      />
    </IntlProvider>,
    node,
  );
}

export function destroyCreateIndexPatternWizard() {
  const node = document.getElementById(CREATE_INDEX_PATTERN_DOM_ELEMENT_ID);
  node && unmountComponentAtNode(node);
}
