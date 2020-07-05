import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import getSortedPostsData from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
        Welcome to my humble abode on the internet. I'm a software engineer, avid reader, open source contributer, and hiking enthusiast. 
        </p>
        <p>
          As a software engineer I specialize in full stack web development, with a keen interest in TypeScript, GraphQL (especially with {' '} 
          <a
          target="_blank"
          rel="noopener noreferrer" 
          href="https://www.apollographql.com/"
          >
          Apollo
          </a>
          ), and AWS ({''}
          <a 
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.aws.amazon.com/lambda/latest/dg/welcome.html"
          >
          Lambda functions
          </a> 
          are super interesting).
        </p>
        <p>
          Feel free to check out {' '}
          <a 
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/1bX3rUIAH3pkyviJnqP1vuQ800eLdYp2w/view?usp=sharing"
          >
          my resume.
          </a>
        </p>
        <p className={utilStyles.headingLg}>
          I'm Currently Reading: 
        </p>
        <p>
          {''} 
          <a 
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.amazon.com/Start-up-Nation-Israels-Economic-Miracle/dp/0446541478"
          >
            Start-Up Nation: The Story of Israel's Economic Miracle
          </a> by Dan Senor & Saul Singer
         </p>
         <p>
         {''}
          <a 
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.amazon.com/Mans-Search-Meaning-Viktor-Frankl/dp/0807014273/ref=sr_1_1?crid=23ETVMWUY6819&dchild=1&keywords=man%27s+search+for+meaning+by+viktor+frankl&qid=1593888552&s=books&sprefix=man%27s+se%2Cstripbooks%2C201&sr=1-1"
          >
          Man's Search for Meaning </a>
          by Viktor E. Frankl
        </p>
        <p className={utilStyles.headingLg}>
          Open Source Contributions: 
        </p>
        <p>
          Check out {' '} 
          <a 
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Alexander-Infante"
          > my GitHub!
          </a>
        </p>
        <p className={utilStyles.headingLg}>
          Most Recent Hike: 
        </p>
        <p>
          Somewhere in the Palisades, I just happened to find some interesting trail and went with it. {' '}
          <a 
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/drive/folders/1-2xxRSm4q5nQoO35EEsixm4pokL2TMJs?usp=sharing"
          >
          Photos here
          </a>
        </p>
          
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>
          Assortment of Thoughts and Experiences
        </h2>
        <ul className={utilStyles.list}></ul>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href='/posts/[id]' as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
      </section>
    </Layout>
  )
}