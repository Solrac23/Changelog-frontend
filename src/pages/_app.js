import { AuthProvider } from '@/contexts/AuthContext'
import { ChangelogProvider } from '@/contexts/ChangelogContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  const isIndexPage = Component.name == 'Changelog'
  return (
    <AuthProvider>
    {isIndexPage ? (
        <ChangelogProvider>
          <Component {...pageProps} />
        </ChangelogProvider>
      ) : (
        <Component {...pageProps} />
      )}
    </AuthProvider>
  )
}
