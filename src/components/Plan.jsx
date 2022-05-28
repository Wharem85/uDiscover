import React from 'react';
import hat from '../assets/img/hat.png'
import Plans from '../containers/Plans';
import '../assets/styles/plan.css';

const Plan = () => {
	return (
		<>
			<div className="content-plan">
				<div className="container-plan">
					<img src={hat} className="hat" />
					<p className="text-center">Al ser parte de uDiscover, nuestro estudiantes
						obtienen la titulacion High School diploma
					</p>
					<p className="title-plan">Aprovecha nuestros precios especiales con descuento</p>
				</div>
			</div>
			<Plans />
		</>
	);
};

export default Plan;
