/** @format */

import React from "react";
import data from "../../data/feaures/features.json";
const FeaturesBanner = () => {
	console.log(data);
	return (
		<div className="feature-banner">
			{data.map((card) => {
				return (
					<div
						className="feature-card"
						key={card.id}>
						<div>
							<img
								src={card.image}
								alt={card["image-alt"]}
							/>
						</div>
						<p>{card["info-data"]}</p>
					</div>
				);
			})}
			{/* <div className="feature-card">
				<div>
					<img
						src="\assets\img\feature-banner\trust5satr.png"
						alt="stop hair fall"
					/>
				</div>
				<p>
					We have experts <br /> who worked for skin <br /> related problems.
				</p>
			</div>
			<div className="feature-card">
				<div>
					<img
						src="\assets\img\feature-banner\medal.png"
						alt="stop hair fall"
					/>
				</div>
				<p>
					We have an <br /> experience of <br />
					20 years
				</p>
			</div>
			<div className="feature-card">
				<div>
					<img
						src="\assets\img\feature-banner\hairOil.png"
						alt="stop hair fall"
					/>
				</div>
				<p>
					We give a treatment for <br /> hair fall which you can see <br /> the
					results after applying <br /> the hair care products.
				</p>
			</div>
			<div className="feature-card">
				<div>
					<img
						src="/assets\img\feature-banner\hairfall.png"
						alt="stop hair fall"
					/>
				</div>
				<p>
					Your hair fall will stop after <br /> 30 days of application you{" "}
					<br /> are hair will grow within <br />6 months. This is the <br />{" "}
					promise we assured you.
				</p>
			</div> */}
		</div>
	);
};

export default FeaturesBanner;
