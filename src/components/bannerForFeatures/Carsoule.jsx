/** @format */

import React, { useRef, useEffect } from "react";
import teamMemberData from "../../data/team-members/team-member-one.json";
import TeamMemberOneSingle from "../../components/team-member/TeamMemberOneSingle;

const Carousel = ({ children }) => {
	const carouselRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			const carousel = carouselRef.current;
			const scrollWidth = carousel.scrollWidth;
			const clientWidth = carousel.clientWidth;
			const scrollLeft = carousel.scrollLeft;

			if (scrollLeft === 0) {
				carousel.scrollLeft = scrollWidth - clientWidth;
			} else if (scrollLeft + clientWidth >= scrollWidth) {
				carousel.scrollLeft = 0;
			}
		};

		carouselRef.current.addEventListener("scroll", handleScroll);

		return () => {
			carouselRef.current.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleLeftArrowClick = () => {
		carouselRef.current.scrollLeft -= 10; // Adjust the scroll distance as needed
	};

	const handleRightArrowClick = () => {
		carouselRef.current.scrollLeft += 10;
	};

	return (
		<div
			className="carousel"
			ref={carouselRef}>
			<button
				className="arrow left-arrow"
				onClick={handleLeftArrowClick}>
				←
			</button>
			{teamMemberData?.map((single, key) => (
				<div
					className="carousel-item m-10"
					key={key}>
					<TeamMemberOneSingle
						data={single}
						spaceBottomClass="mb-30"
					/>
				</div>
			))}{" "}
			<button
				className="arrow right-arrow"
				onClick={handleRightArrowClick}>
				→
			</button>
		</div>
	);
};

export default Carousel;
