import React from "react";

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      {/* 顶部导航 */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="h-8" />
            <span className="text-lg font-bold">亚飞电子商务</span>
          </div>
          <nav className="space-x-6 text-sm text-gray-700">
            <a href="#">首页</a>
            <a href="#">关于我们</a>
            <a href="#">新闻中心</a>
            <a href="#">企业文化</a>
            <a href="#">联系我们</a>
          </nav>
        </div>
      </header>

      {/* Banner */}
      <section>
        <img src="/banner.jpg" alt="Banner" className="w-full h-[400px] object-cover" />
      </section>

      {/* 关于我们 */}
      <section className="bg-gray-50 px-6 py-12 text-center">
        <h2 className="text-blue-600 text-xl font-semibold mb-4">关于亚飞</h2>
        <p className="max-w-4xl mx-auto text-gray-700 text-sm leading-7">
          深圳市亚飞电子商务有限公司成立于2008年，致力于跨境电商平台的运营……（此处可替换为你自己的介绍）
        </p>
        <a href="#" className="block mt-4 text-blue-500 hover:underline">查看更多</a>
      </section>

      {/* 新闻中心 */}
      <section className="bg-white px-6 py-12">
        <h2 className="text-yellow-500 text-xl font-semibold mb-6 text-center">新闻中心</h2>
        <div className="max-w-4xl mx-auto grid gap-4 text-sm text-gray-700">
          <div className="flex justify-between border-b pb-2">
            <span>亚飞公司乔迁新址</span>
            <span className="text-gray-500">2025.05.09</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span>文化之星 | 山水书韵，文化南翔</span>
            <span className="text-gray-500">2025.05.09</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span>百花百果，四季同行</span>
            <span className="text-gray-500">2025.05.09</span>
          </div>
        </div>
        <a href="#" className="block text-center mt-4 text-blue-500 hover:underline">查看更多</a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 px-6 py-8 text-sm text-gray-600">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold mb-2">公司信息</h3>
            <p>深圳市亚飞电子商务有限公司</p>
            <p>统一社会信用代码：91440300551818110Q</p>
            <p>地址：深圳市南山区高新南一道18号创维大厦</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">联系我们</h3>
            <p>电话：0755-84853566</p>
            <p>邮箱：ops@yafex.net</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/qrcode.png" alt="二维码" className="h-24 w-24" />
            <p className="mt-2 text-xs text-gray-500">关注我们</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
