import Navbar from '@components/Navbar'
import Provider from '@components/Provider'
import '@styles/globals.css'
import Head from 'next/head'

export const metadata = {
  title: 'DevBrainz - A community of great minds',
  description: 'Share your ideas, get feedback from the community, and collaborate with like-minded individuals.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Head>
          <meta property="og:image" content="https://i.ibb.co/ygXSRtZ/Screenshot-20230519-122035.png"/>
          <meta property="og:image:alt" content="DevBrainz" />
          <meta name="twitter:image" content="https://i.ibb.co/ygXSRtZ/Screenshot-20230519-122035.png" />
        </Head>
        <Provider>   
          <div className='main'>
            <div className='gradient'/>
          </div>  
          <main className='app'>
            <Navbar />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}
