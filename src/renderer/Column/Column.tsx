interface DayOfWeekProps {
  dayOfWeek: string;
}

export function Column({ dayOfWeek }: DayOfWeekProps) {
  return (
    <section className="border-2 border-solid h-full rounded-md border-white w-60 text-white">
      <div className="text-center p-2 mb-2 divide-y divide-slate-200 divide-solid">
        <h1 className="font-bold text-2xl">{dayOfWeek}</h1>
      </div>
      <div>
        <form action="">
          <div className="flex gap-3 p-2 items-center bg-[#6A6DCD]">
            <input className="h-4 w-4 checked:bg-black" type="checkbox" />
            <div className="flex flex-col">
              <h2 className="font-bold text-lg">Node</h2>
              <h3 className="text-xs">2:00</h3>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
