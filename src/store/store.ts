import { toastReducer } from '@/store/slices/tostSlice/toast.slice'
import { userReducer } from '@/store/slices/userSlice/user.slice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    user: userReducer,
    toast: toastReducer,
  },
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
