import React from 'react';
import Reasons from '../containers/Reasons';
import '../assets/styles/reason.css';

const Reason = () => {
	return (
		<div className="content-reason">
			<h1 className="title-reason">¿Por qué tu hijo debe estudiar en uDiscover?</h1>
			<p className="text-reason">Tu hijo merece tener una educación de calidad y a la vez,
				tiempo para desarrollar diferentes actividades. Estudiar en uDiscover les
				permitirá eso <br />y mucho más:
			</p>
			<Reasons />
		</div>
	);
};

export default Reason;
