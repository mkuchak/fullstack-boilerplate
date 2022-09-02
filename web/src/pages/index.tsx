import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Awesome App</title>
        <meta
          name="description"
          content="Some awesome boilerplate to create an app!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto flex min-h-screen flex-col justify-between bg-gray-100">
        <header className="flex bg-gray-200 p-4">Header</header>
        <main className="p-4">
          <p className="text-3xl font-bold underline">Hello, world!</p>
          <Link href="/posts">
            <a className="text-blue-500">Go to Posts</a>
          </Link>
        </main>
        <footer className="flex bg-gray-200 p-4">Footer</footer>
      </div>
    </div>
  )
}

export default Home
