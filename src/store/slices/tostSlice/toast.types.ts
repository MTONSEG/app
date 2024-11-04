import { ToastType } from '@/types/common.types'

export interface IToastState {
  message: string
  type: ToastType
  isVisible: boolean
}
