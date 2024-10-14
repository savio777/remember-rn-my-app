import styled from 'styled-components/native';
import {Text} from '../Atom';

type Props = {
  m?: string;
  variant?: 'primary' | 'secondary';
};

export const Container = styled.TouchableOpacity<Props>`
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 18px;
  margin: ${({m}) => m || 0};
  border-radius: ${({theme}) => theme.borderRadius};
  background-color: ${({theme, variant}) =>
    variant === 'primary' ? theme.colors.gray.green : theme.colors.black};
`;

export const TextButton = styled(Text).attrs(({theme, variant}) => ({
  color: variant !== 'primary' ? theme.colors.gray.green : theme.colors.black,
  textTransform: 'uppercase',
  fontWeight: 'bold',
}))<Props>``;
