import { differenceInSeconds } from 'date-fns'
import { useContext, useEffect } from 'react'
import { CyclesContext } from '..'

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    markCurrentCycleAsFinished,
    amountSecondsPassed,
    setSecondsPassed,
  } = useContext(CyclesContext)
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )

        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished()

          setSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          setSecondsPassed(secondsDifference)
        }
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [
    activeCycle,
    activeCycleId,
    markCurrentCycleAsFinished,
    setSecondsPassed,
    totalSeconds,
  ])

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    }
  }, [activeCycle, minutes, seconds])

  return (
    <div className="font-mono text-[10rem] leading-[8rem] text-neutral-200 flex gap-4 font-bold">
      <span className="bg-neutral-700/30 py-8 px-4 rounded">{minutes[0]}</span>
      <span className="bg-neutral-700/30 py-8 px-4 rounded">{minutes[1]}</span>
      <div className="py-8 text-emerald-600 w-16 overflow-hidden flex justify-center">
        :
      </div>
      <span className="bg-neutral-700/30 py-8 px-4 rounded">{seconds[0]}</span>
      <span className="bg-neutral-700/30 py-8 px-4 rounded">{seconds[1]}</span>
    </div>
  )
}
