import {useCallback, useState} from 'react';

const useMain = () => {
  const [isOpenModalAdd, setIsOpenModalAdd] = useState(false);

  const handleChangeIsOpenModalAdd = useCallback(() => {
    setIsOpenModalAdd(oldValue => !oldValue);
  }, []);

  return {isOpenModalAdd, handleChangeIsOpenModalAdd};
};

export default useMain;
