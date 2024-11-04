import { ReactNode } from 'react'

export type StatusType = 'loading' | 'success' | 'error' | 'init'
export type StringNull = string | null
export type NumNull = number | null
export type NumStr = string | number
export type ToastType = 'success' | 'error' | 'warning' 

export type SocialIconType = {
  [key: string]: {
    icon: ReactNode
    color: string
  }
}
