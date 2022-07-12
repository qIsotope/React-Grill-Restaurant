
import { useAppDispatch } from '../../hooks/redux-hooks';
import { useAuth } from '../../hooks/useAuth';
<<<<<<< HEAD
import { useDeleteReservationFromAccMutation } from '../../redux/services/productItem.service';
import { hideLoader, showLoader } from '../../redux/slices/loaderSlice';
import { IAccountReservationItem } from '../../types/accountBlock';
=======
import { IAccountReservationItem } from '../../types/accountBlock';
import { deleteItem } from '../../utils/deleteItemsFromAcc';
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684


export const AccountReservationItem = (props: IAccountReservationItem) => {
	const { email } = useAuth()
<<<<<<< HEAD
	const [deleteReservation] = useDeleteReservationFromAccMutation()
	const dispatch = useAppDispatch()
	const deleteRes = async (id: string) => {
		dispatch(showLoader())
		await deleteReservation(id)
		dispatch(hideLoader())
	}
	
=======
	const dispatch = useAppDispatch()
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
	return (
		<div className="account-review-item">
			<div className="single-item-header">
				<div className="singleitem-author">
					{props.type}
				</div>
				<div className="single-item-date">
					{email === props.userEmail &&
						<div style={{ justifyContent: 'end' }}>
<<<<<<< HEAD
							<div onClick={() => { deleteRes(props.id) }} className="singleitem-delete">
=======
							<div onClick={() => { deleteItem(props.id, props.type, props.setReservations, email, dispatch); }} className="singleitem-delete">
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
								<span>x</span>
							</div>
						</div>
					}
					{props.date} {props.hours}
				</div>
			</div>
		</div>
	)
}
<<<<<<< HEAD


=======
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
