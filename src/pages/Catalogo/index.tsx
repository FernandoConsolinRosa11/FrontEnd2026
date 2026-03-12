import Carrossel from "./components/CarroselMarca"
import CardCarro from "./components/CardCarros"

export default function Catalogo() {
    return (
        <>
            <div className="w-full">
                <Carrossel />
            </div>

            <div className="w-full flex border">
                <div className="w-[30%] border-r">
                    30%
                </div>

                <div className="w-full px-8">
                    <div className="max-w-[1350px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center">
                        <CardCarro />
                        <CardCarro />
                        <CardCarro />
                        <CardCarro />
                        <CardCarro />
                        <CardCarro />

                    </div>
                </div>
            </div>
        </>
    )
}