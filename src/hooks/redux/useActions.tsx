import { useMemo } from 'react'
import { useAppDispatch } from './useTypedRedux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { UserActionsType, userActions } from '@/store/slices/userSlice/user.slice'
import { toastActions, ToastActionsType } from '@/store/slices/tostSlice/toast.slice'

interface RootActions {
  user: UserActionsType
  toast: ToastActionsType
}

const rootActions: RootActions = {
  user: userActions,
  toast: toastActions,
}

export const useActions = <T extends keyof RootActions>(reducerName: T): RootActions[T] => {
  const dispatch = useAppDispatch()
  const actions = useMemo(
    () => bindActionCreators(rootActions[reducerName], dispatch),
    [dispatch, reducerName]
  )

  return actions
}
