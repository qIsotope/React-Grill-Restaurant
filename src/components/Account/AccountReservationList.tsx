
<<<<<<< HEAD
import { useAuth } from '../../hooks/useAuth'
import { useGetReservationsQuery } from '../../redux/services/productItem.service'
import { AccountReservationItem } from './AccountReservationItem'


export const AccountReservationList = () => {
	const { data } = useGetReservationsQuery('')
	const { email } = useAuth()

	const reservations = data?.filter(((o) => o.userEmail === email))

	if (reservations?.length === 0) {
=======
import { IAccountReservationList } from '../../types/accountBlock'
import { AccountReservationItem } from './AccountReservationItem'


export const AccountReservationList = (props: IAccountReservationList) => {

	if (props.reservations.length === 0) {
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
		return (
			<>
				<div className='account-orders-label'>НЕТ РЕЗЕРВАЦИЙ</div>
			</>
		)
	}
	else return (
		<>
			<div className="account-orders">
				<div className="account-orders-list">
<<<<<<< HEAD
					{reservations?.map((reservation) =>
						<AccountReservationItem  type={reservation.type}
							date={reservation.date} hours={reservation.hours}
							key={reservation.id} id={reservation.id} userEmail={reservation.userEmail}
							
=======
					{props?.reservations.map((reservation) =>
						<AccountReservationItem delete={props.delete} type={reservation.type}
							date={reservation.date} hours={reservation.hours}
							key={reservation.id} id={reservation.id} userEmail={reservation.userEmail}
							setReservations={props.setReservations}
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
						/>)}
				</div>
			</div>

		</>
	)
}
<<<<<<< HEAD


=======
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
