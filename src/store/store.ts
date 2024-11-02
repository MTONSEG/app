import { socialReducer } from '@/store/slices/social.slice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    social: socialReducer,
  },
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
