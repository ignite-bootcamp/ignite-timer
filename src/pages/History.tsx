import { Status } from '@ui/Status'
import { useContext } from 'react'
import { CyclesContext } from '../context/CyclesContext'

export default function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <main className="flex-1 p-14 flex flex-col">
      <h1 className="text-2xl text-neutral-200">Meu histórico</h1>

      <div className="flex-1 overflow-auto mt-8">
        <table className="w-full border-collapse min-w-[600px]">
          <thead>
            <tr>
              <th className="bg-neutral-700/50 p-4 pl-6 text-left text-neutral-200 text-sm rounded-tl-lg">
                Tarefa
              </th>
              <th className="bg-neutral-700/50 p-4 text-left text-neutral-200 text-sm">
                Duração
              </th>
              <th className="bg-neutral-700/50 p-4 text-left text-neutral-200 text-sm">
                Inicio
              </th>
              <th className="bg-neutral-700/50 p-4 pr-6 text-left text-neutral-200 text-sm rounded-tr-lg">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => (
              <tr key={cycle.id}>
                <td className="w-1/2 bg-neutral-700/30 border-t-4 border-t-neutral-800/80 text-sm p-4">
                  {cycle.task}
                </td>
                <td className="bg-neutral-700/30 border-t-4 border-t-neutral-800/80 text-sm p-4">
                  {cycle.minutesAmount} minutos
                </td>
                <td className="bg-neutral-700/30 border-t-4 border-t-neutral-800/80 text-sm p-4">
                  {cycle.startDate.toISOString()}
                </td>
                <td className="bg-neutral-700/30 border-t-4 border-t-neutral-800/80 text-sm p-4">
                  {cycle.finishedDate && (
                    <Status statusColor="green">Concluído</Status>
                  )}
                  {cycle.interruptedDate && (
                    <Status statusColor="red">Interrompido</Status>
                  )}
                  {!cycle.finishedDate && !cycle.interruptedDate && (
                    <Status statusColor="yellow">Em andamento</Status>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}
