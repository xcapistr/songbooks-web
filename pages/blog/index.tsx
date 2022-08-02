import { FunctionComponent } from 'react'
import Head from 'next/head'
import { gql } from '@apollo/client'

import BasicLayout from 'layout/BasicLayout'
import HeroSection from 'components/HeroSection'
import client from 'client'

interface BlogProps {
  title: string
  image: string
  smallImage: string
}

const Blog: FunctionComponent<BlogProps> = (props) => {
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
      </BasicLayout>
    </div>
  )
}

export const getStaticProps = async () => {
  const data = (
    await client.query({
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
        }
      `
    })
  ).data['BlogPage']

  return {
    props: {
      title: data.title.sk,
      image: data.image.asset.url,
      smallImage: `${data.image.asset.url}?w=48`
    }
  }
}

export default Blog
