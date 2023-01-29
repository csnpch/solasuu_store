import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { productInterface } from '../interfaces/product'

interface ProductsState {
    value: productInterface[]
}

const initialState: ProductsState = {
    value: [],
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<productInterface[]>) => {
        state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setProducts } = productSlice.actions

export default productSlice.reducer