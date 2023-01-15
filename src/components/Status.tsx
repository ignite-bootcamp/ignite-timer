import { cva, VariantProps } from 'class-variance-authority'
import { PropsWithChildren } from 'react'

const statusStyles = cva(
  "flex items-center justify-center gap-2 before:contents-[''] before:w-2 before:h-2 before:rounded-full",
  {
    variants: {
      statusColor: {
        yellow: 'before:bg-yellow-500',
        green: 'before:bg-emerald-500',
        red: 'before:bg-red-500',
      },
    },
    defaultVariants: {
      statusColor: 'green',
    },
  },
)

type StatusProps = VariantProps<typeof statusStyles> & PropsWithChildren

export function Status({ statusColor, children }: StatusProps) {
  return <span className={statusStyles({ statusColor })}>{children}</span>
}
