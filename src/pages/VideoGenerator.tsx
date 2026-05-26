import { useState } from 'react';
import { FileText, Image as ImageIcon, Video, Sparkles, Upload, Download } from 'lucide-react';
import { useStore } from '../store';

export function VideoGenerator() {
  const [activeTab, setActiveTab] = useState<'text' | 'image' | 'reference'>('text');
  const [prompt, setPrompt] = useState('');
  const { isGenerating, setGenerating, addVideo } = useStore();

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => {
      addVideo({
        id: Date.now().toString(),
        title: `生成的视频 ${new Date().toLocaleTimeString()}`,
        description: prompt,
        status: 'completed',
        toolType: activeTab,
        createdAt: new Date(),
      });
      setGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            AI 视频生成
          </h1>
          <p className="text-lg text-slate-600">
            用 AI 快速生成高质量的带货视频
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
            <div className="flex border-b border-slate-200">
              <button
                onClick={() => setActiveTab('text')}
                className={`flex-1 py-4 px-6 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
                  activeTab === 'text'
                    ? 'bg-white text-[#165DFF] border-b-2 border-[#165DFF]'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <FileText className="w-4 h-4" />
                文本生成
              </button>
              <button
                onClick={() => setActiveTab('image')}
                className={`flex-1 py-4 px-6 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
                  activeTab === 'image'
                    ? 'bg-white text-[#165DFF] border-b-2 border-[#165DFF]'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <ImageIcon className="w-4 h-4" />
                图片转视频
              </button>
              <button
                onClick={() => setActiveTab('reference')}
                className={`flex-1 py-4 px-6 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
                  activeTab === 'reference'
                    ? 'bg-white text-[#165DFF] border-b-2 border-[#165DFF]'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Video className="w-4 h-4" />
                爆款复刻
              </button>
            </div>

            <div className="p-6">
              {activeTab === 'text' && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      描述视频内容
                    </label>
                    <textarea
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="描述你想要生成的视频内容，包括场景、产品、动作等..."
                      className="w-full h-48 px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#165DFF] focus:border-transparent resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        视频时长
                      </label>
                      <select className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#165DFF]">
                        <option>15 秒</option>
                        <option>20 秒</option>
                        <option>25 秒</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        视频比例
                      </label>
                      <select className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#165DFF]">
                        <option>9:16 (竖屏)</option>
                        <option>16:9 (横屏)</option>
                        <option>1:1 (正方形)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'image' && (
                <div className="space-y-6">
                  <div className="border-2 border-dashed border-slate-300 rounded-xl p-12 text-center hover:border-[#165DFF] transition-colors cursor-pointer">
                    <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                    <p className="text-slate-600 mb-2">点击或拖拽上传产品图片</p>
                    <p className="text-sm text-slate-400">支持 JPG, PNG, WebP</p>
                  </div>
                </div>
              )}

              {activeTab === 'reference' && (
                <div className="space-y-6">
                  <div className="border-2 border-dashed border-slate-300 rounded-xl p-12 text-center hover:border-[#165DFF] transition-colors cursor-pointer">
                    <Video className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                    <p className="text-slate-600 mb-2">上传参考视频</p>
                    <p className="text-sm text-slate-400">支持 MP4, MOV, WebM</p>
                  </div>
                </div>
              )}

              <button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full mt-6 flex items-center justify-center gap-2 px-6 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#165DFF] to-[#722ED1] rounded-xl hover:shadow-xl hover:shadow-[#165DFF]/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Sparkles className="w-5 h-5" />
                {isGenerating ? '生成中...' : '开始生成'}
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                预览区域
              </h3>
              <div className="aspect-[9/16] bg-slate-100 rounded-xl flex items-center justify-center">
                {isGenerating ? (
                  <div className="text-center">
                    <div className="w-12 h-12 border-4 border-[#165DFF] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-slate-600">正在生成视频...</p>
                  </div>
                ) : (
                  <p className="text-slate-400">生成的视频将在这里显示</p>
                )}
              </div>
              {!isGenerating && (
                <button className="w-full mt-4 flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-700 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors">
                  <Download className="w-4 h-4" />
                  下载视频
                </button>
              )}
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                提示词建议
              </h3>
              <div className="space-y-2">
                {[
                  '产品特写展示，360度旋转',
                  '使用场景演示，真人出镜',
                  '前后对比效果展示',
                  '快速剪辑，节奏明快',
                ].map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => setPrompt(suggestion)}
                    className="w-full text-left px-4 py-2 text-sm text-slate-600 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
