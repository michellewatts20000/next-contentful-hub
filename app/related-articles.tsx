import Link from 'next/link'
import Avatar from './avatar'
import DateComponent from './date'
import CoverImage from './cover-image'
import { Markdown } from '@/lib/markdown'

interface Asset {
	sys: {
		id: string
	}
	url: string
	description: string
}

interface AssetLink {
	block: Asset[]
}

interface Content {
	json: any
	links: {
		assets: AssetLink
	}
}

function ArticlePreview({
	title,
	heroImage,
	date,
	author,
	slug,
	summary
}: {
	title: string
	heroImage: any
	date: string
	author: any
	slug: string
	summary: Content
}) {
	return (
		<div>
			<div className="mb-5">
				<CoverImage
					title={title}
					slug={slug}
					url={heroImage}
				/>
			</div>
			<h3 className="text-3xl mb-3 leading-snug">
				<Link
					href={`/articles/${slug}`}
					className="hover:underline">
					{title}
				</Link>
			</h3>
			<div className="text-lg mb-4 font-bold">
				<DateComponent dateString={date} />
			</div>
			<Markdown content={summary} />
		</div>
	)
}

export default function MoreArticles({ morePosts }: { morePosts: any[] }) {
	return (
		<section>
			<h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
				Related articles
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
				{morePosts.map((post) => (
					<ArticlePreview
						key={post.slug}
						title={post.heading}
						heroImage={post.heroImage.url}
						summary={post.summary}
						date={post.date}
						author={post.author}
						slug={post.slug}
					/>
				))}
			</div>
		</section>
	)
}
