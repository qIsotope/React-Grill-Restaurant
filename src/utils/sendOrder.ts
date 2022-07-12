import { clearCart, showThanks } from "../redux/slices/cartSlice"
import { hideLoader, showLoader } from "../redux/slices/loaderSlice"
<<<<<<< HEAD
=======
import { postOrder } from "./postOrder"
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
import { reset } from "./reset"

import emailjs from '@emailjs/browser';

<<<<<<< HEAD
export const sendEmail = async (values: any, e: any, dispatch: any, cartProducts: any, sumOfOrder: any, email: any, setError: any, postOrder:any) => {
=======
export const sendEmail = async (values: any, e: any, dispatch: any, cartProducts: any, sumOfOrder: any, email: any, setError: any) => {
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
	let stringOfItems = ''
	cartProducts.forEach((item: { name: string; count: string; }) => stringOfItems += item.name + '-' + item.count + '  ')
	const now = new Date().toLocaleString().replace(',', '')
	dispatch(showLoader())
	values.items = stringOfItems
	values.price = sumOfOrder
	values.date = now
	values.userEmail = email
	values.type = 'order'
	await emailjs.send('service_rmjvqes', 'template_m3ieock', values, 'TAAu1HERcIl3Df5lP')
		.then((result) => {
			if (result.status === 200) {
				dispatch(clearCart())
				dispatch(showThanks())
			}
		}, (error: any) => {
			console.log(error);
			setError(true)
			setTimeout(() => {
				setError(false)
			}, 3000);
		});
	postOrder(values)
	reset(e, hideLoader, dispatch)
}