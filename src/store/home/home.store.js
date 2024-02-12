import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("homeSlice/fetchProducts", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
});

const homeSlice = createSlice({
  name: "home",
  initialState: {
    products: [],
    filteredProducts: [],
    isLoading: false,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
    filterProducts: (state, action) => {
      const category = action.payload;
      if (category) {
        const filtered = state.filteredProducts.filter((product) => product.category === category);
        state.products = filtered;
      }
    },

    searchProducts: (state, action) => {
      const query = action.payload;
      state.products = state.filteredProducts.filter(
        (product) => product.title && product.title.toLowerCase().includes(query.toLowerCase())
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.filteredProducts = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setProducts, setCategories, filterProducts, searchProducts } = homeSlice.actions;

export const homeReducer = homeSlice.reducer;
