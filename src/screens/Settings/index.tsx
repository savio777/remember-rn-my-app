import Button from '../../components/Button';
import {ContainerPage, Text} from '../../components/Atom';
import {useToDo} from '../../store/toDo';

export default function Settings() {
  const {resetConfigs, resetHistory} = useToDo();

  return (
    <ContainerPage>
      <Text size={22} fontWeight="bold">
        Configurações
      </Text>

      <Button m="24px 0" onPress={resetConfigs}>
        Resetar Configurações
      </Button>

      <Button onPress={resetHistory}>Resetar Histórico</Button>
    </ContainerPage>
  );
}
