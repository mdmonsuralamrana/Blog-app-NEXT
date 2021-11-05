import Head from 'next/head';
import { PostCard, Categories, PostWidget } from '../Components/index';

const posts = [
  {
    id: 1,
    title: 'Hello Next.js',
    content: 'This is the content of the first post'
  },
  {
    id: 2,
    title: 'Hello Next.js',
    content: 'This is the content of the second post'
  }
]

export default function Home() {
  return (
    <div className="container mx-auto px-10 pb-8">
      <Head>
        <title>BLOG WEB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, id) => <PostCard post={post} id={id} />)}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}
