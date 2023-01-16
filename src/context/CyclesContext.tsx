import {
  createContext,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from 'react'
import { Cycle } from '../pages/Home'

interface CreateNewCycle {
  minutesAmount: number
  task: string
}

interface CyclesContextType {
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (cycle: CreateNewCycle) => void
  interruptCycle: () => void
}

export const CyclesContext = createContext({} as CyclesContextType)

export function CyclesProvider({ children }: PropsWithChildren) {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  const markCurrentCycleAsFinished = useCallback(() => {
    setCycles((prevState) =>
      prevState.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
  }, [activeCycleId])

  function createNewCycle({ minutesAmount, task }: CreateNewCycle) {
    const id = String(new Date().getTime())
    const newCycle: Cycle = {
      id,
      minutesAmount,
      task,
      startDate: new Date(),
    }

    setCycles((prevState) => [...prevState, newCycle])
    setActiveCycleId(id)
    setAmountSecondsPassed(0)
  }

  const interruptCycle = useCallback(() => {
    setActiveCycleId(null)
    setCycles((prevState) =>
      prevState.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
  }, [activeCycleId])

  const memoizedValue = useMemo(
    () => ({
      activeCycle,
      activeCycleId,
      markCurrentCycleAsFinished,
      amountSecondsPassed,
      setSecondsPassed,
      interruptCycle,
      createNewCycle,
    }),
    [
      activeCycle,
      activeCycleId,
      amountSecondsPassed,
      interruptCycle,
      markCurrentCycleAsFinished,
    ],
  )

  return (
    <CyclesContext.Provider value={memoizedValue}>
      {children}
    </CyclesContext.Provider>
  )
}
