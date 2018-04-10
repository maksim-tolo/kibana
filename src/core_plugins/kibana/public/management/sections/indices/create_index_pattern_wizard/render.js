import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { CreateIndexPatternWizard } from './create_index_pattern_wizard';

import { I18nProvider } from 'ui/i18n';

const CREATE_INDEX_PATTERN_DOM_ELEMENT_ID = 'createIndexPatternReact';

export function renderCreateIndexPatternWizard(
  loadingDataDocUrl,
  initialQuery,
  services,
  messages,
) {
  const node = document.getElementById(CREATE_INDEX_PATTERN_DOM_ELEMENT_ID);
  if (!node) {
    return;
  }

  render(
    <I18nProvider value={messages}>
      <CreateIndexPatternWizard
        loadingDataDocUrl={loadingDataDocUrl}
        initialQuery={initialQuery}
        services={services}
      />
    </I18nProvider>,
    node,
  );
}

export function destroyCreateIndexPatternWizard() {
  const node = document.getElementById(CREATE_INDEX_PATTERN_DOM_ELEMENT_ID);
  node && unmountComponentAtNode(node);
}
