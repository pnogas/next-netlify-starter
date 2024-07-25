import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my page!" />
        <p className="description">
          This is the homepage of Paul Nogas. Still no content.</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
