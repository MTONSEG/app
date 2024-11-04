import { useActions } from '@/hooks/redux/useActions'
import { ToastType } from '@/types/common.types'

const useToast = () => {
  const { showToast } = useActions('toast')

  return (message: string, type: ToastType = 'success') => {
    showToast({ message, type })
  }
}

export default useToast
