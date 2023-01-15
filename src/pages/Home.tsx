import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const newCycleFormValidationSchema = z.object({
  task: z.string().min(1, 'Informe a tarefa'),
  minutesAmount: z
    .number()
    .min(5, 'O ciclo precisa ser de no máximo 5 minutos')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos'),
})

type NewCycleForm = z.infer<typeof newCycleFormValidationSchema>

export default function Home() {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleForm>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      minutesAmount: 0,
      task: '',
    },
  })

  function handleCreateNewCycle(data: NewCycleForm) {
    console.log(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <main className="flex-1 flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit(handleCreateNewCycle)}
        className="flex flex-col items-center gap-14"
      >
        <div className="w-full flex items-center justify-center gap-2 text-neutral-200 text-lg font-bold flex-wrap">
          <label htmlFor="task">Vou trabalhar em</label>
          <input
            className="flex-1 h-10 font-bold text-lg px-2 bg-transparent border-b-neutral-500 border-b-2 placeholder:text-neutral-500 placeholder:text-center focus:border-b-emerald-500 focus:outline-none"
            placeholder="Dê um nome para seu projeto"
            id="task"
            type="text"
            list="task-suggestion"
            {...register('task')}
          />

          <datalist id="task-suggestion">
            <option value="Projeto 1"></option>
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <input
            className="h-10 w-16 font-bold text-lg px-2 bg-transparent border-b-neutral-500 border-b-2 placeholder:text-neutral-500 placeholder:text-center focus:border-b-emerald-500 focus:outline-none"
            id="minutesAmount"
            type="number"
            step={5}
            min={5}
            max={60}
            placeholder="00"
            {...register('minutesAmount', { valueAsNumber: true })}
          />
          <span>minutos.</span>
        </div>

        <div className="font-mono text-[10rem] leading-[8rem] text-neutral-200 flex gap-4 font-bold">
          <span className="bg-neutral-700/30 py-8 px-4 rounded">0</span>
          <span className="bg-neutral-700/30 py-8 px-4 rounded">0</span>
          <div className="py-8 text-emerald-600 w-16 overflow-hidden flex justify-center">
            :
          </div>
          <span className="bg-neutral-700/30 py-8 px-4 rounded">0</span>
          <span className="bg-neutral-700/30 py-8 px-4 rounded">0</span>
        </div>

        <button
          type="submit"
          className="bg-emerald-600 text-neutral-200 flex items-center justify-center rounded-lg w-full p-4 gap-2 cursor-pointer font-bold enabled:hover:bg-emerald-700 transition disabled:bg-opacity-70 disabled:cursor-not-allowed"
          disabled={isSubmitDisabled}
        >
          <Play size={24} />
          Começar
        </button>
      </form>
    </main>
  )
}
