import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  user:null,
  errorMassage:""
}
export const appSlice = createSlice({
  name: 'appStore',
  initialState,
  reducers: {
    setToken: (state,action) => {
      state.token = action.payload
    },
    setUser: (state,action) => {
      state.user = action.payload
    },
    setErroMassage:(state,action)=>{
      state.errorMassage = action.payload
    }
  },
})


export const { setToken,setUser,setErroMassage } = appSlice.actions
export const getUser = (state) => state.app.user;
export default appSlice.reducer