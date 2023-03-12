import { useParams } from 'react-router-dom';

import {
  EuiPage,
  EuiPageSection,
  EuiEmptyPrompt,
  EuiPageBody,
  EuiLoadingSpinner
} from '@elastic/eui';

import { gql, useQuery } from '@apollo/client';

const LocationDetail = (): JSX.Element => {
  const { locationId } = useParams<{ locationId: string }>();

  const GET_CHURCH_DETAIL = gql`
    query GetChurchDetail($churchId: Int!) {
      tbl_churches(where: { id: { _eq: $churchId } }) {
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

  const dataDetail = data.tbl_churches[0];
  return (
    <EuiPage paddingSize="none">
      <EuiPageBody>
        <EuiPageSection style={{ display: 'flex' }}>
          <EuiPageSection
            paddingSize="none"
            color="subdued"
            data-testid="user-detail"
          >
            <EuiEmptyPrompt
              title={<span>{dataDetail.name}</span>}
              body={<>{dataDetail.long_description || dataDetail.address}</>}
            />
          </EuiPageSection>
        </EuiPageSection>
      </EuiPageBody>
    </EuiPage>
  );
};

export default LocationDetail;
