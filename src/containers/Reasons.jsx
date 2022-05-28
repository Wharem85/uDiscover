import React from 'react';
import icon1 from '../assets/img/icon1.png';
import icon2 from '../assets/img/icon2.png';
import icon3 from '../assets/img/icon3.png';
import icon4 from '../assets/img/icon4.png';
import '../assets/styles/reasons.css';

const Reasons = () => {
	return (
		<div className="content-reasons">
			<div className="content-color">
				<div className="content-img">
					<img src={icon1} />
				</div>
				<div className="content-title">
					<h3 className="title-reasons">Acompañamiento continúo</h3>
				</div>
				<div className="content-text">
					<p className="text-reasons">Tu hijo nunca estará solo. El 100% de las clases
						son guiadas y acompañadas por profesores en tiempo real.
					</p>
				</div>
			</div>
			<div className="content-color">
				<div className="content-img">
					<img src={icon2} />
				</div>
				<div className="content-title">
					<h3 className="title-reasons">Educación internacional</h3>
				</div>
				<div className="content-text">
					<p className="text-reasons">Curriculum Internacional, enfocado
					 en tecnología, emprendimiento e innovación.
					</p>
				</div>
			</div>
			<div className="content-color">
				<div className="content-img">
					<img src={icon3} />
				</div>
				<div className="content-title">
					<h3 className="title-reasons">Bilingüismo</h3>
				</div>
				<div className="content-text">
					<p className="text-reasons">Aprendizaje y perfeccionamiento del
					 Inglés a través de experiencias. Contamos con profesores nativos.
					Nuestros estudiantes se gradúan con High School Diploma con el que
					pueden ingresar a la universidad latinoamericana de su elección.
					</p>
				</div>
			</div>
			<div className="content-color">
				<div className="content-img">
					<img src={icon4} />
				</div>
				<div className="content-title">
					<h3 className="title-reasons">Apoyamos las ideas</h3>
				</div>
				<div className="content-text">
					<p className="text-reasons">Con nuestra incubadora de proyectos
					basados en modelos disruptivos e innovadores tu hijo llevará sus
					 ideas a otro nivel.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Reasons;
