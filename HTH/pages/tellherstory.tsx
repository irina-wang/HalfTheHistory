import Container from '../components/container'
import Intro from '../components/main-page/intro'
import Form from '../components/submit/form'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import ArticleList from '../components/article-list/article-list'

export default function Index({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Container>
          <Intro>
            <span className="font-mono">Tell Her Story.</span>
          </Intro>
          <section className="max-w-7xl mx-auto">
          <Form/>
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
