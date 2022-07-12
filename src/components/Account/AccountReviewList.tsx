<<<<<<< HEAD
import { useAuth } from '../../hooks/useAuth'
import { useGetCommentsForAccQuery } from '../../redux/services/productItem.service'
=======
import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
import { AccountReviewItem } from './AccountReviewItem'



export const AccountReviewList = (props: any) => {
<<<<<<< HEAD
	const { email } = useAuth()

	const { data } = useGetCommentsForAccQuery(email)
	if (data?.length === 0) {
=======

	if (props.reviews.length === 0) {
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
		return (
			<>
				<div className='account-orders-label'>НЕТ Отзывов</div>
			</>
		)
	}
	else {


		return (
			<>
				<div className="account-reviews">
					<div className="account-reviews-list">
<<<<<<< HEAD
						{data?.map((review: any) => (
							<AccountReviewItem key={review.id} email={review.email} date={review.date} author={review.email}
								comment={review.comment} params={review.params} id={review.id} />
=======
						{props.reviews.map((review: any) => (
							<AccountReviewItem key={review.id} email={review.email} date={review.date} author={review.email}
								comment={review.comment} params={review.params} id={review.id} setReviews={props.setReviews} />
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
						))}
					</div>
				</div>

			</>
		)
	}
}
