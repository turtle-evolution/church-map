import { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {
  EuiCard,
  EuiFlexItem,
  EuiI18n,
  EuiPage,
  EuiPageBody,
  EuiSpacer,
  EuiTextAlign,
  EuiTitle,
  useEuiI18n,
  EuiFlexGrid,
  EuiLoadingSpinner
} from '@elastic/eui';

import { ROUTES_ENUM } from 'routes/routes-enum';

import { IUser } from 'common/types';

import { CardFooter } from 'components';

const Home = (): JSX.Element => {
  const history = useHistory();

  const goDetail = (userId: string) => {
    history.push(`${ROUTES_ENUM.USER}/${userId}`);
  };
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    let mounted = true;

    const getUsers = async () => {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      if (mounted && response) {
        setUsers(response.data);
      }
    };

    getUsers();

    return () => {
      mounted = false;
    };
  }, []);

  const translateBtnGo = useEuiI18n('euiContext.continue', 'Continue');

  return (
    <EuiPage direction="column">
      <EuiTitle size="l">
        <EuiTextAlign textAlign="center">
          <EuiSpacer size="l" />
          <h1>
            <EuiI18n token="euiContext.welcome" default="Welcome!" />
          </h1>
          <EuiSpacer size="l" />
        </EuiTextAlign>
      </EuiTitle>
      <EuiPageBody>
        {users.length ? (
          <EuiFlexGrid columns={3} data-testid="user-list">
            {users.map((user: IUser) => (
              <EuiFlexItem key={user.id} grow={3} data-testid="user-item">
                <EuiCard
                  textAlign="left"
                  title={user.name}
                  description={user.username}
                  footer={
                    <CardFooter
                      onClick={() => goDetail(user.id)}
                      textButton={translateBtnGo}
                    />
                  }
                />
              </EuiFlexItem>
            ))}
          </EuiFlexGrid>
        ) : (
          <div className="spinner-custom">
            <EuiLoadingSpinner size="l" />
          </div>
        )}
      </EuiPageBody>
    </EuiPage>
  );
};

export default Home;
