import { Filter } from "lucide-react";

type FilterButtonProps = {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
};

export const MediaFilterButton = ({ children, active, onClick }: FilterButtonProps) => (
  <button
    onClick={onClick}
    className={`
      px-6 py-3 rounded-lg font-medium transition-all duration-300
      ${active 
        ? "bg-rat text-rat-dark" 
        : "bg-rat-light text-white hover:bg-rat-light/80"
      }
    `}
  >
    <div className="flex items-center gap-2">
      <Filter className="w-4 h-4" />
      {children}
    </div>
  </button>
);