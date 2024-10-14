import styled, {css} from 'styled-components/native';
import {FlatListProps, TextProps} from 'react-native';

export const GenericList = styled.FlatList.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    gap: 12,
  },
} as FlatListProps<any>)``;

type ContainerPageProps = {
  p?: string;
};

export const ContainerPage = styled.View<ContainerPageProps>`
  flex: 1;
  background-color: ${({theme}) => theme.colors.black};
  padding: ${({p}) => p || '24px 24px 0'};
`;

export interface TextCustomProps extends TextProps {
  flex?: number;
  m?: string;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  textAlign?: 'left' | 'right' | 'center' | 'justify';
  textDecorationLine?: 'underline' | 'line-through';
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
  size?: number;
  color?: string;
}

export const Text = styled.Text<TextCustomProps>`
  font-weight: ${({fontWeight}) => fontWeight || 'normal'};
  text-align: ${({textAlign}) => textAlign || 'auto'};
  text-decoration-line: ${({textDecorationLine}) =>
    textDecorationLine || undefined};
  text-transform: ${({textTransform}) => textTransform || undefined};
  font-size: ${({size}) => size || 16}px;
  color: ${({theme, color}) => color || theme.colors.white};
  margin: ${({m}) => m || 0};

  ${({flex}) =>
    flex &&
    css`
      flex: ${flex};
    `}
`;
