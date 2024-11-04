import { useMemo } from 'react'
import { useAppDispatch } from './useTypedRedux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { UserActionsType, userActions } from '@/store/slices/user.slice'

interface RootActions {
  user: UserActionsType,
}

const rootActions: RootActions = {
  user: userActions,
}

export const useActions = <T extends keyof RootActions>(reducerName: T): RootActions[T] => {
  const dispatch = useAppDispatch()
  const actions = useMemo(() => bindActionCreators(rootActions[reducerName], dispatch), [dispatch, reducerName])

  return actions
}
