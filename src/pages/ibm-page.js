import * as React from "react";
import { Column, Grid, Row  } from "carbon-components-react"
import { DotcomShell } from '@carbon/ibmdotcom-react';

const IndexPage = () => {
  return (
    <DotcomShell>
      <Grid>
        <Row>
          <Column
            className="nav-column"
            sm={4}
            md={8}
            lg={11}
          >
            <main>Stuff</main>
          </Column>
        </Row>
      </Grid>
    </DotcomShell>
  );
};

export default IndexPage;
