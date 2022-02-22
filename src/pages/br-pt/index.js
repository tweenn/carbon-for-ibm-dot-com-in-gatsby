
import * as React from "react";
import GlobalPage from '../index';

const renderTemplate = () => {

  const footerProps = {
    type: 'short'
  };

  const children = (
    <>
      This is a hijacked page template
    </> 
  );

  return (
    <GlobalPage footerProps={footerProps}>
      { children }
    </GlobalPage>
  );
};

export default renderTemplate;
