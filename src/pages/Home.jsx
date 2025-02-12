import HeadersSlider from "../components/HeadersSlider"
import Allcarts from "../components/Allcarts"
import HowWorking from "../components/HowWorking"
import PopularCarts from "../components/PopularCarts"
import DiscountCards from "../components/DiscountCards"

const Home = () => {
  return (
    <div>
      <HeadersSlider />
      <Allcarts />
      <HowWorking/>
      <PopularCarts/>
      <DiscountCards/>
    </div>
  )
}

export default Home