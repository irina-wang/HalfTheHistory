import Container from '../components/container'
import Intro from '../components/main-page/intro'
import Layout from '../components/layout'
import Head from 'next/head'

import Tools from '../components/main-page/tools'
import Events from '../components/main-page/events'
import Banner from '../components/main-page/banner'
import AboutUs from '../components/main-page/aboutus'


export default function Index({ content }) {
  return (
    <>
      <Layout>
        <Head>
          <title>HTH</title>
        </Head>
        <Container>
          <Intro />
          <Banner />
          <AboutUs/>
          <Tools/>
          <Events/>
        </Container>
      </Layout>
    </>
  )
}
