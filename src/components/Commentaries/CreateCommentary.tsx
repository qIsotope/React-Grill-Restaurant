<<<<<<< HEAD
import React, { ChangeEvent, useEffect } from 'react'
import { useAppDispatch } from '../../hooks/redux-hooks';
import { useAuth } from '../../hooks/useAuth';
import { usePostCommentMutation } from '../../redux/services/productItem.service';
=======
import axios from 'axios';
import React, { ChangeEvent } from 'react'
import { useAppDispatch } from '../../hooks/redux-hooks';
import { useAuth } from '../../hooks/useAuth';
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
import { hideLoader, showLoader } from '../../redux/slices/loaderSlice';
import { ICreateCommentary } from '../../types/commentariesTypes';

export const CreateCommentary: React.FC<ICreateCommentary> = (props) => {
	const dispatch = useAppDispatch()
<<<<<<< HEAD
	const [addCommentMutation, { isError }] = usePostCommentMutation()
	const { email } = useAuth()
	const identificator = props.name && props.name.split(' ').join('')
	if (isError) {
		alert('ERROR')
		dispatch(hideLoader())
	}
	const addComment = async () => {
		dispatch(showLoader())
		const now = new Date().toLocaleString()
=======
	const now = new Date().toLocaleString()
	const { email } = useAuth()
	const identificator = props.name && props.name.split(' ').join('')
	
	const addComment = async () => {
		dispatch(showLoader())
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
		const commentObject = {
			id: props.id,
			name: props.name,
			comment: props.comment,
			email: email,
			item: identificator,
			date: now.replace(',', ''),
			params: props.params
		}
<<<<<<< HEAD
		await addCommentMutation(commentObject).unwrap()
		props.setComment('')
		dispatch(hideLoader())
=======
		await axios.post('https://62965300810c00c1cb73a6b4.mockapi.io/comments', commentObject)
		const response = await axios.get('https://62965300810c00c1cb73a6b4.mockapi.io/comments?item=' + props.item)
		props.setComments(response.data)
		dispatch(hideLoader())
		props.setComment('')
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
	}


	return (
		<>
			<div className="singleitem-comment">
				<div className="singleitem-comment-label">
					Оставьте отзыв
				</div>
				<textarea value={props.comment}
					onChange={(e: ChangeEvent<HTMLTextAreaElement>) => props.setComment(e.target.value)}
					className="singleitem-textarea" />
				<button onClick={() => addComment()} type="button" className="singleitem-button">Отправить</button>
			</div>
		</>
	)
}

