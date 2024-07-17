import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICartItems {
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
  images: string[];
  cartQuantity: number; // Add cartQuantity to the item interface
}

interface IState {
  cartItems: ICartItems[];
  cartTotalQty: number;
  cartTotalAmount: number;
}

const initialState: IState = {
  cartItems: [],
  cartTotalQty: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
        // Step 1 - Check if item exists in the cart or not..
       const itemIndex =  state.cartItems.findIndex((item)=> item.id === action.payload.id);
       if(itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1
        // If same item is clicked..increment its count as well..
        state.cartItems[itemIndex].price += 1
        // So..if item ahe..so me cartQuantity chi value increase krnar
        // console.log();
       } else {
           const tempProduct = {...action.payload, cartQuantity:1}
           state.cartItems.push(tempProduct);

       }

       // Update cartTotalQty and cartTotalAmount
       state.cartTotalQty += 1
       state.cartTotalAmount = action.payload.price;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
