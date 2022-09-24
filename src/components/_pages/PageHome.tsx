import { FC } from "react"
import { Hero } from "components/Hero/Hero"
import AimPage from "components/SectionAim/Aim"
import { AboutSection } from "components/SectionAbout/About"
import { AboutData } from "components/SectionAbout/AboutData"

const PageHome: FC = () => {
  return (
    <>
      <Hero />
      <AimPage mb={40} />
      <AboutSection data={AboutData} />
    </>
  )
}

export default PageHome
