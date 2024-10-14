import {ReactNode} from 'react';

import {Container, TextButton} from './styles';

type Props = {
  m?: string;
  variant?: 'primary' | 'secondary';
  onPress?: () => void;
  children: ReactNode;
};

export default function Button({
  variant = 'primary',
  m,
  onPress,
  children,
}: Props) {
  return (
    <Container variant={variant} m={m} onPress={onPress}>
      <TextButton variant={variant}>{children}</TextButton>
    </Container>
  );
}
