
import * as React from "react";
import { DefaultLayout } from '../layouts';
import { Home as content } from '../content/index'

const renderTemplate = (props) => {
  const mastheadProps = props?.mastheadProps || {};

  const footerProps = props?.footerProps || {};

  const language = props?.language || 'us-en';

  const children = props.children || (
    <>
      { content[language]?.header }
    </> 
  );

  return (
    <DefaultLayout mastheadProps={mastheadProps} footerProps={footerProps}>
      { children }
    </DefaultLayout>
  );
};

export default renderTemplate;
