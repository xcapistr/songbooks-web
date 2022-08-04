import { FunctionComponent } from 'react'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { gql } from '@apollo/client'

import BasicLayout from 'layout/BasicLayout'
import HeroSection from 'components/HeroSection'
import PostCard from 'components/PostCard'
import apolloClient from 'apolloClient'
import { ListWrapper } from './style'

interface BlogProps {
  title: string
  image: string
  smallImage: string
  posts: any[]
}

const Blog: NextPage<BlogProps> = props => {
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
        <ListWrapper>
          {props.posts.map(p => (
            <PostCard
              key={p._id}
              title={p.title}
              slug={p.slug}
              image={p.image}
              author={p.author}
              publishedAt={p.publishedAt}
              categories={p.categories}
            />
          ))}
        </ListWrapper>
      </BasicLayout>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({locale = 'en'}) => {
  const data = (
    await apolloClient.query({
      query: gql`
        query GetBlogPage {
          BlogPage(id: "blogPage") {
            _id
            title {
              en
              sk
            }
            image {
              asset {
                url
              }
            }
          }
          allPost(sort: { publishedAt: DESC }) {
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
            publishedAt
            author {
              _id
              name
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
  ).data

  const blogPage = data['BlogPage']
  const posts = data['allPost'].map((p: any) => ({
    _id: p._id,
    title: p.title[locale],
    slug: p.slug.current,
    image: p.mainImage.asset.url,
    publishedAt: p.publishedAt,
    author: p.author.name,
    categories: p.categories.map((c: any) => ({
      title: c.title[locale],
      slug: c.slug.current
    }))
  }))
  return {
    props: {
      title: blogPage.title[locale],
      image: blogPage.image.asset.url,
      smallImage: `${blogPage.image.asset.url}?w=48`,
      posts
    }
  }
}

export default Blog
