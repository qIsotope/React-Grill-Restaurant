<<<<<<< HEAD
=======
import axios from 'axios';
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
import React from 'react'
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { useAuth } from '../../hooks/useAuth';
<<<<<<< HEAD
import { useDeleteComsFromAccMutation } from '../../redux/services/productItem.service';
=======
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
import { hideLoader, showLoader } from '../../redux/slices/loaderSlice';
import { IAccountReviewItem } from '../../types/accountBlock';


export const AccountReviewItem: React.FC<IAccountReviewItem> = (props) => {
	const { email } = useAuth()
	const dispatch = useAppDispatch()
<<<<<<< HEAD
	const [deleteReview] = useDeleteComsFromAccMutation()
	const deleteComment = async () => {
		dispatch(showLoader())
		await deleteReview(props.id)
=======
	const deleteComment = async (id: string) => {
		dispatch(showLoader())
		await axios.delete('https://62965300810c00c1cb73a6b4.mockapi.io/comments/' + id)
		const response = await axios.get(`https://62965300810c00c1cb73a6b4.mockapi.io/comments?email=${email}`)
		props.setReviews(response.data)
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
		dispatch(hideLoader())
	}

	return (
		<div className="account-review-item">
			<div className="single-item-header">
				<div className="singleitem-author">
					{props.email}
				</div>
				<div className="single-item-date">
					{email === props.author &&
						<div style={{ justifyContent: 'end' }}>
<<<<<<< HEAD
							<div onClick={() => { deleteComment() }} className="singleitem-delete">
=======
							<div onClick={() => { deleteComment(props.id) }} className="singleitem-delete">
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
								<span>x</span>
							</div>
						</div>
					}
					{props.date}
				</div>
			</div>
			<Link to={`/services/${props.params}`} className="account-review-text">
				{props.comment}
			</Link>
		</div>
	)
}


