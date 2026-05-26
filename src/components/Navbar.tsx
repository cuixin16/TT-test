import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, LogIn } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: (string | number | boolean | undefined | null)[]) {
  return twMerge(clsx(inputs));
}

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: '首页' },
    { path: '/generator', label: 'AI 生成' },
    { path: '/tools', label: '工具中心' },
    { path: '/publish', label: '发布工作台' },
    { path: '/dashboard', label: '用户中心' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#165DFF] to-[#722ED1] rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" fill="currentColor" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#165DFF] to-[#722ED1]">
              CrossAI
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-[#165DFF]',
                  location.pathname === item.path
                    ? 'text-[#165DFF]'
                    : 'text-slate-600'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-[#165DFF] transition-colors">
              <LogIn className="w-4 h-4 inline mr-2" />
              登录
            </button>
            <button className="px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#165DFF] to-[#722ED1] rounded-lg hover:shadow-lg hover:shadow-[#165DFF]/25 transition-all transform hover:-translate-y-0.5">
              免费开始
            </button>
          </div>

          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'block px-3 py-2 rounded-lg text-base font-medium',
                  location.pathname === item.path
                    ? 'bg-[#165DFF]/10 text-[#165DFF]'
                    : 'text-slate-600 hover:bg-slate-50'
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-100 space-y-2">
              <button className="w-full px-4 py-2 text-center text-slate-700">
                登录
              </button>
              <button className="w-full px-4 py-2 text-center text-white bg-gradient-to-r from-[#165DFF] to-[#722ED1] rounded-lg">
                免费开始
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
