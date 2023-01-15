import { Play } from 'phosphor-react'

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center">
      <form className="flex flex-col items-center gap-14">
        <div className="w-full flex items-center justify-center gap-2 text-neutral-200 text-lg font-bold flex-wrap">
          <label htmlFor="task">Vou trabalhar em</label>
          <input
            className="flex-1 h-10 font-bold text-lg px-2 bg-transparent border-b-neutral-500 border-b-2 placeholder:text-neutral-500 placeholder:text-center focus:border-b-emerald-500 focus:outline-none"
            placeholder="Dê um nome para seu projeto"
            id="task"
            type="text"
          />
          <label htmlFor="minutesAmount">durante</label>
          <input
            className="h-10 w-16 font-bold text-lg px-2 bg-transparent border-b-neutral-500 border-b-2 placeholder:text-neutral-500 placeholder:text-center focus:border-b-emerald-500 focus:outline-none"
            id="minutesAmount"
            type="number"
            placeholder="00"
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
        >
          <Play size={24} />
          Começar
        </button>
      </form>
    </main>
  )
}
