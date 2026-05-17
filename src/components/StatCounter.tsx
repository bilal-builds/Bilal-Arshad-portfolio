import { useCountUp } from '@/hooks/useCountUp'

interface StatCounterProps {
  end: number
  label: string
  suffix?: string
  delay?: number
}

export default function StatCounter({ end, label, suffix = '+', delay = 0 }: StatCounterProps) {
  const { count, ref } = useCountUp(end, 2000)

  return (
    <div
      ref={ref}
      className="bg-brand-bg-light border border-brand-border rounded-2xl p-10 text-center transition-all duration-500 hover:-translate-y-2.5 hover:shadow-xl"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <span className="font-display text-5xl font-bold text-brand-primary block mb-2">
        {count}{suffix}
      </span>
      <span className="text-sm text-brand-muted uppercase tracking-wider">{label}</span>
    </div>
  )
}