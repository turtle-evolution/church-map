import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import {
  EuiPage,
  EuiPageContent,
  EuiEmptyPrompt,
  EuiPageBody,
  EuiLoadingSpinner
} from '@elastic/eui';

import { IUser } from 'common/types';

const UserDetail = (): JSX.Element => {
  const { userId } = useParams<{ userId: string }>();
  const [infoUser, setInfoUser] = useState<IUser>();

  useEffect(() => {
    let mounted = true;
    if (userId) {
      const getUser = async () => {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        if (mounted && response) {
          setInfoUser(response.data);
        }
      };

      getUser();
    }

    return () => {
      mounted = false;
    };
  }, [userId]);

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
            {infoUser ? (
              <EuiEmptyPrompt
                title={<span>{infoUser.name}</span>}
                body={<>{infoUser.address.street}</>}
              />
            ) : (
              <div className="spinner-custom">
                <EuiLoadingSpinner size="l" />
              </div>
            )}
          </EuiPageContent>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  );
};

export default UserDetail;
