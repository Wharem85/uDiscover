import React from 'react';
import girl from '../assets/img/nina.png';
import '../assets/styles/discover.css';

const Discover = () => {
	return (
		<div className="content-discover">
			<div className="content-text-discover">
				<h1 className="title-discover">Descubre el legado que dejaras al mundo</h1>
				<p className="text-discover">Desde un entorno virtual, guiamos virtudes,
					habilidades, intereses y afinidades para una proyeccion
					 integral y solida del individuo
				</p>
				<button className="button-discover">Inscripciones abiertas</button>
			</div>
			<div className="content-img-discover">
				<img src={girl} className="girl" />
			</div>
		</div>
	);
};

export default Discover;
