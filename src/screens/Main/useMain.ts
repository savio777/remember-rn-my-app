import {useCallback, useState} from 'react';

const useMain = () => {
  const [ediTitle, setEdiTitle] = useState(false);

  const handleChangeEditTitle = useCallback(() => {
    setEdiTitle(oldValue => !oldValue);
  }, []);

  return {ediTitle, handleChangeEditTitle};
};

export default useMain;
