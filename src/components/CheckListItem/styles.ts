import styled, {css} from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 24px;
`;

export const BadgeEveryDay = styled.View`
  background-color: ${({theme}) => theme.colors.yellow.regular};
  border-radius: ${({theme}) => theme.borderRadius};
  padding: 2px 5px;
`;

type PropsCheck = {status: 'done' | 'blocked' | 'toDo'};

export const Check = styled.TouchableOpacity<PropsCheck>`
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 36px;
  border-width: 1px;

  border-color: ${({theme}) => theme.colors.white};

  ${({theme, status}) =>
    status === 'done' &&
    css`
      border-color: ${theme.colors.green.regular};
    `};

  ${({theme, status}) =>
    status === 'blocked' &&
    css`
      border-color: ${theme.colors.red.regular};
    `};
`;
