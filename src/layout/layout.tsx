import Header from "../components/Header"

type LayoutProps = {
  children: React.ReactNode
}

const MainLayout = (props, {children}: LayoutProps):JSX.Element => {

  console.log(props)
  return (
    <>
      <Header title={props.title} app_link={props.app_link} icon={props.icon}/>
      <main>{children}</main>
    </>
  )
}

export default MainLayout