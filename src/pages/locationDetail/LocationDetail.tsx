import { useParams } from 'react-router-dom';

import {
  EuiPage,
  EuiPageContent,
  EuiEmptyPrompt,
  EuiPageBody,
  EuiLoadingSpinner
} from '@elastic/eui';

import { gql, useQuery } from '@apollo/client';

const LocationDetail = (): JSX.Element => {
  const { locationId } = useParams<{ locationId: string }>();

  const GET_CHURCH_DETAIL = gql`
    query GetChurchDetail($churchId: Int!) {
      churchs(where: { id: { _eq: $churchId } }) {
        name
        long_description
        address
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_CHURCH_DETAIL, {
    variables: {
      churchId: locationId
    }
  });

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

  const dataDetail = data.churchs[0];
  return (
    <EuiPage paddingSize="none">
      <EuiPageBody>
        <EuiPageContent
          borderRadius="none"
          hasShadow={false}
          style={{ display: 'flex' }}
        >
          <EuiPageContent
            verticalPosition="center"
            horizontalPosition="center"
            paddingSize="none"
            color="subdued"
            hasShadow={false}
            data-testid="user-detail"
          >
            <EuiEmptyPrompt
              title={<span>{dataDetail.name}</span>}
              body={<>{dataDetail.long_description || dataDetail.address}</>}
            />
          </EuiPageContent>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  );
};

export default LocationDetail;
