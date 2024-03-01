import Link from 'next/link'
import { draftMode } from 'next/headers'

import {
	getAllPosts,
	getAllArticles,
	getHomepage,
	getArticlesByCategory
} from '@/lib/api'
import { CMS_NAME, CMS_URL } from '@/lib/constants'
import Hero from './components/Hero'
import { HomePageDataType } from './types'
import SwiperCustom from './components/Swiper'
import Masthead from './components/Masthead'

export default async function Page() {
	const { isEnabled } = draftMode()
	const allPosts = await getAllPosts(isEnabled)
	const allArticles = await getAllArticles()
	const sustainability = await getArticlesByCategory('articles')
	const technology = await getArticlesByCategory('articles')
	const articles = await getArticlesByCategory('articles')
	const homepageData: HomePageDataType = await getHomepage()
	const articleCategories = allArticles.flatMap((article) => article.categories)
	const filteredArticleCategories = articleCategories.filter(
		(category) => category !== 'articles'
	)
	const uniqueArticleCategories = [...new Set(filteredArticleCategories)]

	// TODO: check how alternative data fetching methods affect load time, if any
	// const sustainability = allArticles.filter((article) =>
	//   article.categories.includes("sustainability")
	// )
	// const technology = allArticles.filter((article) =>
	//   article.categories.includes("technology")
	// )

	return (
		<div>
			<Masthead />
			<Hero
				data={homepageData}
				categories={uniqueArticleCategories}
			/>
			<div className="swiper-container bg-light-grey">
				<SwiperCustom
					numberSlides={3.3}
					slidesData={technology}
					heading="Technology"
					keyProp="1"
				/>
			</div>
			<div className="swiper-container bg-grey">
				<SwiperCustom
					numberSlides={3.3}
					slidesData={articles}
					heading="Articles"
					keyProp="2"
				/>
			</div>
			<div className="swiper-container bg-light-blue">
				<SwiperCustom
					numberSlides={3.3}
					slidesData={sustainability}
					heading="Sustainability"
					keyProp="3"
				/>
			</div>
		</div>
	)
}
