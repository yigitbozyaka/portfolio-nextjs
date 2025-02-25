import Head from 'next/head'
import Nav from '../components/Nav'
import ProjectsHero from '../components/ProjectsHero'
import axios from "axios"
import { useEffect, useState } from 'react';
import { TbExclamationCircle } from 'react-icons/tb';
import Link from 'next/link';

function Projects() {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      const response = await axios.get("https://api.github.com/users/yigitbozyaka/repos");
      if (response.status === 200) {
        setRepos(response.data)
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setError(true);
      }
    }

    fetchRepos();
  }, [])

  if (isLoading) {
    return (
      <div className="text-center min-h-screen flex flex-col justify-center items-center bg-black">
        <div
          className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500 mx-auto"
        ></div>
        <h2 className="text-zinc-900 dark:text-white mt-4">Loading...</h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          Soon you will see the awesome projects...
        </p>
      </div>

    )
  }

  if (error) {
    return (
      <div className="text-center min-h-screen flex flex-col justify-center items-center bg-black">
        <TbExclamationCircle className='w-16 h-16 text-red-500' />
        <h2 className="text-2xl text-zinc-900 dark:text-white mt-4">Error!</h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          Uh, I think there is something wrong with your IP. Please try again later...
        </p>
        <Link
          className='mt-4 bg-slate-800 duration-300 hover:bg-slate-900 px-4 py-2 rounded-md'
          href="/"
        >
          Go home
        </Link>
      </div>

    )
  }

  return (
    <>
      <Head>
        <title>Projects | Yiğit Bozyaka</title>
        <meta property="og:title" content="Projects | Yiğit Bozyaka" />
        <meta property="og:description" content="From visually captivating websites to powerful web applications, each project showcases my expertise in web development." />
        <meta name="description" content="From visually captivating websites to powerful web applications, each project showcases my expertise in web development." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <ProjectsHero repos={repos} />
    </>
  )
}

export default Projects;