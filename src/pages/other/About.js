/** @format */

import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import SectionTitleWithText from "../../components/section-title/SectionTitleWithText";
import BannerOne from "../../wrappers/banner/BannerOne";
import MedicalContact from "../../components/contact/MedicalContact";

import TextGridOne from "../../wrappers/text-grid/TextGridOne";
import FunFactOne from "../../wrappers/fun-fact/FunFactOne";
import TeamMemberOne from "../../wrappers/team-member/TeamMemberOne";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";
import Banner01 from "../../components/bannerForFeatures/Banner01";
import AboutUs01 from "../../components/bannerForFeatures/AboutUs01";
import Banner02 from "../../components/bannerForFeatures/Banner02";

const About = () => {
	let { pathname } = useLocation();

	return (
		<Fragment>
			<SEO
				titleTemplate="About us"
				description="About page of flone react minimalist eCommerce template."
			/>
			<LayoutOne
			// headerTop="visible"
			>
				{/* breadcrumb */}
				{/* <Breadcrumb
					pages={[
						{ label: "Home", path: process.env.PUBLIC_URL + "/" },
						{ label: "About us", path: process.env.PUBLIC_URL + pathname },
					]}
				/> */}

				{/* section title with text */}
				{/* <SectionTitleWithText spaceTopClass="pt-100" spaceBottomClass="pb-95" /> */}

				{/* banner */}
				{/* <BannerOne spaceBottomClass="pb-70" /> */}

				{/* text grid */}
				{/* <TextGridOne spaceBottomClass="pb-70" /> */}

				{/* fun fact */}
				{/* <FunFactOne
          spaceTopClass="pt-100"
          spaceBottomClass="pb-70"
          bgClass="bg-gray-3"
        /> */}
				<Banner02 />
				<AboutUs01 />
				{/* team member */}

				<TeamMemberOne
					spaceTopClass="pt-95"
					spaceBottomClass="pb-70"
				/>
				{/* banner of get in touch */}
				<Banner01 />

				{/* brand logo slider */}
				<BrandLogoSliderOne
					spaceBottomClass="pb-70"
					spaceTopClass="pt-70"
				/>
				<MedicalContact />
			</LayoutOne>
		</Fragment>
	);
};

export default About;
