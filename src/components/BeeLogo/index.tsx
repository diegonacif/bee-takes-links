import beeLogoImg from '../../assets/bee-logo.png'
import { BeeLogoContainer } from './styles'

export function BeeLogo() {
  return (
    <BeeLogoContainer>
      <img src={beeLogoImg} alt="bee logo image" />
    </BeeLogoContainer>
  )
}