import {
  createContext,
  PropsWithChildren,
  useCallback,
  useMemo,
  useReducer,
  useState,
} from 'react'
import { ActionTypes, Cycle, cyclesReducer } from '../reducers/cycles'

interface CreateNewCycle {
  minutesAmount: number
  task: string
}

interface CyclesContextType {
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  cycles: Cycle[]
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (cycle: CreateNewCycle) => void
  interruptCycle: () => void
}

export const CyclesContext = createContext({} as CyclesContextType)

export function CyclesProvider({ children }: PropsWithChildren) {
  const [cyclesState, dispatch] = useReducer(cyclesReducer, {
    cycles: [],
    activeCycleId: null,
  })
  const { activeCycleId, cycles } = cyclesState

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  const markCurrentCycleAsFinished = useCallback(() => {
    dispatch({
      type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
      payload: {
        activeCycleId,
      },
    })
  }, [activeCycleId])

  function createNewCycle({ minutesAmount, task }: CreateNewCycle) {
    const id = String(new Date().getTime())
    const newCycle: Cycle = {
      id,
      minutesAmount,
      task,
      startDate: new Date(),
    }

    dispatch({ type: ActionTypes.ADD_NEW_CYCLE, payload: { newCycle } })
    setAmountSecondsPassed(0)
  }

  const interruptCycle = useCallback(() => {
    dispatch({
      type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
      payload: {
        activeCycleId,
      },
    })
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
      cycles,
    }),
    [
      activeCycle,
      activeCycleId,
      amountSecondsPassed,
      cycles,
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
