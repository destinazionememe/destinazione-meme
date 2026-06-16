type MetricTickerProps = {
  items: Array<{
    label: string;
    value: string;
  }>;
};

export function MetricTicker({ items }: MetricTickerProps) {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="overflow-hidden border-y border-white/10 bg-black/45 py-4">
      <div className="ticker-track flex w-max gap-10">
        {repeated.map((item, index) => (
          <div
            key={`${item.label}-${index}`}
            className="flex items-center gap-3 font-mono uppercase"
          >
            <span className="text-[10px] font-bold tracking-[0.24em] text-white/35">
              {item.label}
            </span>
            <span className="text-sm font-semibold tracking-[0.08em] text-cyan">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
