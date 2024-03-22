import React from 'react'

// hooks
import HookUseState from '../../components/HookUseState'
import HookUseReducer from '../../components/HookUseReducer'
import HookUseEffect from '../../components/HookUseEffect'
import HookUseRef from '../../components/HookUseRef'
import HookUseCallback from '../../components/HookUseCallback'
import HookUseMemo from '../../components/HookUseMemo'
import HooksUseLayoutEffect from '../../components/HooksUseLayoutEffect'

// useContext
import { useContext } from 'react'
import { SomeContext } from '../../components/HookUseContext'

export const Home = () => {
  const {contextValue} = useContext(SomeContext)

  return (
    <div>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
      <h2>useContext</h2>
      <p>Valor do context: {contextValue}</p>
      <HookUseRef />
      <HookUseCallback />
      <HookUseMemo />
      <HooksUseLayoutEffect />
    </div>
  )
}
