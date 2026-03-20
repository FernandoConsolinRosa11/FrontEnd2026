import CheckboxActive from "../../../components/checkboxActive";
import Button from "../../../components/Button";

export default function SideBar() {
  return (
    <div className="w-[25%] border-r ">
      <div className="max-w-sm p-6  rounded-xl shadow-sm space-y-8 m-2">
        <h3 className="text-lg font-bold text-gray-800 border-b pb-2">
          Filtros do Veículo
        </h3>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-700">Esportivo</p>
            <CheckboxActive />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-700">SUV</p>
            <CheckboxActive />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-700">Super carro</p>
            <CheckboxActive />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-700">GT Race</p>
            <CheckboxActive />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-700">Milenares</p>
            <CheckboxActive />
          </div>
        </div>

        <hr className="border-gray-100" />

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-gray-500 uppercase">
              Ano Mínimo
            </label>
            <select className="p-2 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
              <option>2026</option>
              <option>2025</option>
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-gray-500 uppercase">
              Combustível
            </label>
            <select className="p-2 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
              <option>Flex</option>
              <option>Diesel</option>
              <option>Elétrico</option>
            </select>
          </div>
        </div>

        <div className="space-y-4 ">
          <div className="flex flex-col gap-1.5 mt-2 mb-4">
            <p className="text-xs font-bold text-gray-500 uppercase mb-3">
              Câmbio
            </p>
            <div className="flex bg-gray-100 p-1 rounded-lg w-full">
             <Button texto='Manual' className="flex-1 py-1.5 text-xs font-medium text-black hover:text-white!"/>
             <Button texto='Automático' className="flex-1 py-1.5 text-xs font-medium text-black hover:text-white!"/>
            </div>
          </div>
        </div>

        <button className="w-full py-3 bg-[#C59958] hover:bg-[#997847] text-white font-bold rounded-lg transition-colors">
          Aplicar Filtros
        </button>
      </div>
    </div>
  );
}
