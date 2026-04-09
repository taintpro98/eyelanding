import { i18n } from "./i18n";

export type LandingLocale = (typeof i18n.languages)[number];

export type LandingCopy = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    features: string;
    product: string;
    pricing: string;
    faq: string;
    docs: string;
    startFree: string;
    language: string;
    mainNavLabel: string;
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    startFree: string;
    viewDemo: string;
    trustLineMobile: string;
    trustLineDesktop: string;
  };
  features: {
    eyebrow: string;
    heading: string;
    subheading: string;
    items: Array<{ title: string; description: string }>;
  };
  product: {
    eyebrow: string;
    heading: string;
    subheading: string;
    stepLabel: (n: number) => string;
    dashboardLabel: string;
    steps: Array<{ title: string; description: string }>;
  };
  pricing: {
    eyebrow: string;
    heading: string;
    subheading: string;
    mostPopular: string;
    plans: Array<{
      name: string;
      description: string;
      price: string;
      period: string;
      features: string[];
      cta: string;
      highlighted: boolean;
    }>;
  };
  faq: {
    eyebrow: string;
    heading: string;
    subheading: string;
    items: Array<{ question: string; answer: string }>;
  };
  cta: {
    heading: string;
    description: string;
    button: string;
  };
  footer: {
    tagline: string;
    groups: {
      product: string;
      company: string;
      legal: string;
    };
    links: {
      features: string;
      product: string;
      pricing: string;
      docs: string;
      about: string;
      blog: string;
      careers: string;
      privacy: string;
      terms: string;
    };
    copyright: (year: number) => string;
  };
};

const en: LandingCopy = {
  meta: {
    title: "ALumiEye — AI-Powered Trading Intelligence",
    description:
      "Detect alpha. Track smart money. Trade with confidence. ALumiEye is an AI-powered trading intelligence platform for serious traders.",
  },
  nav: {
    features: "Features",
    product: "Product",
    pricing: "Pricing",
    faq: "FAQ",
    docs: "Docs",
    startFree: "Start Free",
    language: "Language",
    mainNavLabel: "Main navigation",
  },
  hero: {
    eyebrow: "Trading intelligence platform",
    titleLine1: "AI-Powered",
    titleLine2: "Trading Intelligence",
    description:
      "Detect alpha. Track smart money. Trade with confidence.",
    startFree: "Start Free",
    viewDemo: "View Demo",
    trustLineMobile: "No credit card · Real-time signals · Active traders",
    trustLineDesktop:
      "No credit card · Real-time signals · Built for active traders",
  },
  features: {
    eyebrow: "Capabilities",
    heading: "Everything you need to trade smarter",
    subheading:
      "Powerful tools designed for serious traders who demand an edge.",
    items: [
      {
        title: "Real-time Market Intelligence",
        description:
          "Stay ahead with live market data, order flow, and institutional activity across multiple asset classes.",
      },
      {
        title: "Smart Money Tracking",
        description:
          "Follow the flow of institutional capital and identify where the smart money is moving before the crowd.",
      },
      {
        title: "AI Signal Detection",
        description:
          "Machine learning models analyze patterns and generate actionable trading signals with quantified confidence.",
      },
      {
        title: "Portfolio Analytics",
        description:
          "Comprehensive portfolio insights, risk metrics, and performance attribution to optimize your strategy.",
      },
      {
        title: "Advanced Charting",
        description:
          "Professional-grade charts with custom indicators, drawing tools, and seamless multi-timeframe analysis.",
      },
      {
        title: "Risk Insights",
        description:
          "Real-time risk exposure, position sizing recommendations, and scenario analysis to protect your capital.",
      },
    ],
  },
  product: {
    eyebrow: "Pipeline",
    heading: "How ALumiEye works",
    subheading:
      "Our platform transforms raw market data into actionable intelligence through a proven pipeline.",
    stepLabel: (n) => `Step ${n}`,
    dashboardLabel: "ALumiEye Dashboard — Live",
    steps: [
      {
        title: "Market data ingestion",
        description:
          "Aggregate real-time data from exchanges, dark pools, and alternative sources.",
      },
      {
        title: "Pattern detection",
        description:
          "AI identifies recurring patterns and anomalies across historical and live data.",
      },
      {
        title: "AI signal filtering",
        description:
          "Machine learning filters noise and surfaces high-probability opportunities.",
      },
      {
        title: "Trading insights",
        description:
          "Actionable recommendations with risk-adjusted expected value and timing.",
      },
    ],
  },
  pricing: {
    eyebrow: "Pricing",
    heading: "Simple, transparent pricing",
    subheading:
      "Choose the plan that fits your trading style. Upgrade or downgrade anytime.",
    mostPopular: "Most popular",
    plans: [
      {
        name: "Starter",
        description: "For individual traders getting started",
        price: "Free",
        period: "forever",
        features: [
          "Basic AI signals",
          "5-asset watchlist",
          "Daily market brief",
          "Email support",
        ],
        cta: "Start Free",
        highlighted: false,
      },
      {
        name: "Pro",
        description: "For active traders who need more",
        price: "$99",
        period: "/month",
        features: [
          "Advanced AI signals",
          "Unlimited watchlist",
          "Portfolio analytics",
          "Real-time alerts",
          "Priority support",
        ],
        cta: "Start Pro Trial",
        highlighted: true,
      },
      {
        name: "Institutional",
        description: "For funds and professional teams",
        price: "Custom",
        period: "",
        features: [
          "API access",
          "Advanced analytics",
          "Custom integrations",
          "Dedicated account manager",
          "SLA guarantee",
        ],
        cta: "Contact Sales",
        highlighted: false,
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Frequently asked questions",
    subheading: "Everything you need to know about ALumiEye.",
    items: [
      {
        question: "What is ALumiEye?",
        answer:
          "ALumiEye is an AI-powered trading intelligence platform that helps traders detect alpha opportunities, track institutional money flow, and analyze markets with advanced machine learning. We combine real-time market data with proprietary AI models to surface high-probability trading signals.",
      },
      {
        question: "How does the AI generate signals?",
        answer:
          "Our AI models analyze multiple data dimensions including order flow, price action, volume profiles, and alternative data sources. We use ensemble machine learning techniques trained on historical market data to identify patterns that precede significant price movements. Each signal includes a confidence score and risk metrics.",
      },
      {
        question: "Which markets are supported?",
        answer:
          "ALumiEye currently supports US equities, major forex pairs, and popular cryptocurrencies. We're continuously expanding coverage based on user demand. Institutional plans can request custom asset coverage.",
      },
      {
        question: "Is there a free plan?",
        answer:
          "Yes! Our Starter plan is free forever and includes basic AI signals, a 5-asset watchlist, daily market briefs, and email support. It's a great way to explore the platform before upgrading to Pro for advanced features.",
      },
    ],
  },
  cta: {
    heading: "Start detecting alpha today",
    description:
      "Join thousands of traders who use ALumiEye to find opportunities before the market moves.",
    button: "Create account",
  },
  footer: {
    tagline: "AI-powered trading intelligence for serious traders.",
    groups: {
      product: "Product",
      company: "Company",
      legal: "Legal",
    },
    links: {
      features: "Features",
      product: "Product",
      pricing: "Pricing",
      docs: "Docs",
      about: "About",
      blog: "Blog",
      careers: "Careers",
      privacy: "Privacy",
      terms: "Terms",
    },
    copyright: (year) =>
      `© ${year} ALumiEye. All rights reserved.`,
  },
};

const vi: LandingCopy = {
  meta: {
    title: "ALumiEye — Thông minh giao dịch bằng AI",
    description:
      "Phát hiện alpha. Theo dõi dòng tiền thông minh. Giao dịch tự tin hơn. ALumiEye là nền tảng thông minh giao dịch dành cho trader nghiêm túc.",
  },
  nav: {
    features: "Tính năng",
    product: "Sản phẩm",
    pricing: "Bảng giá",
    faq: "Hỏi đáp",
    docs: "Tài liệu",
    startFree: "Bắt đầu miễn phí",
    language: "Ngôn ngữ",
    mainNavLabel: "Điều hướng chính",
  },
  hero: {
    eyebrow: "Nền tảng giao dịch thông minh",
    titleLine1: "Trí tuệ nhân tạo",
    titleLine2: "Dành cho giao dịch",
    description:
      "Phát hiện alpha. Theo dõi dòng tiền thông minh. Giao dịch tự tin hơn.",
    startFree: "Bắt đầu miễn phí",
    viewDemo: "Xem demo",
    trustLineMobile:
      "Không cần thẻ · Tín hiệu thời gian thực · Cho trader tích cực",
    trustLineDesktop:
      "Không cần thẻ · Tín hiệu thời gian thực · Dành cho trader chuyên nghiệp",
  },
  features: {
    eyebrow: "Khả năng",
    heading: "Mọi thứ bạn cần để giao dịch thông minh hơn",
    subheading:
      "Bộ công cụ mạnh mẽ dành cho trader nghiêm túc luôn tìm kiếm lợi thế.",
    items: [
      {
        title: "Thông tin thị trường thời gian thực",
        description:
          "Luôn đi trước với dữ liệu trực tiếp, dòng lệnh và hoạt động tổ chức trên nhiều loại tài sản.",
      },
      {
        title: "Theo dõi dòng tiền thông minh",
        description:
          "Theo dõi dòng vốn tổ chức và xác định nơi “smart money” di chuyển trước đám đông.",
      },
      {
        title: "Phát hiện tín hiệu AI",
        description:
          "Mô hình học máy phân tích mẫu hình và tạo tín hiệu giao dịch khả thi kèm độ tin cậy.",
      },
      {
        title: "Phân tích danh mục",
        description:
          "Thông tin danh mục toàn diện, chỉ số rủi ro và phân bổ hiệu suất để tối ưu chiến lược.",
      },
      {
        title: "Biểu đồ nâng cao",
        description:
          "Biểu đồ chuyên nghiệp với chỉ báo tùy chỉnh, công cụ vẽ và phân tích đa khung thời gian.",
      },
      {
        title: "Thông tin rủi ro",
        description:
          "Mức độ rủi ro thời gian thực, gợi ý khối lượng và phân tích kịch bản để bảo vệ vốn.",
      },
    ],
  },
  product: {
    eyebrow: "Quy trình",
    heading: "ALumiEye hoạt động thế nào",
    subheading:
      "Nền tảng biến dữ liệu thô thành thông tin hành động qua một quy trình đã được kiểm chứng.",
    stepLabel: (n) => `Bước ${n}`,
    dashboardLabel: "Bảng điều khiển ALumiEye — Trực tiếp",
    steps: [
      {
        title: "Thu thập dữ liệu thị trường",
        description:
          "Tổng hợp dữ liệu thời gian thực từ sàn, dark pool và nguồn thay thế.",
      },
      {
        title: "Phát hiện mẫu hình",
        description:
          "AI nhận diện mẫu hình lặp lại và bất thường trên dữ liệu lịch sử và trực tiếp.",
      },
      {
        title: "Lọc tín hiệu AI",
        description:
          "Học máy loại bỏ nhiễu và làm nổi bật cơ hội xác suất cao.",
      },
      {
        title: "Thông tin giao dịch",
        description:
          "Khuyến nghị hành động kèm giá trị kỳ vọng điều chỉnh rủi ro và thời điểm.",
      },
    ],
  },
  pricing: {
    eyebrow: "Bảng giá",
    heading: "Giá minh bạch, đơn giản",
    subheading:
      "Chọn gói phù hợp phong cách giao dịch. Nâng cấp hoặc hạ cấp bất cứ lúc nào.",
    mostPopular: "Phổ biến nhất",
    plans: [
      {
        name: "Starter",
        description: "Dành cho trader cá nhân mới bắt đầu",
        price: "Miễn phí",
        period: "mãi mãi",
        features: [
          "Tín hiệu AI cơ bản",
          "Danh sách theo dõi 5 mã",
          "Tóm tắt thị trường hằng ngày",
          "Hỗ trợ qua email",
        ],
        cta: "Bắt đầu miễn phí",
        highlighted: false,
      },
      {
        name: "Pro",
        description: "Dành cho trader tích cực cần thêm tính năng",
        price: "$99",
        period: "/tháng",
        features: [
          "Tín hiệu AI nâng cao",
          "Danh sách theo dõi không giới hạn",
          "Phân tích danh mục",
          "Cảnh báo thời gian thực",
          "Hỗ trợ ưu tiên",
        ],
        cta: "Dùng thử Pro",
        highlighted: true,
      },
      {
        name: "Institutional",
        description: "Dành cho quỹ và đội ngũ chuyên nghiệp",
        price: "Tùy chỉnh",
        period: "",
        features: [
          "Truy cập API",
          "Phân tích nâng cao",
          "Tích hợp tùy chỉnh",
          "Quản lý tài khoản riêng",
          "Cam kết SLA",
        ],
        cta: "Liên hệ bán hàng",
        highlighted: false,
      },
    ],
  },
  faq: {
    eyebrow: "Hỏi đáp",
    heading: "Câu hỏi thường gặp",
    subheading: "Mọi điều bạn cần biết về ALumiEye.",
    items: [
      {
        question: "ALumiEye là gì?",
        answer:
          "ALumiEye là nền tảng thông minh giao dịch dùng AI, giúp trader phát hiện cơ hội alpha, theo dõi dòng tiền tổ chức và phân tích thị trường với học máy nâng cao. Chúng tôi kết hợp dữ liệu thời gian thực với mô hình AI riêng để đưa ra tín hiệu giao dịch xác suất cao.",
      },
      {
        question: "AI tạo tín hiệu như thế nào?",
        answer:
          "Mô hình AI phân tích nhiều chiều dữ liệu như dòng lệnh, hành vi giá, hồ sơ khối lượng và nguồn dữ liệu thay thế. Chúng tôi dùng kỹ thuật ensemble học máy trên dữ liệu lịch sử để nhận diện mẫu hình đi trước biến động giá đáng kể. Mỗi tín hiệu kèm điểm tin cậy và chỉ số rủi ro.",
      },
      {
        question: "Hỗ trợ thị trường nào?",
        answer:
          "ALumiEye hiện hỗ trợ cổ phiếu Mỹ, các cặp forex chính và tiền mã hóa phổ biến. Chúng tôi mở rộng phạm vi theo nhu cầu người dùng. Gói Institutional có thể yêu cầu phủ tài sản tùy chỉnh.",
      },
      {
        question: "Có gói miễn phí không?",
        answer:
          "Có! Gói Starter miễn phí mãi mãi, gồm tín hiệu AI cơ bản, danh sách theo dõi 5 mã, bản tin thị trường hằng ngày và hỗ trợ email. Đây là cách tốt để làm quen trước khi nâng cấp Pro cho tính năng nâng cao.",
      },
    ],
  },
  cta: {
    heading: "Bắt đầu phát hiện alpha hôm nay",
    description:
      "Cùng hàng nghìn trader dùng ALumiEye để tìm cơ hội trước khi thị trường phản ứng.",
    button: "Tạo tài khoản",
  },
  footer: {
    tagline: "Thông minh giao dịch bằng AI dành cho trader nghiêm túc.",
    groups: {
      product: "Sản phẩm",
      company: "Công ty",
      legal: "Pháp lý",
    },
    links: {
      features: "Tính năng",
      product: "Sản phẩm",
      pricing: "Bảng giá",
      docs: "Tài liệu",
      about: "Giới thiệu",
      blog: "Blog",
      careers: "Tuyển dụng",
      privacy: "Bảo mật",
      terms: "Điều khoản",
    },
    copyright: (year) =>
      `© ${year} ALumiEye. Mọi quyền được bảo lưu.`,
  },
};

const byLang: Record<LandingLocale, LandingCopy> = {
  en,
  vi,
};

export function getLandingCopy(lang: string): LandingCopy {
  const key = (i18n.languages as readonly string[]).includes(lang)
    ? (lang as LandingLocale)
    : i18n.defaultLanguage;
  return byLang[key];
}
