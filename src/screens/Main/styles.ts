import {FlatListProps} from 'react-native';
import styled from 'styled-components/native';

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const InputTitle = styled.TextInput`
  color: ${({theme}) => theme.colors.white};
  font-size: 22px;
  padding: 0;
  flex: 1;
`;

export const ButtonEdit = styled.TouchableOpacity`
  padding-left: 24px;
`;
