import React, {useEffect, useState} from 'react';
import "./HomeServices.css"
import "../../../AllMain/AllMain.css"

const HomeServices = () => {
	const [services, setServices] = useState([]);
	useEffect(() => {
		fetch("./services.json")
			.then(res => res.json())
			.then(data => setServices(data.slice(0, 3)))
	}, []);

	return (
		<div>
			<div className="container">
				<h1 className="home_services_title">Our Services</h1>
				<div className="home_service_container">
					{
						services.map(service => <HomeService key={service.id} service={service} />)
					}
				</div>
			</div>
		</div>
	);
};

const HomeService = (props) => {
	const {title, img, description} = props.service;
	return (
		<div className="home_service">
			<div>
				<img src={img} alt="" className="service_image" />
				<h2 className="service_title">{title}</h2>
				<p className="service_description">{description}</p>
				<button>Details</button>
			</div>
		</div>
	);
}

export default HomeServices;
