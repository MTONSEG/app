import { useMemo } from 'react'
import { useAppDispatch } from './useTypedRedux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { UserActionsType, userActions } from '@/store/slices/user.slice'
import { socialActions, SocialActionsType } from '@/store/slices/social.slice'

interface RootActions {
  user: UserActionsType,
  social: SocialActionsType
}

const rootActions: RootActions = {
  user: userActions,
  social: socialActions
}

export const useActions = <T extends keyof RootActions>(reducerName: T): RootActions[T] => {
  const dispatch = useAppDispatch()
  const actions = useMemo(() => bindActionCreators(rootActions[reducerName], dispatch), [dispatch, reducerName])

  return actions
}
