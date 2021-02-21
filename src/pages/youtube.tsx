import Head from 'next/head'
import MainLayout from '../layout/layout'
import styles from '../styles/Home.module.scss'
import YouTubeIcon from '@material-ui/icons/YouTube';


export default function Home() {

  const icon = <YouTubeIcon />

  return (
    <MainLayout title={"Youtube"} app_link={"https://www.youtube.com/"} icon={icon}>

    </MainLayout>
  )
}