import { FC } from "react"
import { Hero } from "components/Hero/Hero"
import AimPage from "components/SectionAim/Aim"
import { AboutSection } from "components/SectionAbout/About"
import { AboutData, DataType } from "components/SectionAbout/AboutData"
import { MobileAppSection } from "components/SectionMobile/Mobile"
import { Team } from "components/SectionTeam/Team"

const PageHome: FC<DataType> = () => {
  return (
    <>
      <Hero />
      <AimPage mb={40} />
      <AboutSection data={AboutData} />
      <MobileAppSection bgColor='primary.extraDark' />
      <Team />
    </>
  )
}

export default PageHome
