import { useHistory } from 'react-router-dom';

import {
  EuiHeader,
  EuiHeaderLink,
  EuiHeaderLinks,
  EuiHeaderLogo,
  EuiHeaderSectionItem,
  useEuiI18n
} from '@elastic/eui';
import useIcon from 'hook/useIcon';

const Header = (): JSX.Element => {
  const iconVisMapRegion = useIcon('visMapRegion');
  const history = useHistory();

  const goHome = () => {
    history.push('/');
  };

  return (
    <EuiHeader>
      <EuiHeaderSectionItem border="right">
        <EuiHeaderLogo
          iconType={iconVisMapRegion}
          data-testid="logo"
          onClick={goHome}
        >
          {useEuiI18n('euiContext.location', 'Location')}
        </EuiHeaderLogo>
      </EuiHeaderSectionItem>
      <EuiHeaderSectionItem>
        <EuiHeaderLinks aria-label="App navigation links example">
          <EuiHeaderLink isActive>Docs</EuiHeaderLink>
          <EuiHeaderLink>Code</EuiHeaderLink>
          <EuiHeaderLink>Help</EuiHeaderLink>
        </EuiHeaderLinks>
      </EuiHeaderSectionItem>
    </EuiHeader>
  );
};

export default Header;
