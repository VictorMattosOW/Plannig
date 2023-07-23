import { Column } from "renderer/Components/Column/Column";

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
    <div className="h-screen flex flex-1 flex-col items-center gap-20 bg-black p-5 resize">
      <header className=" h-24 bg-[#6A6DCD] rounded p-5">
        <form action="">
          <div className="flex gap-5">
            <div className="flex flex-col gap-2">
              <label
                className="text-white text-md rounded font-bold"
                htmlFor="task"
              >
                O que vai estudar ?
              </label>
              <input className="rounded h-[26px] " type="text" name="" id="task" />
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="text-white text-md rounded font-bold"
                htmlFor="daysOfWeek"
              >
                Dia da Semana
              </label>

              <select className="rounded h-[26px]" id="daysOfWeek">
                {dayOfWeek.map((week, index) => {
                  return (
                    <option key={index} value={week}>
                      {week}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="text-white text-md rounded font-bold"
                htmlFor="timer"
              >
                Quanto Tempo ?
              </label>
              <input
                className="rounded"
                type="time"
                id="timer"
                name="timer"
                min="00:00"
                max="06:00"
              ></input>
            </div>
            <div className="flex justify-center items-end">
              <button className="bg-[#ea6d5d] text-white font-bold hover:bg-[#e7280f] rounded-full w-[120px] h-[26px]">
                Salvar!
              </button>
            </div>
          </div>
        </form>
      </header>
      <main className="grid lg:grid-cols-7 md:grid-cols-3 gap-5 h-full w-full">
        {dayOfWeek.map((day, index) => {
          return <Column key={index} dayOfWeek={day} />
        })}

      </main>
    </div>
  );
}
