import React from 'react';
import Register from '../containers/Register';
import arrow from '../assets/img/arrow.png';
import '../assets/styles/form.css';

const FormDiscover = () => {
	return (
		<div className="background-form">
			<div className="content-form">
				<div className="container-form">
					<div className="content-image-form">
						<img src={arrow} className="arrow" />
					</div>
					<p className="register">Inscribete ahora</p>
					<p  className="register-text">
						Nuestra asesora pedagógica se pondrá
						en contacto para iniciar el proceso de
						inscripción de tu hijo.
					</p>
					<div className="divide-form"></div>
					<p className="proces">
						<span className="color-register">¿Ya te inscribiste? </span>
						<span className="line">Ingresa aquí para conocer el proceso de admisión.</span>
					</p>
				</div>
				<Register />
			</div>
		</div>
	);
};

export default FormDiscover;
