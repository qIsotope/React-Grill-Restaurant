import { configureStore } from '@reduxjs/toolkit'
import product from '../slices/productSlice'
import cart from '../slices/cartSlice'
import user from '../slices/userSlice'
import loader from '../slices/loaderSlice'
<<<<<<< HEAD
import { restaurantMockApi } from '../services/productItem.service'

=======
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684


export const store = configureStore({
	reducer: {
		product,
		cart,
		user,
		loader,
<<<<<<< HEAD
		[restaurantMockApi.reducerPath]: restaurantMockApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(restaurantMockApi.middleware,),
=======
	},
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>