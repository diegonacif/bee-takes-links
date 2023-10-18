import { BeeLogo } from "../../components/BeeLogo";
import { ButtonsSection, HomeContainer, LinkButton } from "./styles";
import beeStripe from "../../assets/bee-stripe-2.png";
import { VideoBanner } from "../../components/VideoBanner";

export function Home() {
  return (
    <>
      <VideoBanner />
      <HomeContainer>
        <div className="logo-wrapper">
          <BeeLogo />
        </div>
        <h2>Tenha suas memórias, negócios ou histórias, sob uma nova perspectiva.</h2>
        <ButtonsSection>
          <LinkButton>
            <img src={beeStripe} alt="" />
            <span>Portfólio</span>
          </LinkButton>
          <LinkButton href="https://youtube.com/@BeeTakes?si=_wrsOlnnUkbCqwKL">
            <img src={beeStripe} alt="" />
            <span>Canal Youtube</span>
          </LinkButton>
          <LinkButton>
            <img src={beeStripe} alt="" />
            <span>Orçamentos</span>
          </LinkButton>
        </ButtonsSection>
      </HomeContainer>
    </>
  )
}
