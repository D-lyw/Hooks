import { useState } from 'react'

const [storeBoolean, setStoreBoolen] = useState<boolean>()

export interface Actions {
    setTrue: () => void;
    setFalse: () => void;
    toggle: (value?: boolean | undefined) => void
}

const useBoolean = (defalutValue = true): [boolean, Actions] => {
  setStoreBoolen(defalutValue)
  const toggle = () => setStoreBoolen(!storeBoolean)
  const setTrue = () => setStoreBoolen(true)
  const setFalse = () => setStoreBoolen(false)

  return [storeBoolean, { toggle, setTrue, setFalse }]
}

export default useBoolean
