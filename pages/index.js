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
        Welcome to my personal wesbite! I'm currently a Senior Software Development Engineer in Test at PennyMac Loan Services, LLC. I normally get two questions: What is an SDET and how is it different from an SDE? What does PennyMac do?
        </p>
        <hr></hr>
        <p className={utilStyles.headingMd}>
        Basic Role of an SDET
        </p>
        <p>
        An SDET, or Software Development Engineer in Test, is a unique position that allows for a lot of growth, different perspectives on engineering, and hones in my communication skills. While I technically am part of the QA organization, I'm attached to a development team and follow with the development sprint cycle. My focus is on building out testing frameworks as the developers build out features (this practice is known as "in sprint automation" and is part of the "shift left" mentality). I also help review unit tests, make sure we have appropriate test coverage, and help fix things that are broken. Additionally, I work closely with DevOps to set up CICD integration with our frameworks and work towards testing our AWS Infrastructure. I'm learning more about Security and Chaos Engineering.
        </p>
        <hr></hr>
        <p className={utilStyles.headingMd}>
        What PennyMac Does
        </p>
        <p>
        PennyMac Loan Services, LLC is a finance firm, with the office I work out of located in Agora Hills, CA (just North of the Westside of Los Angeles). We've got many offices and around 9,000 employees (plus additional contractors). As the name implies, the firm operates within the mortgage industry. We service, price, and buy mortgages for consumers. I'm actually a bit of a nerd when it comes to real estate finance, I've earned a Certificate in Real Estate Development from UCLA Extension and have half a bookshelf develoted to real estate, finance, and structured debt.
        </p>
        <hr></hr>
        <p className={utilStyles.headingLg}>
        My Personal Life
        </p>
        <p>
        When I'm not working, studying for various certificates (right now the CompTIA Security+ and AWS Security Specialty are my priorites)- I'm typically reading, hiking, building some side projects, and/ or spending time with my wife (who is also an Engineer!). I love swimming and am hoping to get back into it when it's safe again, but I've taken up running to stay active. I love trying new food and dessert- Van Leewan Ice Cream is the best dairy-free/ vegan ice cream you can get in LA.
        </p>
        <hr></hr>
        <p className={utilStyles.headingLg}>
          I'm Currently Reading: 
        </p>
        <p>
          {''} 
          <a 
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321"
          >
            Designing Data-Intensive Applications
          </a> by Martin Kleppmann
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
        <hr></hr>
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
        <hr></hr>
        <p className={utilStyles.headingLg}>
          Most Recent Hike: 
        </p>
        <p>
          I've been using different trails to reach the summit for Mt. Baldy, varying in length and difficulty. My personal favorite is to reach the summit via Register Ridge starting at Manker Flat. The peak of Mt. Baldy is just over 10,000ft in elevation, it's quite the view. {' '}
          <a 
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/drive/folders/1-2xxRSm4q5nQoO35EEsixm4pokL2TMJs?usp=sharing"
          >
          Photos here
          </a>
        </p>
          
      </section>
      <hr></hr>
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