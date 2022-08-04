import { GetStaticPaths, GetStaticProps, NextPage } from 'next/types'
import Head from 'next/head'
import { gql } from '@apollo/client'
import BlockContent from '@sanity/block-content-to-react'
import styled from 'styled-components'

import BasicLayout from 'layout/BasicLayout'
import HeroSection from 'components/HeroSection'
import apolloClient from 'apolloClient'
import sanityClient from 'sanityClient'

const ContentWrapper = styled.div`
  padding: 40px;
  max-width: 1024px;
  margin: 0 auto;

  & p {
    font-size: 18px;
  }
`

interface PostProps {
  title: string
  image: string
  smallImage: string
  body: any
}

const Post: NextPage<PostProps> = props => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BasicLayout>
        <HeroSection
          title={props.title}
          small
          image={props.image}
          smallImage={props.smallImage}
        />
        <ContentWrapper>
          <BlockContent
            blocks={props.body}
            imageOptions={{ w: 320, h: 240, fit: 'max' }}
            {...sanityClient.config()}
          />
        </ContentWrapper>
      </BasicLayout>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const data: { slug: { current: string } }[] = (
    await apolloClient.query({
      query: gql`
        query GetAllPostSlugs {
          allPost {
            slug {
              current
            }
          }
        }
      `
    })
  ).data['allPost']

  let paths: { params: { slug: string }; locale: string }[] = []

  locales?.forEach(l => {
    paths = [
      ...paths,
      ...data.map(d => ({ params: { slug: d.slug.current }, locale: l }))
    ]
  })

  return {
    paths,
    fallback: false // can also be true or 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({
  params,
  locale = 'en'
}) => {
  const slug = params?.slug
  console.log('locale->', locale)

  const data = (
    await apolloClient.query({
      query: gql`
        query GetPostBySlug {
          allPost(where: { slug: { current: { eq: "${slug}" } } }, limit: 1) {
            _id
            title {
              en
              sk
            }
            slug {
              current
            }
            mainImage {
              asset {
                url
              }
            }
            body {
              enRaw
              skRaw
            }
            publishedAt
            author {
              _id
              name
              slug {
                current
              }
              image {
                asset {
                  url
                }
              }
            }
            categories {
              _id
              title {
                en
                sk
              }
              slug {
                current
              }
            }
          }
        }
      `
    })
  ).data['allPost'][0]

  return {
    props: {
      title: data.title[locale],
      image: data.mainImage.asset.url,
      smallImage: `${data.mainImage.asset.url}?w=48`,
      body: data.body[`${locale}Raw`]
    }
  }
}

export default Post
