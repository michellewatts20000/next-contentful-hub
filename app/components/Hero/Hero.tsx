'use client'
import { HomePageProps } from '@/app/types'
import BrightcoveVideo from '../BrightcoveVideo'
import Navigation from '../Navigation'

const Hero: React.FC<HomePageProps> = ({
	categories,
	data: {
		sponsoredText,
		heading,
		subheading,
		sponsoredLogo: { url: sponsoredLogoUrl }
		// homeMedia: { url: homeMediaUrl }
	}
}) => {
	return (
		<div className="min-h-[76rem] max-h-[108rem] h-heroCalc h-screen  text-white top-[6rem] relative overflow-hidden">
			<Navigation categories={categories} />
			<div className="w-full flex flex-col items-center justify-center relative z-10 pt-[1rem]">
				<span className="text-white text-[.9rem] uppercase mb-[.5rem]">
					{sponsoredText}
				</span>
				<img
					src={sponsoredLogoUrl}
					alt={sponsoredText}
				/>
			</div>
			<div className="absolute top-0 left-0 w-full h-screen overflow-hidden">
				<BrightcoveVideo />
			</div>
			<div className="w-1/2 flex flex-col items-start justify-center h-full pl-[16.5%]  bg-[#00000069] absolute top-0 left-0">
				<h1 className="text-[9.9rem] leading-none font-medium mb-[3rem]">
					{heading}
				</h1>
				<p className="text-[2rem] max-w-[57rem] mb-[9rem]">{subheading}</p>
			</div>
		</div>
	)
}

export default Hero
