import { IToastState } from '@/store/slices/tostSlice/toast.types'
import { ToastType } from '@/types/common.types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: IToastState = {
  message: '',
  type: 'success',
  isVisible: false,
}

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    showToast: (state, action: PayloadAction<{ message: string; type: ToastType }>) => {
      state.message = action.payload.message
      state.type = action.payload.type
      state.isVisible = true
    },
    hideToast: state => {
      state.isVisible = false
    },
  },
})

export type ToastActionsType = typeof toastSlice.actions
export const { reducer: toastReducer, actions: toastActions } = toastSlice
