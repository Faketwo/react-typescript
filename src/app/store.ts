import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/slice'
import tableReducer from '../features/table/slice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    table: tableReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
