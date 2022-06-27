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
import { IChurch } from 'common/types';
import { CardFooter } from 'components';
import { useHistory } from 'react-router-dom';
import { ROUTES_ENUM } from 'routes/routes-enum';

const Churches = (): JSX.Element => {
  const GET_MY_CHURCHES = gql`
    query GetChurches {
      churchs {
        id
        name
        address
        images
        description
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
    return <div>{error}</div>;
  }

  const goDetail = (churchId: number) => {
    history.push(`${ROUTES_ENUM.LOCATION}/${churchId}`);
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
          <EuiFlexGrid columns={4} data-testid="church-list">
            {data.churchs.map((church: IChurch) => (
              <EuiFlexItem key={church.id} grow={3} data-testid="church-item">
                <EuiCard
                  textAlign="left"
                  title={church.name}
                  titleElement="h2"
                  description={church.address}
                  image={`${ROUTES_ENUM.HOME}${church.images}`}
                  footer={
                    <CardFooter
                      onClick={() => goDetail(church.id)}
                      textButton={translateBtnGo}
                    />
                  }
                >
                  {church.description}
                </EuiCard>
              </EuiFlexItem>
            ))}
          </EuiFlexGrid>
        </EuiPageBody>
      </EuiPage>
    </>
  );
};

export default Churches;
