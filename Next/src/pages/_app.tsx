import { AppProps } from 'next/app'
import '../styles/globals.css'
import Layout from '../components/Layout'
import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps, router }: AppProps) {
    return (
        <Layout>
            <AnimatePresence mode="wait" initial={false}>
                <Component key={router.pathname} {...pageProps} />
            </AnimatePresence>
        </Layout>
    )
}
