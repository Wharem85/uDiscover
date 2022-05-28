import React from 'react';
import { Formik } from 'formik';

const Form = () => {
	return (
		<div>
			<div>
				<img />
				<p>Inscribete ahora</p>
				<p>
					Nuestra asesora pedagógica se pondrá
					en contacto para iniciar el proceso de
					inscripción de tu hijo.
				</p>
				<div></div>
				<p>
					¿Ya te inscribiste?
					Ingresa aquí para conocer el proceso de admisión.
				</p>
			</div>
			<Formik>
				{() => (
					<form className="formulario">
						<div>
							<label>Nombre*</label>
							<input type="text" id="nombre" name="nombre" />
						</div>
						<div>
							<label>Apellido*</label>
							<input type="text" id="nombre" name="nombre" />
						</div>
						<div>
							<label>Correo electronico*</label>
							<input type="text" id="nombre" name="nombre" />
						</div>
						<div>
							<label>Telefono Celular*</label>
							<input type="text" id="nombre" name="nombre" />
						</div>
						<div>
							<label>Edad del estudiante</label>
							<input type="text" id="nombre" name="nombre" />
						</div>
						<div>
							<label>Pais*</label>
							<input type="text" id="nombre" name="nombre" />
						</div>
						<div>
							<label>¿Cuál es el motivo para buscar un colegio virtual?*</label>
							<input type="text" id="nombre" name="nombre" />
						</div>
					</form>
				)}
			</Formik>
		</div>
	);
};

export default Form;
