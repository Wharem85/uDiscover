/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import demo from '../assets/img/demo.png';
import '../assets/styles/demoDay.css';

const DemoDay = () => {
	return (
		<div className="content-demo">
			<div className="content-img-demo">
				<img src={demo} className="demo" />
			</div>
			<div className="content-title-demo">
				<h1 className="title-demo">
					Conoce a los finalistas<br />
					de nuestro Demo Day<br />
					2021
				</h1>
				<button className="button-demo">Ingresa aqui</button>
			</div>
		</div>
	);
};

export default DemoDay;
