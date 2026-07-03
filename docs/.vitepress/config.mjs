import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '盛世数盟帮助中心',
  description: '盛世数盟商城操作指南',
  lang: 'zh-CN',
  base: '/',
  themeConfig: {
    logo: '/assets/image-001.png',
    siteTitle: '盛世数盟帮助中心',
    nav: [{"text": "首页", "link": "/"}, {"text": "完整指南", "link": "/guide"}],
    sidebar: [{"text": "开始", "items": [{"text": "首页", "link": "/"}, {"text": "完整操作指南", "link": "/guide"}]}, {"text": "教程目录", "items": [{"text": "MTC钱包创建&币安链同步", "link": "/wallet-mtc"}, {"text": "如何购买MAC节点", "link": "/buy-mac-node"}, {"text": "MAC会员账号注册", "link": "/member-register"}, {"text": "MAC会员加盟购买", "link": "/member-join"}, {"text": "启动NFR收益操作教学", "link": "/nfr-income"}, {"text": "启动SPV加成算力操作", "link": "/spv-power"}, {"text": "跨链购买元链燃料费操作", "link": "/cross-chain-gas"}, {"text": "MAC兑换META及商城M积分充值操作", "link": "/meta-mall-points"}, {"text": "如何在TP钱包中添加合约地址（MAC、META、SPV）", "link": "/tp-contract"}]}],
    outline: { label: '本页目录', level: [2, 3] },
    docFooter: { prev: '上一篇', next: '下一篇' },
    search: { provider: 'local' },
    lastUpdated: { text: '最后更新' }
  },
  markdown: {
    image: { lazyLoading: true }
  }
})
