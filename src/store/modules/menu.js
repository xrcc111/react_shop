import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getMenuTree } from '@/api/common'
/**
 * createAsyncThunk
 * state 1.pending(进行中) 2.fulfilled(成功) 3.rejected(失败)
 * 类似于Prmomise
 */
export const loadMenu = createAsyncThunk('menu', async(data) => {
  const result = await getMenuTree(data)
  if(result.code === 200) {
    const { rows } = result
    return rows
  }
})

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    menuArray: [], // 获取的的菜单
    open: false // 是否显示菜单
  },
  reducers:{
    openTopMenu(state, action) {
      state.open = true
    },
    closeTopMenu(state, action) {
      state.open = false
    }
  },
  extraReducers: {
    [loadMenu.fulfilled](state,{ payload }) {
      state.menuArray = payload[0].children
    },
    [loadMenu.rejected](state, error) {
      console.log(error)
      return error
    },
    [loadMenu.pending](state) {
    }
  }
})

export default menuSlice.reducer

export const { openTopMenu, closeTopMenu} = menuSlice.actions


