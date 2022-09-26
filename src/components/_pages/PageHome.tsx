import { FC } from "react"
import { Hero } from "components/Hero/Hero"
import AimPage from "components/SectionAim/Aim"
import { AboutSection } from "components/SectionAbout/About"
import { AboutData, DataType } from "components/SectionAbout/AboutData"
import { MobileAppSection } from "components/SectionMobile/Mobile"

const PageHome: FC<DataType> = () => {
  return (
    <>
      <Hero />
      <AimPage mb={40} />
      <AboutSection data={AboutData} />
      <MobileAppSection bgColor='primary.extraDark' />
    </>
  )
}

export default PageHome
