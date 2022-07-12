<<<<<<< HEAD
=======
import axios from "axios"
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684

export interface IPostOrder {
	date?: string
	email: string
	items?: string
	name: string
	phone: string
	price?: number
	type?: string
	userEmail?: string | null
}

<<<<<<< HEAD
=======

export const postOrder = async (values: IPostOrder) => {
	await axios.post('https://62965300810c00c1cb73a6b4.mockapi.io/orders', values)
}
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
