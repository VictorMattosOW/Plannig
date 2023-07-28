import { Column } from 'renderer/pages/Home/components/Column/Column';

const dayOfWeek = [
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado',
  'Domingo',
];

export default function Home() {
  return (
    <div className="h-screen flex flex-1 flex-col items-center gap-20 bg-black p-14 resize">
      <header className="h-24 p-5">
        <form action="" className='flex gap-5'>
          <div className="relative">
            <input
              type="text"
              id="task"
              name="inputField"
              className="block h-[42px] w-[400px] px-2 text-sm text-[#F2F2F2] bg-transparent border-2 border-[#00B695] focus:outline-none rounded-md"
            />
            <label className="absolute top-[-9px] left-4 px-1 text-sm text-[#F2F2F2] font-bold bg-black">
              Qual o plano?
            </label>
          </div>
          <div className="relative">
            <select
              id="task"
              name="inputField"
              className="block h-[42px] w-[190px] px-2 text-sm text-[#F2F2F2] bg-transparent border-2 border-[#00B695] focus:outline-none rounded-md"
            >
                <option value="valor1">Valor 1</option>
                <option value="valor2" selected>Valor 2</option>
                <option value="valor3">Valor 3</option>
            </select>
            <label className="absolute top-[-9px] left-4 px-1 text-sm text-[#F2F2F2] font-bold bg-black">
              Qual o plano?
            </label>
          </div>
        </form>
      </header>
      <main className="grid lg:grid-cols-7 md:grid-cols-3 gap-5 h-full w-full">
        {dayOfWeek.map((day, index) => {
          return <Column key={index} dayOfWeek={day} />;
        })}
      </main>
    </div>
  );
}
