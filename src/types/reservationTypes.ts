
export interface IReservation {
<<<<<<< HEAD
	userEmail: string | null
=======
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
	date: "14.06.2022"
	email: "qwe@gmail.com"
	hours: "10:00 am"
	name: "Климюк Олег"
	people: "1 person"
	phone: "+(380) 12 32 13 123"
	type: "reservation"
}


export interface IReservationData {
	value: string;
	label: string;
}

export interface IReservationForm {
	dateValue: string;
	peopleValue: IReservationData;
	hoursValue: IReservationData;
}

