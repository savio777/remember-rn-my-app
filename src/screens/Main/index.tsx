import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from 'styled-components';
import {useEffect, useRef} from 'react';
import {TextInput} from 'react-native';

import {useToDo} from '../../store/toDo';
import {formatDate} from '../../utils/date';
import {ContainerPage, Text} from '../../components/Atom';
import {ButtonEdit, InputTitle, Row} from './styles';
import useMain from './useMain';

export default function Main() {
  const theme = useTheme();

  const {current} = useToDo();

  const {ediTitle, handleChangeEditTitle} = useMain();

  const refInputTitle = useRef<TextInput>(null);

  useEffect(() => {
    if (ediTitle) {
      refInputTitle.current?.focus();
    }
  }, [ediTitle]);

  return (
    <ContainerPage>
      <Row>
        <InputTitle
          ref={refInputTitle}
          value={current.title}
          editable={ediTitle}
        />

        <ButtonEdit onPress={handleChangeEditTitle}>
          <Icon name="pencil" color={theme.colors.white} size={22} />
        </ButtonEdit>
      </Row>
      <Text>{formatDate(current.date)}</Text>
    </ContainerPage>
  );
}
