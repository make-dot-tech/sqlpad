import React, {
  FunctionComponent,
  ReactElement,
  useEffect,
  useState,
} from 'react';
import SplitPane from 'react-split-pane';
import { debouncedResizeChart } from '../common/tauChartRef';
import SchemaSidebar from '../schema/SchemaSidebar';
import { useSessionShowSchema } from '../stores/editor-store';
import { isMobile } from 'react-device-detect';

interface EditorPaneSchemaSidebarProps {
  queryId: string;
  children: ReactElement;
}

const EditorPaneSchemaSidebar: FunctionComponent<
  EditorPaneSchemaSidebarProps
> = ({ children, queryId }: EditorPaneSchemaSidebarProps) => {
  const showSchema = useSessionShowSchema();
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (isMobile) {
      setMobile(true);
    }
  }, [mobile]);
  if (!showSchema) {
    return children;
  }

  return (
    <SplitPane
      split={mobile ? 'horizontal' : 'vertical'}
      minSize={150}
      defaultSize={ mobile ? '50vw' : '20%'}
      maxSize={-100}
      pane1Style={{ display: mobile ? 'flow-root !important':'flex !important'}}
      onChange={() => debouncedResizeChart(queryId)}
    >
      <SchemaSidebar />

      {children}
    </SplitPane>
  );
};

export default EditorPaneSchemaSidebar;