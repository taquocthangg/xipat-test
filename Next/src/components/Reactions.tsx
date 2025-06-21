export default function Reactions({ reactions, views }: { reactions: { likes: number, dislikes: number }, views: number }) {
    return (
        <div className="flex space-x-4 text-sm text-gray-500">
            <span>👍 {reactions.likes}</span>
            <span>👎 {reactions.dislikes}</span>
            <span>👁️ {views}</span>
        </div>
    )
}
