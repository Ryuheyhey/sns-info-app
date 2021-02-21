import Head from 'next/head'
import MainLayout from '../layout/layout'
import styles from '../styles/Home.module.scss'
import TwitterIcon from '@material-ui/icons/Twitter';


export default function Home() {

  const icon = <TwitterIcon />

  return (
    <MainLayout title={"Twitter"} app_link={"https://twitter.com/"} icon={icon}>

    </MainLayout>
  )
}
