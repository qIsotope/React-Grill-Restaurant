<<<<<<< HEAD
import { useGetOrdersForAccQuery } from '../../redux/services/productItem.service'
=======
import { useAuth } from '../../hooks/useAuth'
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
import { IAccountOrderList } from '../../types/accountBlock'
import { AccountOrderItem } from './AccountOrderItem'




<<<<<<< HEAD
export const AccountOrderList = () => {
	const { data } = useGetOrdersForAccQuery('')

	if (data?.length === 0) {
=======
export const AccountOrderList = (props: IAccountOrderList) => {
	const {email} = useAuth()
	if (props.orders.length === 0) {
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
		return (
			<>
				<div className='account-orders-label'>НЕТ ЗАКАЗОВ</div>
			</>
		)

	}
	else
		return (
			<>
				<div className="account-orders">
					<div className="account-orders-list">
<<<<<<< HEAD
						{data?.map((order) => (
							<AccountOrderItem type={order.type} items={order.items} date={order.date} key={order.id}
								id={order.id} userEmail={order.userEmail}
=======
						{props.orders.map((order) => (
							<AccountOrderItem type={order.type} items={order.items} date={order.date} key={order.id}
								delete={props.delete} setOrders={props.setOrders} id={order.id} userEmail={order.userEmail}
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
							/>
						))}
					</div>
				</div>
			</>
		)
}
