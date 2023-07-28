import { Pause, Play, X } from '@phosphor-icons/react';
import { useState } from 'react';
import { InputCheckbox } from 'renderer/components/InputCheckbox/InputCheckbox';

export function Card() {
  const [isChecked, setIsChecked] = useState(false);

  function checkHandler(isChecked: boolean) {
    setIsChecked(isChecked);
  }

  return (
    <div className={`flex flex-col ${isChecked ? 'bg-[#00B695]' : 'bg-[#6404C4]'} rounded-xl p-2`}>
      <header className="flex justify-end w-full">
        <X size={18} color="#FFFFFF" className="cursor-pointer" />
      </header>
      <div className="flex gap-2 pl-2 pb-2">
        <form action="">
          <InputCheckbox isChecked={isChecked} onCheckedInput={checkHandler} />
        </form>
        <div className="flex flex-col text-white">
          <h2 className="font-bold text-lg">Node</h2>
          <div className='flex gap-1 items-center'>
            <h3 className="text-xs">02h30</h3>
            <Play size={12} weight="fill" color='#828792' />
            <Pause size={12} weight="fill" color='#828792'/>
          </div>
        </div>
      </div>
    </div>
  );
}
