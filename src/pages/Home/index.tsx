import { BeeLogo } from "../../components/BeeLogo";
import { ButtonsSection, HomeContainer, LinkButton } from "./styles";
import beeStripe from "../../assets/bee-stripe-2.png";
import { VideoBanner } from "../../components/VideoBanner";
import { useWindowSize } from 'usehooks-ts'

export function Home() {
  const { width } = useWindowSize()

  const whatsappNumber = "5584981033283"
  const whatsappMessage = "Olá! Gostaria de solicitar um orçamento."
  const whatsappAddress = width >= 620 ?
  `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=` : // Abre diretamente a versão web
  `https://wa.me/${whatsappNumber}?text=`; // Para uso geral

  return (
    <HomeContainer>
      <VideoBanner />
      <div className="logo-wrapper">
        <BeeLogo />
      </div>
      <h2>Tenha suas memórias, negócios ou histórias, sob uma nova perspectiva.</h2>
      <ButtonsSection>
        <LinkButton href="/under-construction">
          <img src={beeStripe} alt="bee stripe" />
          <span>Portfólio</span>
        </LinkButton>
        <LinkButton href="https://youtube.com/@BeeTakes?si=_wrsOlnnUkbCqwKL">
          <img src={beeStripe} alt="bee stripe" />
          <span>Canal Youtube</span>
        </LinkButton>
        <LinkButton>
          <img src={beeStripe} alt="bee stripe" />
          <span onClick={() => window.open(whatsappAddress + encodeURI(whatsappMessage))}>Fale Conosco</span>
        </LinkButton>
      </ButtonsSection>
    </HomeContainer>
  )
}
