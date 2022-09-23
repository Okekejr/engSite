import { FC } from "react"
import { Hero } from "components/Hero/Hero"
import AimPage from "components/Aim/Aim"

const PageHome: FC = () => {
  return (
    <>
      <Hero />
      <AimPage />
    </>
  )
}

export default PageHome
