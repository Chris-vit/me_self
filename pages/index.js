import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Cover from '../components/Cover'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Experience from '../components/Experience'


export default function Home() {
  return (
    <>
      <Head>
        <title>Chris Portfolio</title>
        <link href="https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.css" rel="stylesheet" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ch.png" />
      </Head>
      <NavBar />
      <div>


        <Cover />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </div>

    </>
  )
}
