import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import About from '../about.js'
import Work from '../work.js'
import ActiveLink from '../ActiveLink.js'

export default function SecondPost() {
  return (
    <Layout>
      <Head>
        <title>Work</title>
      </Head>
      <h1>CV</h1>
      <Work>
      </Work>
      <h2>
        {/* <Link href="/">
          <a>Back to home</a>
        </Link> */}
      </h2>
    </Layout>
  )
}