import React from 'react';
import '../assets/styles/text.css';

const Text = () => {
	return (
		<div className="container-text">
			<div className="content-title-edu">
				<h1>Por una educacion <span className="more">+</span> <span className="human">humana</span></h1>
			</div>
			<div className="content-metods">
				<p>
					uDiscover es un Colegio Virtual bilingüe Americano,
					con enfoque en Tecnología, Emprendimiento e Innovación.
				</p>
				<p>
					Ofrecemos la modalidad: Académica bilingüe (español–inglés).
					 Contamos con 3 niveles: Elementary School (básica primaria) ,
					 Middle School (básica secundaria) y  High School (educación media)
					 de carácter mixto, Calendarios A (Inicio clases Febrero) y B
					 (Inicio clases Agosto).
				</p>
			</div>
		</div>
	);
};

export default Text;
