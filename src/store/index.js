import menu from "./modules/menu"
import { configureStore  } from "@reduxjs/toolkit"

export default configureStore({
 reducer: {
   menu
 }
})