import { Link2, Plus, Video, Clock, Send, Calendar } from 'lucide-react';

export function Publishing() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            发布工作台
          </h1>
          <p className="text-lg text-slate-600">
            一站式发布 TikTok 带货视频
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-slate-900">
                  TikTok 账号
                </h2>
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#165DFF] bg-[#165DFF]/10 rounded-lg hover:bg-[#165DFF]/20 transition-colors">
                  <Plus className="w-4 h-4" />
                  添加账号
                </button>
              </div>

              <div className="space-y-4">
                {[
                  { name: '@my_shop', status: '已连接' },
                  { name: '@my_store_us', status: '已连接' },
                ].map((account, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-slate-50 rounded-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#165DFF] to-[#722ED1] rounded-full flex items-center justify-center text-white font-semibold">
                        {account.name.charAt(1)}
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">{account.name}</p>
                        <p className="text-sm text-green-600">{account.status}</p>
                      </div>
                    </div>
                    <button className="text-slate-400 hover:text-slate-600">
                      <Link2 className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-6">
                发布视频
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    选择账号
                  </label>
                  <select className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#165DFF]">
                    <option>@my_shop</option>
                    <option>@my_store_us</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    上传视频
                  </label>
                  <div className="border-2 border-dashed border-slate-300 rounded-xl p-12 text-center hover:border-[#165DFF] transition-colors cursor-pointer">
                    <Video className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                    <p className="text-slate-600 mb-2">点击或拖拽上传视频</p>
                    <p className="text-sm text-slate-400">支持 MP4, MOV</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    视频标题
                  </label>
                  <input
                    type="text"
                    placeholder="输入吸引人的标题..."
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#165DFF]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    发布时间
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button className="flex items-center justify-center gap-2 px-4 py-3 border border-slate-300 rounded-xl hover:border-[#165DFF] hover:text-[#165DFF] transition-colors">
                      <Send className="w-4 h-4" />
                      立即发布
                    </button>
                    <button className="flex items-center justify-center gap-2 px-4 py-3 border border-slate-300 rounded-xl hover:border-[#165DFF] hover:text-[#165DFF] transition-colors">
                      <Calendar className="w-4 h-4" />
                      定时发布
                    </button>
                  </div>
                </div>

                <button className="w-full flex items-center justify-center gap-2 px-6 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#165DFF] to-[#722ED1] rounded-xl hover:shadow-xl hover:shadow-[#165DFF]/25 transition-all">
                  <Send className="w-5 h-5" />
                  发布到 TikTok
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-6">
                发布记录
              </h2>
              <div className="space-y-4">
                {[
                  { title: '产品展示视频', time: '2小时前', status: '已发布' },
                  { title: '使用教程视频', time: '昨天', status: '已发布' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-slate-50 rounded-xl"
                  >
                    <div>
                      <p className="font-medium text-slate-900">{item.title}</p>
                      <p className="text-sm text-slate-500">{item.time}</p>
                    </div>
                    <span className="px-3 py-1 text-sm font-medium text-green-600 bg-green-100 rounded-full">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
