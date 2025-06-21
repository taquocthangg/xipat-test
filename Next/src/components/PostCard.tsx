import Link from 'next/link'
import Image from 'next/image'
import TagBadge from './TagBadge'
import Reactions from './Reactions'
import { motion } from 'framer-motion'

export type Post = {
    id: number
    title: string
    body: string
    tags: string[]
    reactions: { likes: number; dislikes: number }
    views: number
    userId: number
}

export default function PostCard({ post }: { post: Post }) {
    const imageUrl = `https://picsum.photos/id/${post.id + 10}/600/300`

    return (
        <Link href={`/posts/${post.id}`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="border rounded-lg overflow-hidden hover:shadow-lg transition mb-6 bg-white dark:bg-gray-800"
            >
                <Image
                    src={imageUrl}
                    alt={post.title}
                    width={600}
                    height={300}
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                        {post.body.slice(0, 100)}...
                    </p>
                    <div className="flex flex-wrap gap-2 mb-2">
                        {post.tags.map(tag => (
                            <TagBadge key={tag} tag={tag} />
                        ))}
                    </div>
                    <Reactions reactions={post.reactions} views={post.views} />
                </div>
            </motion.div>
        </Link>
    )
}
