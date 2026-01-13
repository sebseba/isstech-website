import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  delay = 0,
}: ServiceCardProps) => {
  return (
    <div
      className="
           group relative
    min-h-[460px] xl:min-h-[520px]
    rounded-[28px]
    p-14 xl:p-16
    bg-black/45 backdrop-blur-lg
    border border-fuchsia-500/20
    shadow-2xl shadow-black/60
    transition-all duration-300 ease-out
    hover:-translate-y-3
    hover:border-fuchsia-500/50
    hover:shadow-[0_0_70px_rgba(217,70,239,0.45)]
      "
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Icon */}
      <div className="  w-20 h-20
    rounded-2xl
    bg-fuchsia-500/20
    border border-fuchsia-500/40
    flex items-center justify-center
    mb-10
    shadow-[0_0_36px_rgba(217,70,239,0.4)]">
        <Icon className="w-10 h-10 text-fuchsia-300" />
      </div>

      {/* Title */}
      <h3 className="text-base md:text-lg font-semibold tracking-wide uppercase mb-3 text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-[90%]">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;