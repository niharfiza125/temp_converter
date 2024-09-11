import { configureStore } from '@reduxjs/toolkit';
import tempReducer from './features/tempconverter/tempconverSlice';  // Ensure default import

export const storetemp = configureStore({
  reducer: {
    temp_converter: tempReducer,  
  },
});
