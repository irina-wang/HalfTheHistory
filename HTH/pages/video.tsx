/**
 * Section to display production videos, currently
 *  use https://www.youtube.com/watch?v=Ry52GKKWsx0&feature=emb_title 
 *  as a placeholder
 * 
 * TODO: 
 *   1. make a list of videos to display
 *   2. add other videos
 * 
 *  Note: height is hardcoded 
 */

import Container from '../components/container'
import Intro from '../components/main-page/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import ArticleList from '../components/article-list/article-list'

import React from 'react'
import ReactPlayer from 'react-player/youtube'


export default function Index({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro>
            <span className="font-mono">Video.</span>
          </Intro>
 
          <section className="max-w-full max-h-screen mx-auto">
            
            <ReactPlayer 
                url='https://www.youtube.com/watch?v=Ry52GKKWsx0'
                width='100%' height='750px'/> 
               
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
