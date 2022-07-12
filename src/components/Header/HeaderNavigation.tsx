import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
<<<<<<< HEAD
=======
import { useState } from 'react'
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../hooks/redux-hooks'
import { useAuth } from '../../hooks/useAuth'
export const HeaderNavigation = () => {
<<<<<<< HEAD
=======
	const [showMenu, setShowMenu] = useState(false)
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
	const cartProducts = useAppSelector(state => state.cart.cartProducts)
	const countOfItems = cartProducts.reduce((acc, item) => item.count + acc, 0)
	const { email } = useAuth()

	return (
		<>
<<<<<<< HEAD
			<nav className="navigation">
				<div className="navigation-close">
					<FontAwesomeIcon icon={faTimes} />
				</div>
				<ul className="navigation-list">
					<li className="navigation-item">
						<Link to="/" className="navigation-link">HOME</Link></li>
					<li className="navigation-item">
						<Link to="/about" className="navigation-link">ABOUT</Link>
					</li>
					<li className="navigation-item">
						<Link to="/services" className="navigation-link">SERVICES</Link>
					</li>
					<li className="header-cart"><Link className="navigation-link" to="/basket">MY CART</Link>
						<span className="header-cart-digit">{countOfItems}</span>
					</li>
					<Link to='/account' className="header-reservation">
=======
			<nav className={showMenu ? 'navigation show-menu' : 'navigation'}>
				<div onClick={() => { setShowMenu(false) }} className="navigation-close">
					<FontAwesomeIcon icon={faTimes} />
				</div>
				<ul className="navigation-list">
					<li onClick={() => { setShowMenu(false) }} className="navigation-item">
						<Link to="/" className="navigation-link">HOME</Link></li>
					<li onClick={() => { setShowMenu(false) }} className="navigation-item">
						<Link to="/about" className="navigation-link">ABOUT</Link>
					</li>
					<li onClick={() => { setShowMenu(false) }} className="navigation-item">
						<Link to="/services" className="navigation-link">SERVICES</Link>
					</li>
					<li onClick={() => { setShowMenu(false) }} className="header-cart"><Link className="navigation-link" to="/basket">MY CART</Link>
						<span className="header-cart-digit">{countOfItems}</span>
					</li>
					<Link onClick={() => { setShowMenu(false) }} to='/account' className="header-reservation">
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
						<span className="navigation-link">{email}</span>
					</Link>
				</ul>
			</nav>
<<<<<<< HEAD
			<div className="navigation-bars">
=======
			<div onClick={() => { setShowMenu(true) }} className="navigation-bars">
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
				<FontAwesomeIcon icon={faBars} />
			</div>
		</>
	)
}
