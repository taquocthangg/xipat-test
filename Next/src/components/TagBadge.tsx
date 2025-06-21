export default function TagBadge({tag}: { tag: string }) {
    return (
        <span className="text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full px-2 py-0.5">
            #{tag}
        </span>
    )
}
