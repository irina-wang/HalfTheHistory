/**
 * Section for the about page with organization intro & member info
 * 
 * TODO: 
 *  1. put in actual member info (remeber to change image path)
 * 
 */


import Container from '../components/container'
// import MoreStories from '../components/more-stories'
// import HeroPost from '../components/hero-post'
import Intro from '../components/main-page/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import ArticleList from '../components/article-list/article-list'
import Members from '../components/main-page/members'

import profileImg from '../public/assets/img/profile/profile.jpg';
import AboutUs from '../components/main-page/aboutus'

const peopleInfo = [
  {
    name: 'AA',
    email: 'AA.com',
    intro: 'here is a brief intro',
    image: profileImg,
  },
  {
    name: 'BB',
    email: 'BB@tufts.com',
    intro: 'here is a brief intro',
    image: profileImg,
  },
  {
    name: 'AA',
    email: 'AA.com',
    intro: 'here is a brief intro',
    image: profileImg,
  },
  {
    name: 'DD',
    email: 'DD@tufts.com',
    intro: 'here is a brief intro',
    image: profileImg,
  },
]


export default function Index({ allPosts }) {
  return (
    <>
      <Layout>
        <Container>
          <Intro>
            <span className="font-mono">About Us.</span>
          </Intro>
          <section className="max-w-5xl mx-auto">
            <AboutUs/>
            <Members people={peopleInfo}/>
          </section>
        </Container>
      </Layout>
    </>
  )
}


