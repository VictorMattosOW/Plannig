import { useForm } from 'react-hook-form';
import { Column } from 'renderer/pages/Home/components/Column/Column';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

const dayOfWeek = [
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado',
  'Domingo',
];

const createNewTaskValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  timer: zod.number(),
})

type newTaskFormData = zod.infer<typeof createNewTaskValidationSchema>;

export default function Home() {
  const { register, handleSubmit, watch, reset } = useForm<newTaskFormData>({
    resolver: zodResolver(createNewTaskValidationSchema),
    defaultValues: {
      task: '',
      timer: 0,
    }
  });

  function handleCreateNewTask(data: newTaskFormData) {
    console.log(data);
    reset();
  }

  const task = watch('task');
  const isSubmitDisabled = !task;

  return (
    <div className="h-screen flex flex-1 flex-col items-center gap-20 bg-black p-14 resize">
      <header className="h-24 p-5">
        <form action="" className='flex gap-5' onSubmit={handleSubmit(handleCreateNewTask)}>
          <div className="relative">
            <input
              className="block h-[42px] w-[400px] px-2 text-sm text-[#F2F2F2] bg-transparent border-2 border-[#00B695] focus:outline-none rounded-md"
              type="text"
              id="task"
              {...register('task')}
            />
            <label className="absolute top-[-9px] left-4 px-1 text-sm text-[#F2F2F2] font-bold bg-black">
              Qual o plano?
            </label>
          </div>
          <div className="relative">
            <select
              className="block h-[42px] w-[190px] px-2 text-sm text-[#F2F2F2] bg-transparent border-2 border-[#00B695] focus:outline-none rounded-md"
              id="dayOfWeek"
              // TODO: validar isso aqui depois
              // {...register('dayOfWeek')}
              >
                { dayOfWeek.map(day => {
                  return <option key={day} value={day}>{day}</option>
                })}
            </select>
            <label className="absolute top-[-9px] left-4 px-1 text-sm text-[#F2F2F2] font-bold bg-black">
              Pra quando?
            </label>
          </div>
          <div className="relative">
          <input
              className="block h-[42px] w-[190px] px-2 text-sm text-[#F2F2F2] bg-transparent border-2 border-[#00B695] focus:outline-none rounded-md"
              type="time"
              id="timer"
              {...register('timer')}
            />
            <label className="absolute top-[-9px] left-4 px-1 text-sm text-[#F2F2F2] font-bold bg-black">
              Quanto tempo
            </label>
          </div>
          <button
            className='w-[190px] h-[42px] bg-[#00B695] hover:bg-[#00A385] disabled:bg-[#535353] rounded-lg text-white font-bold text-base'
            type='submit'
            disabled={isSubmitDisabled}
            >
            {isSubmitDisabled ? 'Insira os dados': 'Incluir'}
          </button>
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
