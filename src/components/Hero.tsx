import { Zap, Sparkles, Rocket, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#165DFF]/5 via-white to-[#722ED1]/5" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#165DFF]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-[#722ED1]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#165DFF]/10 to-[#722ED1]/10 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-[#165DFF]" />
            <span className="text-sm font-medium text-slate-700">
              全新 AI 驱动的跨境电商视频平台
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
            发现、复刻和裂变
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#165DFF] to-[#722ED1]">
              TikTok 爆款带货视频
            </span>
          </h1>

          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            专注 TikTok 电商，一个爆款裂变成百个爆款。AI 智能生成 + 一键复刻，无需成为提示词专家。
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/generator"
              className="group inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#165DFF] to-[#722ED1] rounded-xl hover:shadow-2xl hover:shadow-[#165DFF]/25 transition-all transform hover:-translate-y-1"
            >
              免费开始
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-slate-700 bg-white border-2 border-slate-200 rounded-xl hover:border-[#165DFF] hover:text-[#165DFF] transition-all">
              查看演示
            </button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#165DFF]">30万+</div>
              <div className="text-slate-600">活跃用户</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#722ED1]">500万+</div>
              <div className="text-slate-600">视频生成</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#00B42A]">99%</div>
              <div className="text-slate-600">满意度</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
