/** @format */

import PropTypes from "prop-types";
import clsx from "clsx";
import SectionTitleTwo from "../../components/section-title/SectionTitleTwo";
import teamMemberData from "../../data/team-members/team-member-one.json";
import TeamMemberOneSingle from "../../components/team-member/TeamMemberOneSingle";
import Swiper, { SwiperSlide } from "../../components/swiper";

const TeamMemberOne = ({ spaceTopClass, spaceBottomClass }) => {
	const settings = {
		loop: true,
		grabCursor: true,
		observer: false,
		observeParents: false,
		spaceBetween: 30,
		navigation: false,
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			1024: {
				slidesPerView: 4,
			},
		},
	};
	return (
		<div className={clsx("team-area", spaceTopClass, spaceBottomClass)}>
			<div className="container">
				{/* section title */}
				<SectionTitleTwo
					titleText="Team Members"
					subTitleText="Lorem ipsum dolor sit amet conse ctetu."
					positionClass="text-center"
					spaceClass="mb-60"
				/>

				<Swiper
					className=""
					options={settings}>
					{teamMemberData?.map((single, key) => (
						<SwiperSlide key={single.id}>
							<div
								className=" "
								key={key}>
								<TeamMemberOneSingle
									data={single}
									spaceBottomClass="mb-30"
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

TeamMemberOne.propTypes = {
	spaceBottomClass: PropTypes.string,
	spaceTopClass: PropTypes.string,
};

export default TeamMemberOne;
