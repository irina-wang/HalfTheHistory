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
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Container>
          <Intro>
            <span className="font-mono">About Us.</span>
          </Intro>
          <section className="max-w-4xl mx-auto">
            Add a section about HTH
            <Members people={peopleInfo}/>
            introoduction of the members
            {/* <ArticleList articles={allPosts}/> */}
          </section>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts('tech', [
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
