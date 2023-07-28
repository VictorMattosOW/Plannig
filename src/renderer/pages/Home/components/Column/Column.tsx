import { Card } from '../Card/Card';

interface DayOfWeekProps {
  dayOfWeek: string;
}

export function Column({ dayOfWeek }: DayOfWeekProps) {
  return (
    <div>
      <section className="bg-[#272B34] h-[96%] rounded-xl">
        <div className="text-center p-2 mb-2">
          <h1 className="font-bold text-2xl text-white">{dayOfWeek}</h1>
        </div>
        <div className="mx-2">
          <Card />
        </div>
      </section>
      <h1 className='text-white'>iae</h1>
    </div>
  );
}
