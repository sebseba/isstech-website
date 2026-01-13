import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

type Item = {
  title: string;
  desc: string;
};

export default function WhyWorkWithUsShowcase() {
  const items: Item[] = useMemo(
    () => [
      {
        title: "Personalized Attention",
        desc: "You work directly with senior builders. Fast decisions, no handoffs, no agency fluff.",
      },
      {
        title: "Technical Expertise",
        desc: "Modern React/Node stacks, clean architecture, and performance-first delivery — built to scale.",
      },
      {
        title: "Transparent Process",
        desc: "Clear scope, milestones, and weekly updates so you always know what’s shipping and why.",
      },
      {
        title: "Long-term Partnership",
        desc: "We stay involved after launch with monitoring, improvements, and ongoing support when you need it.",
      },
    ],
    [],
  );

  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="section-padding relative z-10">
      <div className="container-width">
        <div className="text-center mb-14">
          <h2 className="section-heading mb-4 text-white">Why Work With Us?</h2>
          <p className="subtitle mx-auto text-white/70">
            A boutique team with a product mindset — designed to ship premium results.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] items-start">
          {/* LEFT: list */}
          <div className="space-y-3">
            {items.map((item, i) => {
  const isActive = i === active;

  return (
    <div
      key={item.title}
      onMouseEnter={() => setActive(i)}
      onMouseLeave={() => setActive(null)}
      className={cn(
        "group w-full cursor-pointer relative rounded-2xl px-6 py-6",
        "bg-black/20 backdrop-blur-md border border-white/10",
        "transition-all duration-300",
        "hover:border-fuchsia-500/30 hover:bg-black/30",
        isActive &&
          "bg-black/35 border-fuchsia-500/35 shadow-[0_0_34px_rgba(217,70,239,0.22)]",
      )}
    >
      {/* glow only on hover */}
      {isActive && (
        <span className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-2xl">
          <span className="absolute -top-10 left-1/2 h-24 w-[520px] -translate-x-1/2 rounded-full bg-fuchsia-600/20 blur-[70px]" />
        </span>
      )}

      <div className="flex items-start gap-4">
        <div
          className={cn(
            "mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full border",
            isActive
              ? "border-fuchsia-500/35 bg-fuchsia-500/10 text-fuchsia-200"
              : "border-white/10 bg-white/5 text-white/70",
          )}
        >
          <span className="text-sm font-semibold">{i + 1}</span>
        </div>

        <div>
          <div
            className={cn(
              "text-xl md:text-3xl font-semibold tracking-tight",
              isActive ? "text-white" : "text-white/55",
            )}
          >
            {item.title}
          </div>

          {/* mobile only */}
          {isActive && (
            <p className="mt-3 text-sm text-white/70 lg:hidden">
              {item.desc}
            </p>
          )}
        </div>
      </div>
    </div>
  );
})}
          </div>

          {/* RIGHT: description panel (desktop) */}
         {active !== null && (
  <aside className="hidden lg:block sticky top-28">
    <div className="relative rounded-2xl p-8 bg-black/35 backdrop-blur-md border border-fuchsia-500/15 shadow-lg shadow-black/40">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-2xl">
        <div className="absolute -top-24 right-[-120px] h-64 w-64 rounded-full bg-indigo-500/15 blur-[90px]" />
      </div>

      <div className="text-sm uppercase tracking-widest text-white/50 mb-2">
        {active + 1} / {items.length}
      </div>

      <h3 className="text-2xl font-semibold text-white mb-3">
        {items[active].title}
      </h3>

      <p className="text-white/75 leading-relaxed">
        {items[active].desc}
      </p>
    </div>
  </aside>
)}

        </div>
      </div>
    </section>
  );
}
