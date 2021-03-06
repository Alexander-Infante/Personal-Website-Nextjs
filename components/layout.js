import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Alexander Infante'
export const siteTitle = 'Alex C. Infante'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Alexander Infante's personal website and blog"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile_Alex.png"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            <div>
              <a 
              href="https://github.com/Alexander-Infante"
              target="_blank"
              rel="noopener noreferrer"
              >
                <img 
                src={require("../public/images/GitHub.png")} 
                className='GitHub'
                />
               </a>
               <a 
              href="https://www.linkedin.com/in/alexander-infante/"
              target="_blank"
              rel="noopener noreferrer"
              >
                <img 
                src={require("../public/images/LinkedIn.png")} 
                className='LinkedIn'
                />
               </a>                  
            </div>
          </>
        ) : 
        (
          <>
            <Link href="/">
              <a>
                <img
                  src={require('../public/images/profile_Alex.png')}
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}