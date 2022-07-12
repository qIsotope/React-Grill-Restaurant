import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IOrderFetch, IReservationFetch } from '../../types/accountBlock'
import { IComment, IcommentObject } from '../../types/commentariesTypes'
import { IProduct } from '../../types/deliveryTypes'
import { IPostOrder } from '../../utils/postOrder'
export const restaurantMockApi = createApi({

	reducerPath: 'getProducts',
	tagTypes: ['Comments', 'Reservation', 'Coms', 'Ordrs'],
	baseQuery: fetchBaseQuery({ baseUrl: 'https://62965300810c00c1cb73a6b4.mockapi.io/' }),
	endpoints: (builder) => ({
		
		getSingleProduct: builder.query<IProduct, string | undefined>({
			query: (id: string) => 'products/' + id,
		}),
		getCommentsForItem: builder.query<IComment[], string | undefined>({
			query: (identificator) => 'comments?item=' + identificator,
			providesTags: (result) =>
				result
					? [
						...result.map(({ id }) => ({ type: 'Comments' as const, id })),
						{ type: 'Comments', id: 'LIST' },
					]
					: [{ type: 'Comments', id: 'LIST' }],
		}),
		postReservation: builder.mutation<any, any>({
			query: (body) => ({
				url: 'orders/',
				method: 'POST',
				body
			}),
		}),
		postOrder: builder.mutation<any, IPostOrder>({
			query: (body) => ({
				url: 'orders/',
				method: 'POST',
				body
			}),
		}),
		postComment: builder.mutation<IComment, IcommentObject>({
			query: (body) => ({
				url: 'comments/',
				method: 'POST',
				body
			}),
			invalidatesTags: [{ type: 'Comments', id: 'LIST' }]
		}),
		queryCities: builder.mutation<IComment, IcommentObject>({
			query: (body) => ({
				url: 'comments/',
				method: 'POST',
				body
			}),
			invalidatesTags: [{ type: 'Comments', id: 'LIST' }]
		}),
		deleteComment: builder.mutation<IComment, string>({
			query: (id) => ({
				url: 'comments/' + id,
				method: 'DELETE'
			}),
			invalidatesTags: [{ type: 'Comments', id: 'LIST' }]
		}),
		getReservations: builder.query<IReservationFetch[], string | undefined>({
			query: () => 'orders?type=reservation',
			providesTags: (result) =>
				result
					? [
						...result.map(({ id }) => ({ type: 'Reservation' as const, id })),
						{ type: 'Reservation', id: 'Reserv' },
					]
					: [{ type: 'Reservation', id: 'Reserv' }],
		}),
		deleteReservationFromAcc: builder.mutation<IReservationFetch, string>({
			query: (id) => ({
				url: 'orders/' + id,
				method: 'DELETE'
			}),
			invalidatesTags: [{ type: 'Reservation', id: 'Reserv' }]
		}),
		getCommentsForAcc: builder.query<IComment[], string | null>({
			query: (email) => `comments?email=${email}`,
			providesTags: (result) =>
				result
					? [
						...result.map(({ id }) => ({ type: 'Coms' as const, id })),
						{ type: 'Coms', id: 'ComsForACC' },
					]
					: [{ type: 'Coms', id: 'ComsForACC' }],

		}),
		deleteComsFromAcc: builder.mutation<IComment, string>({
			query: (id) => ({
				url: 'comments/' + id,
				method: 'DELETE'
			}),
			invalidatesTags: [{ type: 'Coms', id: 'ComsForACC' }]
		}),
		getOrdersForAcc: builder.query<IOrderFetch[], string | null>({
			query: () => `orders?type=order`,
			providesTags: (result) =>
				result
					? [
						...result.map(({ id }) => ({ type: 'Coms' as const, id })),
						{ type: 'Ordrs', id: 'OrdrsFromACC' },
					]
					: [{ type: 'Ordrs', id: 'OrdrsFromACC' }],

		}),
		deleteOrdersFromAcc: builder.mutation<IOrderFetch, string>({
			query: (id) => ({
				url: 'orders/' + id,
				method: 'DELETE'
			}),
			invalidatesTags: [{ type: 'Ordrs', id: 'OrdrsFromACC' }]
		}),
	}),

})


export const {
	useGetSingleProductQuery,
	useGetCommentsForItemQuery,
	useGetReservationsQuery,
	usePostCommentMutation,
	usePostReservationMutation,
	usePostOrderMutation,
	useDeleteCommentMutation,
	useDeleteReservationFromAccMutation,
	useGetCommentsForAccQuery,
	useDeleteComsFromAccMutation,
	useGetOrdersForAccQuery,
	useDeleteOrdersFromAccMutation, 
} = restaurantMockApi
