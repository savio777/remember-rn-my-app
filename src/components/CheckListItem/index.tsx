import {useTheme} from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Text} from '../Atom';
import {Check, Container, BadgeEveryDay} from './styles';

interface Props extends ICheckList {
  onPress?: () => void;
  onPressCheck?: () => void;
}

export default function CheckListItem({
  status,
  title,
  everyDay,
  onPress,
  onPressCheck,
}: Props) {
  const theme = useTheme();

  return (
    <Container onPress={onPress}>
      <Check status={status} onPress={onPressCheck}>
        {status === 'done' && (
          <Icon name="check" size={10} color={theme.colors.green.regular} />
        )}
      </Check>

      <Text flex={1}>{title}</Text>

      {everyDay && (
        <BadgeEveryDay>
          <Text color={theme.colors.black}>todo dia</Text>
        </BadgeEveryDay>
      )}
    </Container>
  );
}
