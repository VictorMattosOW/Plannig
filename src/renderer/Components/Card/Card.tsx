import { X } from '@phosphor-icons/react';
import { useState } from 'react';

export function Card() {
  const [isChecked, setIsChecked] = useState(false);
  const checkHandler = () => {
    setIsChecked(!isChecked);
  }
  return (
    <div className={`flex flex-col ${isChecked ? 'bg-[#00B695]' : 'bg-[#6404C4]'} rounded-xl p-2`}>
      <header className="flex justify-end w-full">
        <X size={18} color="#FFFFFF" className="cursor-pointer" />
      </header>
      <div className="flex gap-2 pl-2 pb-2">
        <form action="">
          <div className="inline-flex items-center">
            <label
              className="relative flex cursor-pointer items-center rounded-full p-1"
              data-ripple-dark="true"
            >
              <input
                type="checkbox"
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:bg-blue-gray-50 checked:border-white checked:bg-white checked:before:bg-pink-500"
                id="checkbox"
                checked={isChecked}
                onChange={checkHandler}
              />
              <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-[#00B695] opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </label>
          </div>
        </form>
        <div className="flex flex-col text-white">
          <h2 className="font-bold text-lg">Node</h2>
          <h3 className="text-xs">2:00</h3>
        </div>
      </div>
    </div>
  );
}
