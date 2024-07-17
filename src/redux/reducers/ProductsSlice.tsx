import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface IProducts {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: [number, number];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
}

interface IState {
    items:IProducts[],
    isError: boolean
}

const initialState = {
  items:[],
  isError: false,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
    //   console.log(response);

      return fulfillWithValue(response?.data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.items = [];
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload.products;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isError = true;
      const error: any = action.payload;
      console.error(error.message as string);
    });
  },
});

export default productsSlice.reducer;
