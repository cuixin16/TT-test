import { Link } from 'react-router-dom';
import { Zap, Twitter, Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-[#165DFF] to-[#722ED1] rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" fill="currentColor" />
              </div>
              <span className="text-xl font-bold text-white">
                CrossAI
              </span>
            </Link>
            <p className="text-slate-400 mb-6">
              专注于跨境电商的 AI 视频生成平台，让视频营销更简单。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">探索</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-white transition-colors">首页</Link></li>
              <li><Link to="/generator" className="hover:text-white transition-colors">AI 生成</Link></li>
              <li><Link to="/tools" className="hover:text-white transition-colors">工具中心</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">工具</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">视频去水印</a></li>
              <li><a href="#" className="hover:text-white transition-colors">视频去字幕</a></li>
              <li><a href="#" className="hover:text-white transition-colors">图片翻译</a></li>
              <li><a href="#" className="hover:text-white transition-colors">更多工具</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">关于</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">关于我们</a></li>
              <li><a href="#" className="hover:text-white transition-colors">联系我们</a></li>
              <li><a href="#" className="hover:text-white transition-colors">隐私政策</a></li>
              <li><a href="#" className="hover:text-white transition-colors">服务条款</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-500">
            © 2024 CrossAI. 保留所有权利。
          </p>
        </div>
      </div>
    </footer>
  );
}
