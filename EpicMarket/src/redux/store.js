import { configureStore } from '@reduxjs/toolkit';
import walletSlice from './Slices/walletSlice';


const combinedReducer = {
    wallet : walletSlice,
    
}
export default configureStore({
    reducer: combinedReducer
})


