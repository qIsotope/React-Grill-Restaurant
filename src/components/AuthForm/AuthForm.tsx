
import { Formik } from 'formik';
import * as yup from 'yup'

interface IAuthForm {
	title: string;
	handleClick: (email: string, password: string) => void;
}

export const AuthForm = ({ title, handleClick }: IAuthForm) => {
	const validationsSchema = yup.object().shape({
		email: yup.string().email('Введите верный email').required('Обязательно'),
		password: yup.string().min(6, 'Минимум 6 символов').required('Обязательно'),
	})

	return (
		<Formik
			initialValues={{
				email: '',
				password: '',
			}}
			validateOnBlur
			onSubmit={(value) => {
				handleClick(value.email, value.password)
			}}
			validationSchema={validationsSchema}
		>
			{({ values, errors, touched, handleChange, handleBlur, handleSubmit, }) => (
				<div className={`login-form`}>
					<p>
						<label className='login-label' htmlFor={`name`}>Email</label><br />
						<input
							className='modal-input'
							type={`text`}
							name={`email`}
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
						/>
					</p>
<<<<<<< HEAD
					{touched.email && errors.email && <p className={'error-validate'}>{errors.email}</p>}
=======
					{touched.email && errors.email && <p className={'modal-error'}>{errors.email}</p>}
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
					<p>
						<label className='login-label' htmlFor={`secondName`}>Password</label><br />
						<input
							className='modal-input'
							type={`password`}
							name={`password`}
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.password}
						/>
					</p>
<<<<<<< HEAD
					{touched.password && errors.password && <p className={'error-validate'}>{errors.password}</p>}
					<button
						className='modal-button'
=======
					{touched.password && errors.password && <p className={'modal-error'}>{errors.password}</p>}
					<button
						className='modal-button'
						// disabled={!isValid || !dirty}
>>>>>>> 1d0b8b24403fbf277f545fa38b7c8a00fb52a684
						onClick={() => handleSubmit()}
						type={`submit`}
					>{title}</button>
				</div>
			)}
		</Formik>

	)
}
