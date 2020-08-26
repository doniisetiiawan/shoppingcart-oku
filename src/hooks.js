/* eslint-disable import/prefer-default-export */
import { useState } from 'react';

function useInputState(initialValue) {
  const [value, setValue] = useState(initialValue);

  function setValueFromEvent(e) {
    setValue(e.target.value);
  }

  return [value, setValueFromEvent];
}

export { useInputState };
