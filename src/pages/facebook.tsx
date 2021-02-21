import MainLayout from "../layout/layout"
import {useRouter} from "next/router"
import FacebookIcon from '@material-ui/icons/Facebook';


const InstaPage = () => {

  const icon = <FacebookIcon />

  return (
      
    <MainLayout title={"Facebook"} app_link={"https://ja-jp.facebook.com/"} icon={icon}>

    </MainLayout>
  )
}

export default InstaPage