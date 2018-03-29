import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { CreateIndexPatternWizard } from './create_index_pattern_wizard';
import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';

const CREATE_INDEX_PATTERN_DOM_ELEMENT_ID = 'createIndexPatternReact';

export function renderCreateIndexPatternWizard(
  loadingDataDocUrl,
  initialQuery,
  services,
) {
  const node = document.getElementById(CREATE_INDEX_PATTERN_DOM_ELEMENT_ID);
  if (!node) {
    return;
  }

  render(
    <I18nextProvider i18n={i18n}>
      <CreateIndexPatternWizard
        loadingDataDocUrl={loadingDataDocUrl}
        initialQuery={initialQuery}
        services={services}
      />
    </I18nextProvider>,
    node,
  );
}

export function destroyCreateIndexPatternWizard() {
  const node = document.getElementById(CREATE_INDEX_PATTERN_DOM_ELEMENT_ID);
  node && unmountComponentAtNode(node);
}
