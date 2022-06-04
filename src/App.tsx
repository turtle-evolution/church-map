import { useState } from 'react';
import { EuiContext } from '@elastic/eui';

import vn from 'translate/vn';
import Routes from 'routes';

import { ApolloProvider } from '@apollo/client';
import createApolloClient from './apollo';

const App = (): JSX.Element => {
  const i18n = {
    mapping: vn
  };
  const [client] = useState(
    createApolloClient(
      'vdfdKqM3OPahYhWnR5P0eDPDGQrPq5KHQjvnsTtN2Vf1aWG60lWpsl9agxAusS5c'
    )
  );
  return (
    <ApolloProvider client={client}>
      <EuiContext i18n={i18n}>
        <div className="App">
          <Routes />
        </div>
      </EuiContext>
    </ApolloProvider>
  );
};

export default App;
