import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../context/CyclesContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <div className="w-full flex items-center justify-center gap-2 text-neutral-200 text-lg font-bold flex-wrap">
      <label htmlFor="task">Vou trabalhar em</label>
      <input
        className="flex-1 h-10 font-bold text-lg px-2 bg-transparent border-b-neutral-500 border-b-2 placeholder:text-neutral-500 placeholder:text-center focus:border-b-emerald-500 focus:outline-none"
        placeholder="Dê um nome para seu projeto"
        id="task"
        type="text"
        list="task-suggestion"
        disabled={!!activeCycle}
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
        placeholder="0"
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </div>
  )
}
