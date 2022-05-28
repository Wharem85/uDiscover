/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from 'react';
import { Formik, Form, Field } from 'formik';
import arrow from '../assets/img/arrow.png';
import '../assets/styles/form.css';

const FormDiscover = () => {
	const [formulario, setFormulario] = useState(false);
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
				<Formik
					initialValues={{
						nombre: '',
						apellido: '',
						correo: '',
						telefono: '',
						edad: '',
						pais: '',
						motivo: '',
						accept: ''
					}}
					validate={(valores) => {
						let errores = {};

						if(!valores.nombre) {
							errores.nombre = 'Por favor ingresa un nombre'
						}

						if(!valores.apellido) {
							errores.apellido = 'Por favor ingresa un apellido'
						}

						if(!valores.correo) {
							errores.correo = 'Por favor ingresa un correo '
						}

						if(!valores.motivo) {
							errores.motivo = 'Por favor ingresa un motivo'
						}

						if(!valores.pais) {
							errores.pais = 'Por favor ingresa tu pais'
						}

						if(!valores.telefono) {
							errores.telefono = 'Por favor ingresa tu numero de telefono'
						}
						return errores
					}}
					onSubmit={(valores, {resetForm})=> {
						console.log(valores)
						setFormulario(true);
						setTimeout(() => setFormulario(false), 4000);
						resetForm()
					}}
				>
					{( {errors, touched} ) => (
						<Form className="formulario">
							<div className="data">
								<label htmlFor="nombre" className="label">Nombre*</label>
								<Field
									type="text"
									id="nombre"
									name="nombre"
									className="input"
								/>
								{touched.nombre && errors.nombre && <div>{errors.nombre}</div>}
							</div>
							<div className="data">
								<label htmlFor="apellido" className="label">Apellido*</label>
								<Field
									type="text"
									id="apellido"
									name="apellido"
									className="input"
								/>
								{touched.apellido && errors.apellido && <div className="error">{errors.apellido}</div>}

							</div>
							<div className="data">
								<label htmlFor="correo" className="label">Correo electronico*</label>
								<Field
									type="email"
									id="correo"
									name="correo"
									className="input"
								/>
								{touched.correo && errors.correo && <div className="error">{errors.correo}</div>}
							</div>
							<div className="data">
								<label htmlFor="telefono" className="label">Telefono Celular*</label>
								<Field
									type="number"
									id="nombre"
									name="nombre"
									className="input"
								/>
								{touched.telefono && errors.telefono && <div className="error">{errors.telefono}</div>}
							</div>
							<div className="data">
								<label htmlFor="edad" className="label">Edad del estudiante</label>
								<Field
									type="number"
									id="edad"
									name="edad"
									className="input"
								/>
							</div>
							<div className="data">
								<label htmlFor="pais" className="label">Pais*</label>
								<Field name="pais" as="select" className="input">
									<option value=""></option>
									<option value="colombia">Colombia</option>
									<option value="mexico">Mexico</option>
									<option value="Guatemala">Guatemala</option>
									<option value="Argentina">Argentina</option>
									<option value="uruguay">Uruguay</option>
									<option value="eu">Estados unidos</option>
									<option value="peru">Peru</option>
									<option value="chile">Chile</option>
									<option value="canada">Canada</option>
								</Field>
								{touched.pais && errors.pais && <div className="error">{errors.pais}</div>}
							</div>
							<div className="data">
								<label htmlFor="motivo" className="label">¿Cuál es el motivo para buscar un colegio virtual?*</label>
								<Field name="motivo" as="select" className="input">
									<option value="viaje">Viajamos mucho</option>
									<option value="deportista">Mi hijo es deportista/artista y necesita flexibilidad de horarios</option>
									<option value="salud">Por temas de salud</option>
									<option value="casa">Mi hijo prefiere la educacion en casa</option>
									<option value="presupuesto">Presupuesto</option>
									<option value="social">Mi hijo prefiere la socializacion virtual</option>
									<option value="otros">Otros</option>
								</Field>
								{touched.motivo && errors.motivo && <div className="error">{errors.motivo}</div>}
							</div>
							<div>
								<label>
									<Field type="radio" name="accept" value="accept" />He leido y acepto la politica de privacidad*
								</label>
							</div>
							<button type="submit" >Enviar</button>
							{formulario && <p className="exito">Formulario enviado con exito!</p>}
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};

export default FormDiscover;
