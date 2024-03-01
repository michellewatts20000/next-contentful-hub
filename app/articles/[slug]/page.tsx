import Link from 'next/link'
import { draftMode } from 'next/headers'

import RelatedArticles from '../../related-articles'
import Avatar from '../../avatar'
import Date from '../../date'
import CoverImage from '../../cover-image'
import Image from 'next/image'

import { Markdown } from '@/lib/markdown'
import {
	getAllArticles,
	getArticleBySlug,
	getArticlesByCategory
} from '@/lib/api'

export async function generateStaticParams() {
	const allArticles = await getAllArticles()

	return allArticles.map((article) => ({
		slug: article.slug
	}))
}

export default async function ArticlePage({
	params
}: {
	params: { slug: string }
}) {
	const article = await getArticleBySlug(params.slug)

	const technology = await getArticlesByCategory(article.categories[1])

	return (
		<div className="container mx-auto my-20">
			<h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 ml-20">
				<Link
					href="/"
					className="hover:underline">
					Home
				</Link>
				.
			</h2>
			<article className="">
				<div className="text-center">
					<h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none  mb-4">
						{article.heading}
					</h1>
					<p className="font-bold text-[2.0rem]">
						{article.author} -
						<span className="font-light">
							{' '}
							<Date dateString={article.date} />
						</span>
					</p>
				</div>
				<p className="mb-6"></p>
				<CoverImage
					url={article.heroImage.url}
					slug={article.slug}
					title={article.title}
				/>
				<div className="max-w-6xl mx-auto mt-10">
					<div className="prose">
						<Markdown content={article.articleContent} />
					</div>
				</div>
			</article>
			<hr className="border-accent-2 mt-28 mb-24" />
			<div className="max-w-7xl mx-auto">
				<RelatedArticles morePosts={technology} />
			</div>
		</div>
	)
}
