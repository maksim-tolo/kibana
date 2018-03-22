import React from 'react';
import { FormattedMessage } from 'react-intl';

import {
  EuiSpacer,
  EuiTitle,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiTextColor,
  EuiSwitch,
} from '@elastic/eui';

export const Header = ({
  isIncludingSystemIndices,
  onChangeIncludingSystemIndices,
}) => (
  <div>
    <EuiSpacer size="m"/>
    <EuiTitle>
      <h1>
        <FormattedMessage
          id="KIBANA-HEADER-TITLE"
          defaultMessage="Create index pattern"
        />
      </h1>
    </EuiTitle>
    <EuiFlexGroup justifyContent="spaceBetween" alignItems="flexEnd">
      <EuiFlexItem grow={false}>
        <EuiText>
          <p>
            <EuiTextColor color="subdued">
              <FormattedMessage
                id="KIBANA-HEADER-DESCRIPTION"
                defaultMessage="Kibana uses index patterns to retrieve data from Elasticsearch indices for things like visualizations."
              />
            </EuiTextColor>
          </p>
        </EuiText>
      </EuiFlexItem>
      <EuiFlexItem grow={false}>
        <EuiSwitch
          label={
            <FormattedMessage
              id="KIBANA-HEADER-DESCRIPTION"
              defaultMessage="Include system indices"
            />
          }
          checked={isIncludingSystemIndices}
          onChange={onChangeIncludingSystemIndices}
        />
      </EuiFlexItem>
    </EuiFlexGroup>
    <EuiSpacer size="m"/>
  </div>
);
