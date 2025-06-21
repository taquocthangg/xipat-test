import { GetServerSideProps } from 'next'
import Head from 'next/head'
import TagBadge from '../../components/TagBadge'
import Reactions from '../../components/Reactions'
import { Post } from '../../components/PostCard'
import { getPostDetail } from '../../services/postService'

type Props = { post: Post }

export default function PostDetail({ post }: Props) {
    return (
        <>
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.body.slice(0, 150)} />
            </Head>
            <main className="max-w-2xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map(t => <TagBadge key={t} tag={t} />)}
                </div>
                <p className="text-gray-400 mb-4">{post.body}</p>
                <Reactions reactions={post.reactions} views={post.views} />
            </main>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const id = params?.id
    const post = await getPostDetail(id!)
    return { props: { post } }
}
