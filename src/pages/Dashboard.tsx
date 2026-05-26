import { Video, Zap, TrendingUp, Clock } from 'lucide-react';
import { useStore } from '../store';

export function Dashboard() {
  const { videos } = useStore();

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            用户中心
          </h1>
          <p className="text-lg text-slate-600">
            管理您的视频和使用记录
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#165DFF] to-[#6366F1] rounded-xl flex items-center justify-center">
                <Video className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-3xl font-bold text-slate-900">{videos.length}</p>
            <p className="text-slate-600">生成视频数</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#00B42A] to-[#10B981] rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-3xl font-bold text-slate-900">12</p>
            <p className="text-slate-600">使用工具次数</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#722ED1] to-[#A855F7] rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-3xl font-bold text-slate-900">8</p>
            <p className="text-slate-600">发布视频数</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#F59E0B] to-[#F97316] rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-3xl font-bold text-slate-900">免费</p>
            <p className="text-slate-600">当前套餐</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-6">
            生成历史
          </h2>
          {videos.length === 0 ? (
            <div className="text-center py-12">
              <Video className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-500">还没有生成视频</p>
            </div>
          ) : (
            <div className="space-y-4">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="flex items-center justify-between p-4 bg-slate-50 rounded-xl"
                >
                  <div>
                    <p className="font-medium text-slate-900">{video.title}</p>
                    <p className="text-sm text-slate-500">
                      {video.createdAt.toLocaleString()}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 text-sm font-medium rounded-full ${
                      video.status === 'completed'
                        ? 'text-green-600 bg-green-100'
                        : 'text-yellow-600 bg-yellow-100'
                    }`}
                  >
                    {video.status === 'completed' ? '已完成' : '生成中'}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
