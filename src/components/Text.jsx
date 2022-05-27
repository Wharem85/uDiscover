import React from 'react';
import '../assets/styles/text.css';

const Text = () => {
	return (
		<div className="container-text">
			<div className="content-title-edu">
				<h1 className="page-title">Por una<br /> educacion<br /> <span className="more">+</span> <span className="human">humana</span></h1>
			</div>
			<div className="content-metods">
				<p className="text-title-metods">
					uDiscover es un Colegio Virtual bilingüe Americano,
					con enfoque en Tecnología, Emprendimiento e Innovación.
				</p>
				<p className="text-metods">
					Ofrecemos la modalidad: Académica bilingüe (español–inglés).
					 Contamos con 3 niveles:<span className="color-text"> Elementary School (básica primaria) ,
					 Middle School (básica secundaria) y  High School (educación media)</span>
					 de carácter mixto, Calendarios A (Inicio clases Febrero) y B
					 (Inicio clases Agosto).
				</p>
			</div>
		</div>
	);
};

export default Text;
