<<<<<<< HEAD
import React, { useState } from 'react'
=======
import React from 'react'
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
import { Link, useNavigate } from 'react-router-dom'
import { Loader } from '../components/Loader/Loader'
import { AuthForm } from '../components/AuthForm/AuthForm'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { showLoader, hideLoader } from '../redux/slices/loaderSlice'
import { setUser } from '../redux/slices/userSlice'
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks'

export const Login: React.FC = () => {
	const loader = useAppSelector(state => state.loader.isLoader)
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
<<<<<<< HEAD
	const [hide, setHide] = useState(false)
	const [errorText, setErrorText] = useState('')
=======
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
	const autheficate = (email: string, password: string) => {
		dispatch(showLoader())
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }: any) => {
				dispatch(setUser({
					email: user.email,
					id: user.uid,
					token: user.refreshToken,
				}));
				navigate('/')
				dispatch(hideLoader())
				localStorage.setItem('email', user.email)
			})
			.catch((e) => {
<<<<<<< HEAD
				if (e.message === 'Firebase: Error (auth/user-not-found).') {
					setHide(true)
					setErrorText('Не существует пользователя с такой почтой')
				}
				else if (e.message === 'Firebase: Error (auth/wrong-password).') {
					setHide(true)
					setErrorText('Не правильно введён пароль')
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
						Авторизация
					</div>
					<AuthForm title='Авторизоваться' handleClick={autheficate} />
<<<<<<< HEAD
					<div className={hide ? "error-auth" : "hide"}>{errorText}</div>
=======
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
					<div className="login__link-title">Если у вас нет акаунта, зарегистрируйтесь</div>
					<Link to='/register' className="login-link">Зарегистрироваться</Link>
				</div >
				{loader
					&& <Loader />
				}
			</div>
		</section>
	)
}
