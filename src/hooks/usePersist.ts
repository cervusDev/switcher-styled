import { Dispatch, SetStateAction, useState, useEffect } from "react"

type Response<T> = [
  T,
  Dispatch<SetStateAction<T>>
]

export function usePersistState<T>(key: string, initalState: T): Response<T> {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key)
    
    if (storageValue) {
      return JSON.parse(storageValue)
    }

    return initalState
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, setState]);

  return [ state, setState ]
}