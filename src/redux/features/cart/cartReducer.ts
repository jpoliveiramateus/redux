// import { CartAction, CartActionType, CartState } from "./cartTypes";

// const initialState: CartState = {
//   products: [],
// };

// export const cartReducer = (state = initialState, action: CartAction) => {
//   switch (action.type) {
//     case CartActionType.ADD_PRODUCT:
//       const existingProduct = state.products.find(
//         (p) => p.id === action.payload.id
//       );

//       if (existingProduct) {
//         return {
//           ...state,
//           products: state.products.map((product) =>
//             product.id === action.payload.id
//               ? { ...product, quantity: product.quantity + 1 }
//               : product
//           ),
//         };
//       }

//       return {
//         ...state,
//         products: [...state.products, { ...action.payload, quantity: 1 }],
//       };

//     case CartActionType.INCREASE_PRODUCT_QUANTITY:
//       return {
//         ...state,
//         products: state.products.map((product) =>
//           product.id === action.payload
//             ? { ...product, quantity: product.quantity + 1 }
//             : product
//         ),
//       };

//     case CartActionType.DECREASE_PRODUCT_QUANTITY:
//       return {
//         ...state,
//         products: state.products
//           .map((product) =>
//             product.id === action.payload
//               ? { ...product, quantity: product.quantity - 1 }
//               : product
//           )
//           .filter((product) => product.quantity > 0),
//       };

//     default:
//       return state;
//   }
// };
