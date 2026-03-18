import Carrossel from "./components/CarroselMarca"
import CardCarro from "./components/CardCarros"

export default function Explorar() {
    return (
        <div className="">
            <div className="w-full">
                <Carrossel />
            </div>

            <div className="w-full flex ">
                <div className="w-[25%] border-r">
                    25%
                </div>

                <div className="w-full px-8">
                    <div className="max-w-[1350px] mx-auto grid grid-cols-1 sm:grid-cols-3  justify-items-center">
                        <CardCarro />
                        <CardCarro />
                        <CardCarro />
                        <CardCarro />
                        <CardCarro />
                        <CardCarro />
                    </div>
                </div>
            </div>
        </div>
    )
}