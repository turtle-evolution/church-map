import { gql, useQuery } from '@apollo/client';
import {
  EuiCard,
  EuiFlexGrid,
  EuiFlexItem,
  EuiI18n,
  EuiLoadingSpinner,
  EuiPage,
  EuiPageBody,
  EuiSpacer,
  EuiTextAlign,
  EuiTitle,
  useEuiI18n
} from '@elastic/eui';
import { IUser } from 'common/types';
import { CardFooter } from 'components';
import { useHistory } from 'react-router-dom';
import { ROUTES_ENUM } from 'routes/routes-enum';

const Churches = (): JSX.Element => {
  const GET_MY_CHURCHES = gql`
    query getChurs {
      churchs {
        id
        name
      }
    }
  `;

  const history = useHistory();

  const { loading, error, data } = useQuery(GET_MY_CHURCHES);
  const translateBtnGo = useEuiI18n('euiContext.continue', 'Continue');

  if (loading) {
    return (
      <div className="spinner-custom">
        <EuiLoadingSpinner size="l" />
      </div>
    );
  }
  if (error) {
    console.error(error);
    return <div>{error}</div>;
  }

  const goDetail = (userId: string) => {
    history.push(`${ROUTES_ENUM.USER}/${userId}`);
  };

  return (
    <>
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
          <EuiFlexGrid columns={3} data-testid="user-list">
            {data.churchs.map((user: IUser) => (
              <EuiFlexItem key={user.id} grow={3} data-testid="user-item">
                <EuiCard
                  textAlign="left"
                  title={user.name}
                  description={user.name}
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
        </EuiPageBody>
      </EuiPage>
    </>
  );
};

export default Churches;
