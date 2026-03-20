export default function CheckboxActive() {
  return (
    <div className="flex items-center space-x-3">
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" />

        <div
          className="w-11 h-6 bg-[#121212] peer-focus:outline-none rounded-sm 
                peer peer-checked:after:translate-x-full peer-checked:after:border-white 
                after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                after:bg-white after:border-gray-300 after:border after:rounded-sm
                after:h-5 after:w-5 after:transition-all peer-checked:bg-[#C59958]"
        ></div>

      </label>
    </div>
  );
}
