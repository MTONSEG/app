import { useActions } from '@/hooks/redux/useActions'
import { useAppSelector } from '@/hooks/redux/useTypedRedux'
import { ToastType } from '@/types/common.types'
import ErrorIcon from '@icons/error.svg?react'
import SaveIcon from '@icons/save.svg?react'
import WarningIcon from '@icons/warning.svg?react'
import React, { ReactNode, useEffect } from 'react'
import './Toast.scss'

const Toast: React.FC = () => {
  const { message, type, isVisible } = useAppSelector(state => state.toast)
  const { hideToast } = useActions('toast')

  const iconMap: Record<ToastType, ReactNode> = {
    success: <SaveIcon />,
    warning: <WarningIcon />,
    error: <ErrorIcon />,
  }

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        hideToast()
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div className={`toast active toast--${type}`}>
      {iconMap[type]}
      <span>{message}</span>
    </div>
  )
}

export default Toast
