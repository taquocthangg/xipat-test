import { ReactNode } from 'react'
import Link from 'next/link'
import Profile from "@/components/Profile";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
            <header className="bg-gray-100 dark:bg-gray-800 p-4 shadow">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <Link href="/" className="text-xl font-bold">
                        My Blog
                    </Link>
                    <Profile />
                </div>
            </header>

            <main className="flex-1 max-w-4xl mx-auto w-full p-4">
                {children}
            </main>

            <footer className="bg-gray-100 dark:bg-gray-800 p-4 text-center text-sm">
                © 2025 My Blog. All rights reserved.
            </footer>
        </div>
    )
}

