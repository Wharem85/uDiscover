import React from 'react';
import nino from '../assets/img/nino.png';
import '../assets/styles/home.css';

const Home = () => {
	return (
		<div className="container">
			<div className="content">
				<div className="img-container">
					<img className="img" src={nino} />
				</div>
				<div className="titles">
					<p className="letter">Saberes y</p>
					<p className="letter">Eexperiencias para</p>
					<p className="letter">Reconocerse</p>
				<h1 className="text-title">Educacion para la vida</h1>
					<p className="text">Más que la mera transmisión de información, el conocimiento es una
						herramienta para <span className="text-color">descubrir por sí mismos</span> el rol dentro de una sociedad,
						<span className="text-color">las virtudes y las pasiones</span>. Con una mentalidad de libertad e interminable
						curiosidad, aquí lo importante, más que las respuestas, son las preguntas.
					</p>
					<button className="button">Conoce nuestra metodologia</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
