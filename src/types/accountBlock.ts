

export interface IOrderFetch {
	createdAt: string
	name: string
	avatar: string
	id: string,
	phone: string,
	email: string
	items: string
	price: number
	date: string
	userEmail: string
	type: string
}

export interface IReservationFetch {
	createdAt: string
	name: string
	avatar: string
	id: string,
	phone: string,
	date: string
	userEmail: string
	type: string
	people: string;
	hours: string;
}

export interface IAccountReviewList {
	reviews: {
		avatar: string
		comment: string
		createdAt: string
		date: string
		email: string
		id: string
		item: string
		name: string
		params: string
	}[]
}

export interface IAccountOrderItem {
	date: string;
	items: string;
	type: string;
	id: string;
	userEmail: string;
<<<<<<< HEAD
=======
	delete: (id: string, type: string, setItems: any) => void
	setOrders: (v: IOrderFetch[]) => void
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
}

export interface IAccountOrderList {
	orders: {
		createdAt: string
		name: string
		avatar: string
		id: string,
		phone: string,
		email: string
		items: string
		price: number
		date: string
		userEmail: string
		type: string
	}[]
	delete: (id: string, type: string, setItems: any) => void
	setOrders: (v: IOrderFetch[]) => void
}

export interface IAccountReservationItem {
	date: string;
	hours: string;
	type: string;
	id: string;
	userEmail: string;
<<<<<<< HEAD
}

export interface IAccountReservationList {

=======
	delete: (id: string, type: string, setItems: any) => void
	setReservations: (v: IReservationFetch[]) => void
}

export interface IAccountReservationList {
	reservations: {
		createdAt: string
		name: string
		avatar: string
		id: string,
		phone: string,
		people: string
		hours: string;
		date: string
		userEmail: string
		type: string
	}[]
	delete: (id: string, type: string, setItems: any) => void
	setReservations: (v: IReservationFetch[]) => void
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
}

export interface IAccountReviewItem {
	email: string;
	date: string;
	comment: string;
	params: string;
	id: string
	author: string
<<<<<<< HEAD
=======
	setReviews: (v: IAccountReviewList[]) => void;
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
}