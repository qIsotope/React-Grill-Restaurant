<<<<<<< HEAD
import { useGetCommentsForItemQuery } from '../../redux/services/productItem.service';
=======
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
import { IComment, ICommentariesList } from '../../types/commentariesTypes';
import { CommentariesItem } from './CommentariesItem'


export const CommentariesList = (props: ICommentariesList) => {
<<<<<<< HEAD

	const { data } = useGetCommentsForItemQuery(props.identificator)
	return (
		<>
			{data
				? <div className="singleitem-review-label">Отзывы</div>
				: <div className="singleitem-review-label">Пока нет отзывов</div>}
			{data?.map((comm: IComment) => (
				<CommentariesItem key={comm.id} comm={comm} params={props.params} />
=======
	return (
		<>
			{props.commentaries?.map((comm: IComment) => (
				<CommentariesItem key={comm.id} comm={comm} params={props.params} setComments={props.setComments} />
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
			))}
		</>
	)
}
