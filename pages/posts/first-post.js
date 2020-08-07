import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import About from '../about.js'
import ActiveLink from '../ActiveLink.js'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <h1>About</h1>
      <About>
      </About>
      <h2>
        {/* <Link href="/">
          <a>Back to home</a>
        </Link> */}
      </h2>
    </Layout>
  )
}