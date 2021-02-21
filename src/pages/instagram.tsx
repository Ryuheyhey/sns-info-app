import MainLayout from "../layout/layout"
import {useRouter} from "next/router"
import InstagramIcon from '@material-ui/icons/Instagram';


const InstaPage = () => {

  const icon = <InstagramIcon />

  return (
      
    <MainLayout title={"Instagram"} app_link={"https://www.instagram.com"} icon={icon}>

    </MainLayout>
  )
}

export default InstaPage