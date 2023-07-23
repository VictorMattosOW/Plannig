import { Card } from '../Card/Card';

interface DayOfWeekProps {
  dayOfWeek: string;
}

export function Column({ dayOfWeek }: DayOfWeekProps) {
  return (
    <section className="bg-[#272B34] rounded-xl">
      <div className="text-center p-2 mb-2 divide-y divide-slate-200 divide-solid">
        <h1 className="font-bold text-2xl text-white">{dayOfWeek}</h1>
      </div>
      <div className='mx-2'>
        <Card />
      </div>
    </section>
  );
}
