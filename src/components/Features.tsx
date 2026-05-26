import { Sparkles, Copy, Send, Clock, Shield, Image } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: '无需提示词专家',
    description: 'AI 自动优化提示词，即使不懂提示词工程也能生成高质量视频，降低使用门槛',
    color: 'from-[#165DFF] to-[#6366F1]',
  },
  {
    icon: Shield,
    title: '无水印下载',
    description: '所有生成的视频均为高清无水印，可直接用于 TikTok 发布和商业用途，无需额外付费',
    color: 'from-[#00B42A] to-[#10B981]',
  },
  {
    icon: Copy,
    title: '一键复刻爆款',
    description: '上传爆款视频，AI 自动提取创意逻辑并复刻。快速跟进热门，抢占流量先机',
    color: 'from-[#722ED1] to-[#A855F7]',
  },
  {
    icon: Send,
    title: 'TikTok 官方 API 发布',
    description: '通过官方 API 直接发布到 TikTok，无需手机操作，生成即可发布',
    color: 'from-[#F59E0B] to-[#F97316]',
  },
  {
    icon: Clock,
    title: '最长 25 秒',
    description: '支持生成最长 25 秒视频，满足 TikTok 带货视频的标准时长要求',
    color: 'from-[#EF4444] to-[#F87171]',
  },
  {
    icon: Image,
    title: '产品图转视频',
    description: '上传产品图片，AI 生成动态展示视频，快速制作商品素材',
    color: 'from-[#3B82F6] to-[#60A5FA]',
  },
];

export function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            为 TikTok 电商打造的专业工具
          </h2>
          <p className="text-lg text-slate-600">
            从生成到发布，一站式解决跨境电商视频营销需求
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
