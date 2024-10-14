import {useRef} from 'react';
import {useTheme} from 'styled-components';
import {TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import CheckListItem from '../../components/CheckListItem';
import {useToDo} from '../../store/toDo';
import {formatDate} from '../../utils/date';
import {ContainerPage, GenericList, Text} from '../../components/Atom';
import {ButtonEdit, InputTitle, Row} from './styles';
import useMain from './useMain';

export default function Main() {
  const theme = useTheme();

  const {current} = useToDo();

  const {isOpenModalAdd, handleChangeIsOpenModalAdd} = useMain();

  const refInputTitle = useRef<TextInput>(null);

  return (
    <ContainerPage>
      <Row>
        <InputTitle ref={refInputTitle} value={current.title} />

        <ButtonEdit onPress={handleChangeIsOpenModalAdd}>
          <Icon name="plus" color={theme.colors.white} size={22} />
        </ButtonEdit>
      </Row>

      <Text m="0 0 24px">{formatDate(current.date)}</Text>

      <GenericList
        keyExtractor={item => item.id}
        data={current.todos as any[]}
        renderItem={({item}) => <CheckListItem {...item} />}
      />
    </ContainerPage>
  );
}
