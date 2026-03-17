import Mclaren from '../Home/Assets/imgMcLaren750s.jpg'

export default function Garagem() {
    return (
        <div className="bg-[#121212] text-white ">
            <h2 className="ml-10!">Sua Garagem</h2>
            <div className="flex ml-10! mt-10!">
                <div
                    className={`bg-zinc-900/50 border border-zinc-800 p-10 w-25 my-4 flex flex-col justify-between hover:border-zinc-600 transition-colors duration-500 mx-3!`}>
                    <div>
                        <span className="block mb-6">
                            <img src={Mclaren} alt="logo" />
                        </span>
                        <p className="text-lg leading-relaxed text-zinc-300 italic mb-8 p-2">
                            Comprado dia: 11/07/2001
                        </p>
                    </div>
                    <div className="border-t border-zinc-800 pt-6">
                        <h4 className="font-bold tracking-wider uppercase text-sm p-2 text-white">
                            carro123
                        </h4>
                    </div>
                </div>
                
            </div>
        </div>
    );
}