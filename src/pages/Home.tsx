import { Play } from 'phosphor-react'

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center">
      <form className="flex flex-col items-center gap-14">
        <div className="w-full flex items-center justify-center gap-2 text-neutral-200 text-lg font-bold flex-wrap">
          <label htmlFor="task">Vou trabalhar em</label>
          <input id="task" type="text" />
          <label htmlFor="minutesAmount">durante</label>
          <input id="minutesAmount" type="number" />
          <span>minutos.</span>
        </div>

        <div className="font-mono text-[10rem] leading-[8rem] text-neutral-200 flex gap-4 font-bold">
          <span className="bg-neutral-700/30 py-8 px-4 rounded">0</span>
          <span className="bg-neutral-700/30 py-8 px-4 rounded">0</span>
          <div className="py-8 text-emerald-500 w-16 overflow-hidden flex justify-center">
            :
          </div>
          <span className="bg-neutral-700/30 py-8 px-4 rounded">0</span>
          <span className="bg-neutral-700/30 py-8 px-4 rounded">0</span>
        </div>

        <button type="submit">
          <Play size={24} />
          Começar
        </button>
      </form>
    </main>
  )
}
