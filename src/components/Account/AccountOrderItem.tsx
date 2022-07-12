
import { useAppDispatch } from '../../hooks/redux-hooks';
import { useAuth } from '../../hooks/useAuth';
<<<<<<< HEAD
import { useDeleteOrdersFromAccMutation } from '../../redux/services/productItem.service';
import { showLoader, hideLoader } from '../../redux/slices/loaderSlice';
import { IAccountOrderItem } from '../../types/accountBlock';
=======
import { IAccountOrderItem } from '../../types/accountBlock';
import { deleteItem } from '../../utils/deleteItemsFromAcc';
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684




export const AccountOrderItem = (props: IAccountOrderItem) => {
	const { email } = useAuth()
<<<<<<< HEAD
	const [deleteOrder] = useDeleteOrdersFromAccMutation()
	const dispatch = useAppDispatch()
	const deleteComment = async () => {
		dispatch(showLoader())
		await deleteOrder(props.id)
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
							<div onClick={() => deleteComment()} className="singleitem-delete">
=======
							<div onClick={() => { deleteItem(props.id, props.type, props.setOrders, email, dispatch) }} className="singleitem-delete">
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
								<span>x</span>
							</div>
						</div>
					}
					{props.date}
				</div>
			</div>
			<div className="account-review-text nohover">
				Items: <br /> <br /> {props.items}
			</div>

		</div>
	)
}
<<<<<<< HEAD


=======
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
