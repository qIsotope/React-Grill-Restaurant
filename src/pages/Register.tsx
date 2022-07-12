
<<<<<<< HEAD
import React, { useState } from 'react'
=======
import React from 'react'
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
import { Link, useNavigate } from 'react-router-dom'
import { AuthForm } from '../components/AuthForm/AuthForm';
import { Loader } from '../components/Loader/Loader';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { showLoader, hideLoader } from '../redux/slices/loaderSlice'
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';


export const Register: React.FC = () => {
	const loader = useAppSelector(state => state.loader.isLoader)
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
<<<<<<< HEAD
	const [hide, setHide] = useState(false)
	const register = (email: string, password: string) => {
		dispatch(showLoader())
		const auth = getAuth();
=======
	const register = (email: string, password: string) => {

		dispatch(showLoader())
		const auth = getAuth();

>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
		createUserWithEmailAndPassword(auth, email, password)
			.then(() => {
				navigate('/')
				dispatch(hideLoader())
			})
			.catch((e) => {
<<<<<<< HEAD
				if (e.message === 'Firebase: Error (auth/email-already-in-use).') {
					setHide(true)
				}
				else {
					alert(e.message)
				}
=======
				alert(`error: ${e.message}`)
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
				dispatch(hideLoader())
			})
	}

	return (
		<section>
			<div className="container">
				<div className="login-page">
					<div className="login-title">
						Регистрация акаунта
					</div>
					<AuthForm title='Зарегистрироваться' handleClick={register} />
<<<<<<< HEAD
					<div className={hide ? "error-auth" : "hide"}>Пользователь с такой почтой уже существует</div>
=======
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
					<div className="login__link-title">Если у вас уже есть акаунт</div>
					<Link to='/login' className="login-link">Авторизоваться</Link>
				</div >
				{loader
					&& <Loader />
				}
			</div>
		</section>
	)
}