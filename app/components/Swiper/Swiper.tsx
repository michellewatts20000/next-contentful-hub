'use client'

import { Navigation, Mousewheel, EffectFade, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import 'swiper/css/effect-fade'
import Link from 'next/link'

type SlidesProps = {
	sys: {
		id: number
	}
	heroImage: {
		url: string
	}
	heading: string
	slug: string
	summary: {
		json: string
		links: {}
	}
}

const SwiperCustom: React.FC<{
	slidesData: SlidesProps[]
	keyProp: string
	heading: string
	numberSlides: number
}> = ({ slidesData, keyProp, heading, numberSlides }) => {
	const [swiperInstance, setSwiperInstance] = useState({})

	useEffect(() => {}, [swiperInstance])

	return (
		<div className="relative my-20">
			<h1 className="writing-mode rotate-180 text-[1.8rem] uppercase tracking-wider text-dark-grey font-light absolute left-[-120px] top-1/2 transform -translate-y-1/2">
				{heading}
			</h1>
			<div
				className={`swiper-button swiper-${keyProp}-next text-white z-10 cursor-pointer mb-10`}>
				<p className="text-dark-grey inline mr-6">Swipe to see more</p>
				<img
					src="/swiper-arrow.svg"
					alt="swiper arrow"
					className="inline"
				/>
			</div>
			<Swiper
				key={keyProp}
				slidesPerView={1}
				modules={[Navigation, Mousewheel, EffectFade, Autoplay]}
				spaceBetween={30}
				navigation={{
					nextEl: `.swiper-${keyProp}-next`,
					prevEl: `.swiper-${keyProp}-prev`
				}}
				breakpoints={{
					640: {
						slidesPerView: 1
					},
					768: {
						slidesPerView: 2
					},
					1900: {
						slidesPerView: numberSlides
					}
				}}
				speed={1000}
				loop={true}
				onSwiper={(swiper) => {
					setSwiperInstance(swiper)
				}}>
				{slidesData.map(
					(d: {
						heroImage: {
							url: string
						}
						sys: {
							id: number
						}
						heading: string
						summary: object
						slug: string
					}) => (
						<SwiperSlide key={d.sys.id}>
							<div className="overflow-hidden group">
								<div className="relative overflow-hidden w-full">
									<a href={`/articles/${d.slug}`}>
										<img
											src={d.heroImage.url}
											alt=""
											className="h-[500px] object-cover scale-100 group-hover:scale-110 transition-transform duration-300 ease-in-out"
										/>
									</a>
								</div>
								<div className="h-[250px] group-hover:bg-white pt-10 group-hover:py-20 group-hover:px-10 transition-transform duration-800 ease-in-out ">
									<div className="max-w-[300px]">
										<Link
											href={`/articles/${d.slug}`}
											className="hover:underline font-bold text-26">
											{d.heading}
										</Link>
									</div>
									<div className="mt-12">
										<a
											href={`/articles/${d.slug}`}
											className="hover:underline font-bold text-dark-blue text-18 ">
											<span>
												Read More
												<Image
													src="/read-more-arrow.svg"
													alt=""
													className="inline ml-4"
													width={12}
													height={20}
												/>
											</span>
										</a>
									</div>
								</div>
							</div>
						</SwiperSlide>
					)
				)}
			</Swiper>
		</div>
	)
}

export default SwiperCustom
