import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice/userSlice";
import commandeSlice from "./commandeSlice";
import productSlice from "./productSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    commande:commandeSlice,
    produit:productSlice
  },
});
