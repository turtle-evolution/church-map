import { EuiFlexGroup, EuiFlexItem, EuiButton } from '@elastic/eui';

interface IPropCardFooter {
  onClick: () => void;
  textButton?: string;
}

const CardFooter = ({ onClick, textButton }: IPropCardFooter): JSX.Element => {
  return (
    <EuiFlexGroup justifyContent="flexEnd">
      <EuiFlexItem grow={false}>
        <EuiButton onClick={onClick}>{textButton}</EuiButton>
      </EuiFlexItem>
    </EuiFlexGroup>
  );
};

CardFooter.defaultProps = {
  textButton: 'Go'
};

export default CardFooter;
