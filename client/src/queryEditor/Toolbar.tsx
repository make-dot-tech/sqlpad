import React from 'react';
import ConnectionDropDown from './ConnectionDropdown';
import ToolbarChartButton from './ToolbarChartButton';
import ToolbarConnectionClientButton from './ToolbarConnectionClientButton';
import ToolbarHistoryButton from './ToolbarHistoryButton';
import ToolbarQueryName from './ToolbarQueryName';
import ToolbarRunButton from './ToolbarRunButton';
import ToolbarCancelButton from './ToolbarCancelButton';
import ToolbarSpacer from './ToolbarSpacer';
import ToolbarToggleSchemaButton from './ToolbarToggleSchemaButton';

function Toolbar() {
  return (
    <div
      className="dark:bg-gray-800"
      style={{
        width: '100%',
        padding: 6,
        borderBottom: '1px solid rgb(204, 204, 204)',
      }}
    >
      <div style={{ display: 'flex' }}>
        <ToolbarToggleSchemaButton />
        <ConnectionDropDown />
        <ToolbarSpacer />
        <ToolbarConnectionClientButton />
        <ToolbarSpacer grow />
        <ToolbarQueryName />
        <ToolbarSpacer grow />
        <ToolbarRunButton />
        <ToolbarSpacer />
        <ToolbarCancelButton />
        <ToolbarSpacer />
        <ToolbarHistoryButton />
        <ToolbarChartButton />
      </div>
    </div>
  );
}

export default React.memo(Toolbar);
