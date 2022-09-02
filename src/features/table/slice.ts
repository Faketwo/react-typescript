import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export interface DataType {
  key: number
  name: string
  age: number
  address: string
  tags: string[]
}

interface TableState {
  value: readonly DataType[] | undefined
  status: 'idle' | 'loading' | 'failed'
}

const initialState: TableState = {
  value: undefined,
  status: 'idle',
}

export const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    getTableList: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { getTableList } = tableSlice.actions

export const selectTable = (state: RootState) => state.table.value

export default tableSlice.reducer
