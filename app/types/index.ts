export type HomePageDataType = {
	sponsoredText: string
	heading: string
	subheading: string
	sponsoredLogo: {
		url: string
	}
	homeMedia: {
		url: string
	}
}

export type HomePageProps = {
	data: HomePageDataType
	categories: string[]
}

export type NavigationProps = {
	categories: string[]
}
