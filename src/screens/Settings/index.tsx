import Button from '../../components/Button';
import {ContainerPage, Text} from '../../components/Atom';
import {useToDo} from '../../store/toDo';

export default function Settings() {
  const {resetConfigs, resetHistory} = useToDo();

  return (
    <ContainerPage p="24px">
      <Text size={22} fontWeight="bold">
        Configurações
      </Text>

      <Button m="24px 0" onPress={resetConfigs}>
        Resetar Configurações
      </Button>

      <Button m="0 0 auto" onPress={resetHistory}>
        Resetar Histórico
      </Button>

      <Text textAlign="center" size={14}>
        Feito por:
      </Text>

      <Text textAlign="center">Sávio</Text>
      <Text textAlign="center">github.com/savio777</Text>
    </ContainerPage>
  );
}
