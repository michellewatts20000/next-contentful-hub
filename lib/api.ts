import { POST_GRAPHQL_FIELDS, GET_ALL_ARTICLES, GET_HOMEPAGE, GET_ARTICLES_BY_CATEGORY } from './queries'
import { HomePageDataType } from '@/app/types'

async function fetchGraphQL(query: string): Promise<any> {
	return fetch(
		`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`
			},
			body: JSON.stringify({ query }),
			next: { tags: ['posts'] }
		}
	).then((response) => response.json())
}

function extractPost(fetchResponse: any): any {
	return fetchResponse?.data?.postCollection?.items?.[0]
}

function extractArticle(fetchResponse: any): any {
	return fetchResponse?.data?.articleCollection?.items?.[0]
}

function extractPostEntries(fetchResponse: any): any[] {
	return fetchResponse?.data?.postCollection?.items
}

function extractArticleEntries(fetchResponse: any): any[] {
	return fetchResponse?.data?.articleCollection?.items
}

// fix this so it only returns one item
function extractHomepageEntry(fetchResponse: any): HomePageDataType {
	return fetchResponse?.data?.homepageCollection?.items[0]
}

export async function getPreviewPostBySlug(slug: string | null): Promise<any> {
	const entry = await fetchGraphQL(
		`query {
      postCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
		true
	)
	return extractPost(entry)
}

export async function getArticleBySlug(slug: string | null): Promise<any> {
	const entry = await fetchGraphQL(
		`query {
      articleCollection(where: { slug: "${slug}" }) {
        items {
          date
          slug
          heroImage {
            url
          }
          heading,
          author,
          articleContent {
            json
          },
          summary {
            json
          }
          categories
          
        }
      }
    }`
	)
	return extractArticle(entry)
}

export async function getAllPosts(isDraftMode: boolean): Promise<any[]> {
	const entries = await fetchGraphQL(
		`query {
      postCollection(where: { slug_exists: true }, order: date_DESC, preview: ${
				isDraftMode ? 'true' : 'false'
			}) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
		isDraftMode
	)
	return extractPostEntries(entries)
}

export async function getAllArticles(): Promise<any[]> {
	const entries = await fetchGraphQL(GET_ALL_ARTICLES)
	return extractArticleEntries(entries)
}

export async function getHomepage(): Promise<HomePageDataType> {
	const homepage = await fetchGraphQL(GET_HOMEPAGE)
	return extractHomepageEntry(homepage)
}

export async function getArticlesByCategory(
	category: string | null
): Promise<any[]> {
	const entries = await fetchGraphQL(
		`query {
      articleCollection(where: {categories_contains_some: "${category}"}) {
        items {
         ${GET_ARTICLES_BY_CATEGORY}
        }
      }
    }
    `
	)
	return extractArticleEntries(entries)
}

export async function getPostAndMorePosts(
	slug: string,
	preview: boolean
): Promise<any> {
	const entry = await fetchGraphQL(
		`query {
      postCollection(where: { slug: "${slug}" }, preview: ${
			preview ? 'true' : 'false'
		}, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
		preview
	)
	const entries = await fetchGraphQL(
		`query {
      postCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, preview: ${
			preview ? 'true' : 'false'
		}, limit: 2) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
		preview
	)
	return {
		post: extractPost(entry),
		morePosts: extractPostEntries(entries),
		moreArticles: extractArticleEntries(entries)
	}
}
