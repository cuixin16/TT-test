import { Eraser, Type, User, Languages, Image, Wand2 } from 'lucide-react';
import { ToolCard } from '../components/ToolCard';

const tools = [
  {
    icon: Eraser,
    title: '视频去水印',
    description: 'AI 智能识别并去除视频中的水印',
    color: 'from-[#165DFF] to-[#6366F1]',
    to: '/tools/watermark',
  },
  {
    icon: Type,
    title: '视频去字幕',
    description: '自动识别并移除视频中的字幕',
    color: 'from-[#00B42A] to-[#10B981]',
    to: '/tools/subtitle',
  },
  {
    icon: User,
    title: '视频角色替换',
    description: '替换视频中的人物角色',
    color: 'from-[#722ED1] to-[#A855F7]',
    to: '/tools/character',
  },
  {
    icon: Languages,
    title: '图片翻译',
    description: '翻译图片中的文字内容',
    color: 'from-[#F59E0B] to-[#F97316]',
    to: '/tools/translate',
  },
  {
    icon: Wand2,
    title: 'AI 图片生成',
    description: '用 AI 生成高质量产品图片',
    color: 'from-[#EF4444] to-[#F87171]',
    to: '/tools/image-gen',
  },
  {
    icon: Type,
    title: '视频转提示词',
    description: '从视频提取创意提示词',
    color: 'from-[#3B82F6] to-[#60A5FA]',
    to: '/tools/prompt',
  },
];

export function ToolsCenter() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            工具中心
          </h1>
          <p className="text-lg text-slate-600">
            丰富的视频处理工具，满足跨境电商各种需求
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <ToolCard
              key={index}
              icon={tool.icon}
              title={tool.title}
              description={tool.description}
              color={tool.color}
              to={tool.to}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
