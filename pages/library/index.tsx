import { FunctionComponent } from 'react'
import Head from 'next/head'

import BasicLayout from 'layout/BasicLayout'
import HeroSection from 'components/HeroSection'

interface LibraryProps {}

const Library: FunctionComponent<LibraryProps> = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BasicLayout>
        <HeroSection
          title="Library"
          subtitle=""
          small
          image="library.jpg"
          smallImage="library-small.jpg"
        />
      </BasicLayout>
    </div>
  )
}

export default Library