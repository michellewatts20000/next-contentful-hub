export const POST_GRAPHQL_FIELDS = `
  slug
  title
  coverImage {
    url
  }
  date
  author {
    name
    picture {
      url
    }
  }
  excerpt
  content {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          url
          description
        }
      }
    }
  }
`

export const GET_ALL_ARTICLES = `query {
  articleCollection {
    items {
      sys {
        id
      }
      slug
      date
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
}
`

export const GET_ARTICLES_BY_CATEGORY = `
      sys {
        id
      }
      slug
      date
      heading
      author
      categories
      articleContent {
        json
      },
      summary {
        json
      }
      heroImage {
        url
      }
`

export const GET_HOMEPAGE = `
query {
  homepageCollection {
    items {
      sponsoredText
      sponsoredLogo {
        url
      }
      heading
      subheading
      homeMedia {
        url
      }      
    }   
  }
}`
