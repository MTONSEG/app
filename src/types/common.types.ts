export type StatusType = 'loading' | 'success' | 'error' | 'init'
export type StringNull = string | null
export type NumNull = number | null
export type NumStr = string | number

export interface IOption {
  id: string
  title: string
  value: string
  selected: boolean
}
