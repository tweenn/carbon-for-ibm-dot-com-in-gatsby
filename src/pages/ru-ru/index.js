
import * as React from "react";
import GlobalPage from '../index';

const renderTemplate = () => {
  const footerProps = {
    type: 'short'
  };

  const language = 'ru-ru';

  return (
    <GlobalPage footerProps={footerProps} language={language}>
    </GlobalPage>
  );
};

export default renderTemplate;
