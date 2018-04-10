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
        <I18n
          path="KIBANA-HEADER-TITLE"
          defaultMessage="Create index pattern"
        />
      </h1>
    </EuiTitle>
    <EuiFlexGroup justifyContent="spaceBetween" alignItems="flexEnd">
      <EuiFlexItem grow={false}>
        <EuiText>
          <p>
            <EuiTextColor color="subdued">
              <I18n
                path="KIBANA-HEADER-DESCRIPTION"
                defaultMessage="Kibana uses index patterns to retrieve data from Elasticsearch indices for things like visualizations."
              />
            </EuiTextColor>
          </p>
        </EuiText>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <I18n>
          {translate => (
            <EuiSwitch
              label={translate({
                path: 'KIBANA-HEADER-SWITCH_LABEL',
                defaultMessage: 'Include system indices',
              })}
              checked={isIncludingSystemIndices}
              onChange={onChangeIncludingSystemIndices}
            />
          )}
        </I18n>
      </EuiFlexItem>
    </EuiFlexGroup>
    <EuiSpacer size="m"/>
  </div>
);
