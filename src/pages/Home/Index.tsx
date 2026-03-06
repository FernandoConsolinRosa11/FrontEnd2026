import CarrouselCar from "./Components/BannerCar"
import "../../app.css"
import BannerVideo from "./Components/BannerVideo"

export default function Home(){
    return(
        <div>
            <BannerVideo/>
            <CarrouselCar/>
        </div>
    )
}