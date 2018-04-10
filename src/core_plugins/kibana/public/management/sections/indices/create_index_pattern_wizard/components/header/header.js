import React from 'react';

import {
  EuiSpacer,
  EuiTitle,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiTextColor,
  EuiSwitch,
} from '@elastic/eui';

import { I18n } from 'ui/i18n';

export const Header = ({
  isIncludingSystemIndices,
  onChangeIncludingSystemIndices,
}) => (
  <div>
    <EuiSpacer size="m"/>
    <EuiTitle>
      <h1>
        <I18n translate="KIBANA-HEADER-TITLE" />
      </h1>
    </EuiTitle>
    <EuiFlexGroup justifyContent="spaceBetween" alignItems="flexEnd">
      <EuiFlexItem grow={false}>
        <EuiText>
          <p>
            <EuiTextColor color="subdued">
              Kibana uses index patterns to retrieve data from Elasticsearch indices for things like visualizations.
            </EuiTextColor>
          </p>
        </EuiText>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiSwitch
          label="Include system indices"
          checked={isIncludingSystemIndices}
          onChange={onChangeIncludingSystemIndices}
        />
      </EuiFlexItem>
    </EuiFlexGroup>
    <EuiSpacer size="m"/>
  </div>
);
