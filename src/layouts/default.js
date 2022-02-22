
import * as React from "react";
import { DotcomShell } from '@carbon/ibmdotcom-react';

import '../static/default-template.scss';

const renderTemplate = (props) => {
  const { children } = props;

  const mastheadProps = props?.mastheadProps || {
    platform: 'Gatsby Template by Felipe Zuntini',
  };

  const footerProps = props?.footerProps || {};

  return (
    <DotcomShell mastheadProps={mastheadProps} footerProps={footerProps} >
      { children }
    </DotcomShell>
  );
};

export default renderTemplate;
