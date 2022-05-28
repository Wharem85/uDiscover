/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import colombia from '../assets/img/colombia.png'
import '../assets/styles/plans.css';

const Plans = () => {
	return (
		<div className="content-plans">
			<div className="container-plans">
				<div className="content-pay">
					<p className="text-pay">Plan anual</p>
					<p className="text-type">1 Pago</p>
				</div>
				<span className="divide"></span>
				<div className="img-colombia">
					<img src={colombia} />
				</div>

				<div className="pay">
					<p className="pay-month">COP$ 741.000/mes</p>
				</div>
				<div className="content-price">
					<p className="price">Precio regular COP$ 870.000</p>
					<p className="savings">Ahorras COP$129.000</p>
				</div>
				<div className="benefits">
					<p className="benefit-price">1 Pago de COP$ 8`894.000</p>
					<p className="benefits-text">*En este valor incluye el pago de la matricula,
						los recursos digitales y 10 mensualidades
					</p>
				</div>
				<div className="content-plans-button">
					<button className="button-plans">Contacta a tu asesor</button>
				</div>
			</div>
			<div className="container-plans">
				<div className="content-pay">
					<p className="text-pay">Plan mensual anticipado</p>
					<p className="text-type">12 Pago</p>
				</div>
				<div className="divide"></div>
				<div className="img-colombia">
					<img src={colombia} />
				</div>
				<div className="pay">
					<p className="pay-month">COP$ 769.000/mes</p>
				</div>
				<div className="content-price">
					<p className="price">Precio regular COP$ 870.000</p>
					<p className="savings">Ahorras COP$101.000</p>
				</div>
				<div className="benefits">
					<p className="benefit-price">12 pagos distribuidos en:</p>
					<p className="benefits-text">
						1er pago: Matrícula COP$719.000/
						<span className="text-small">hasta el 30 abril.</span> <br/>
						2do pago: Recursos digitales COP$869.000. <br />
						3er a 12vo pago: Mensualidades COP$769.000*<br />
						<span className="text-small">*Valor a pagar hasta el 5 de cada mes.</span>
					</p>
				</div>
				<div className="content-plans-button">
					<button className="button-plans">Contacta a tu asesor</button>
				</div>
			</div>
			<div className="container-plans">
				<div className="content-pay">
					<p className="text-pay">Plan mensual</p>
					<p className="text-type">12 Pago</p>
				</div>
				<div className="divide"></div>
				<div className="img-colombia">
					<img src={colombia} />
				</div>
				<div className="pay">
					<p className="pay-month">COP$ 869.000/mes</p>
				</div>
				<div className="content-price">
					<div className="space"></div>
				</div>
				<div className="spa"></div>
				<div className="benefits">
					<p className="benefit-price">12 pagos distribuidos en:</p>
					<p className="benefits-text">
						1er pago: Matrícula COP$719.000/
						<span className="text-small">hasta el 30 abril.</span><br />
						2do pago: Recursos digitales COP$869.000.<br />
						3er a 12vo pago: Mensualidades COP$869.000
					</p>
				</div>
				<div className="content-plans-button">
					<button className="button-plans">Contacta a tu asesor</button>
				</div>
			</div>
		</div>
	);
};

export default Plans;
