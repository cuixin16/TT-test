import { Hero } from '../components/Hero';
import { Features } from '../components/Features';

export function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              由顶级 AI 模型驱动
            </h2>
            <p className="text-lg text-slate-600">
              集成多种先进的 AI 模型，为您提供最佳的视频生成体验
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {['OpenAI Sora', 'Google VEO', 'ByteDance', 'Kuaishou Kling', 'Wan', 'Nano Banana'].map((model, index) => (
              <div
                key={index}
                className="group flex items-center justify-center p-6 bg-white rounded-xl border border-slate-200 hover:border-[#165DFF] hover:shadow-lg transition-all duration-300"
              >
                <span className="font-semibold text-slate-700 group-hover:text-[#165DFF]">
                  {model}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            开始制作 TikTok 爆款带货视频
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            加入 30万+ TikTok 卖家，使用 AI 生成高质量带货视频
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#165DFF] to-[#722ED1] rounded-xl hover:shadow-2xl hover:shadow-[#165DFF]/25 transition-all transform hover:-translate-y-1">
            立即开始
          </button>
        </div>
      </section>
    </div>
  );
}
