import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ToolCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  to: string;
}

export function ToolCard({ icon: Icon, title, description, color, to }: ToolCardProps) {
  return (
    <Link
      to={to}
      className="group block p-6 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900 mb-2">
        {title}
      </h3>
      <p className="text-slate-600 text-sm">
        {description}
      </p>
    </Link>
  );
}
