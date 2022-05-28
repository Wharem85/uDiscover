import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import '../assets/styles/register.css';

const Register = () => {
	const [formulario, setFormulario] = useState(false);
	return (
		<>
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
						errores.nombre = 'Este campo es obligatorio'
					}

					if(!valores.apellido) {
						errores.apellido = 'Este campo es obligatorio'
					}

					if(!valores.correo) {
						errores.correo = 'Este campo es obligatorio'
					}

					if(!valores.motivo) {
						errores.motivo = 'Este campo es obligatorio'
					}

					if(!valores.pais) {
						errores.pais = 'Este campo es obligatorio'
					}

					if(!valores.telefono) {
						errores.telefono = 'Este campo es obligatorio'
					}

					if(!valores.accept) {
						errores.accept = 'Este campo es obligatorio'
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
							<label htmlFor="nombre" className="label">
									Nombre
								<span className="required">*</span>
							</label><br />
							<Field
								type="text"
								id="nombre"
								name="nombre"
								className="input"
							/>
							{touched.nombre && errors.nombre && <div className="error">{errors.nombre}</div>}
							<br />
							<label htmlFor="apellido" className="label">
								Apellido
								<span className="required">*</span>
							</label><br />
							<Field
								type="text"
								id="apellido"
								name="apellido"
								className="input"
							/>
							{touched.apellido && errors.apellido && <div className="error">{errors.apellido}</div>}
							<br />
							<label htmlFor="correo" className="label">
								Correo electronico
								<span className="required">*</span>
							</label><br />
							<Field
								type="email"
								id="correo"
								name="correo"
								className="input"
							/>
							{touched.correo && errors.correo && <div className="error">{errors.correo}</div>}
							<br />
							<label htmlFor="telefono" className="label">
								Telefono Celular<span className="required">*</span>
							</label><br />
							<Field
								type="number"
								id="nombre"
								name="nombre"
								className="input"
							/>
							{touched.telefono && errors.telefono && <div className="error">{errors.telefono}</div>}
							<br />
							<label htmlFor="edad" className="label">
								Edad del estudiante
							</label><br />
							<Field
								type="number"
								id="edad"
								name="edad"
								className="input"
							/>
							<br />
							<label htmlFor="pais" className="label">
								Pais<span className="required">*</span>
							</label><br />
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
							<br />
							<label htmlFor="motivo" className="label">
								¿Cuál es el motivo para buscar un colegio virtual?
								<span className="required">*</span>
							</label><br />
							<Field name="motivo" as="select" className="input">
								<option value=""></option>
								<option value="viaje">Viajamos mucho</option>
								<option value="deportista">Mi hijo es deportista/artista y necesita flexibilidad de horarios</option>
								<option value="salud">Por temas de salud</option>
								<option value="casa">Mi hijo prefiere la educacion en casa</option>
								<option value="presupuesto">Presupuesto</option>
								<option value="social">Mi hijo prefiere la socializacion virtual</option>
								<option value="otros">Otros</option>
							</Field>
							{touched.motivo && errors.motivo && <div className="error">{errors.motivo}</div>}
							<br />
							<label className="termine">
								<Field type="checkbox" name="accept" value="accept" className="radio" />
									He leido y acepto la politica de<br/> privacidad
									<span className="required">*</span>
							</label>
							{touched.accept && errors.accept && <div className="error">{errors.accept}</div>}
						<div className="content-input">
							<button type="submit" className="submit" >Enviar</button>
						</div>
						</div>
						{formulario && <p className="exito">Formulario enviado con exito!</p>}
					</Form>
				)}
			</Formik>
		</>
	);
};

export default Register;
