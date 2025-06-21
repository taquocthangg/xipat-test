import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import PostCard, { Post } from '../components/PostCard'
import SearchBar from '../components/SearchBar'
import { getPosts, searchPosts, getPostsByTag } from '../services/postService'

type Props = {
    initialPosts: Post[]
    total: number
    page: number
    q?: string
    tag?: string
}

export default function Home({ initialPosts, total, q, tag }: Props) {
    const [posts, setPosts] = useState<Post[]>(initialPosts)
    const [hasMore, setHasMore] = useState(true)
    const [skip, setSkip] = useState(initialPosts.length)

    const fetchMorePosts = async () => {
        let data
        if (q) {
            data = await searchPosts(q, skip)
        } else if (tag) {
            data = await getPostsByTag(tag, skip)
        } else {
            data = await getPosts(skip)
        }

        setPosts(prev => [...prev, ...data.posts])
        setSkip(prev => prev + data.posts.length)
        if (posts.length + data.posts.length >= total) {
            setHasMore(false)
        }
    }

    return (
        <>
            <Head>
                <title>Blog Next.js Demo</title>
                <meta name="description" content="Blog with infinite scroll and filters" />
            </Head>
            <main className="max-w-3xl mx-auto px-4 py-8">
                <SearchBar initial={q} />
                {tag && (
                    <div className="mb-4 text-sm text-gray-700">
                        Filtering by tag: <span className="font-medium">#{tag}</span>
                    </div>
                )}
                <InfiniteScroll
                    dataLength={posts.length}
                    next={fetchMorePosts}
                    hasMore={hasMore}
                    loader={<p className="text-center py-4 text-gray-500">Loading more...</p>}
                    endMessage={<p className="text-center py-4 text-gray-500">{"You reached the end 🎉"}</p>}
                >
                    {posts.map(p => (
                        <PostCard key={p.id} post={p} />
                    ))}
                </InfiniteScroll>
            </main>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const page = parseInt((query.page as string) || '1')
    const q = (query.q as string) || ''
    const tag = (query.tag as string) || ''
    const skip = (page - 1) * 10

    let data
    if (q) {
        data = await searchPosts(q, skip)
    } else if (tag) {
        data = await getPostsByTag(tag, skip)
    } else {
        data = await getPosts(skip)
    }

    return {
        props: {
            initialPosts: data.posts,
            total: data.total,
            page,
            q,
            tag,
        },
    }
}
