import { useRouter } from 'next/router'
import { useState } from 'react'

export default function SearchBar({ initial = '' }: { initial?: string }) {
    const [q, setQ] = useState(initial)
    const router = useRouter()

    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        const query = q ? `?q=${encodeURIComponent(q)}` : ''
        router.push(`/${query}`).then(() => {
            router.reload()
        })
    }

    return (
        <form onSubmit={submit} className="mb-4">
            <input
                type="text"
                className="border px-2 py-1 rounded w-64"
                placeholder="Search posts..."
                value={q}
                onChange={(e) => setQ(e.target.value)}
            />
            <button type="submit" className="ml-2 px-4 py-1 bg-blue-600 text-white rounded">
                Search
            </button>
        </form>
    )
}
