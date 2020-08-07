import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <Link href="/posts/first-post" className="link"><a>About</a></Link>
        <Link href="/posts/second-post" className="link"><a>Work</a></Link>
        <p>This is an example site. I am learning Next.js. So if you want to learn it as well you should go to <a href="https://nextjs.org/">their site. </a></p>
      </section>
      
    </Layout>
  )
}