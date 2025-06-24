import {
  Box,
  Crown,
  Layers,
  Package,
  Plus,
  ShoppingCart,
  Truck,
  Zap,
} from "lucide-react";
import React from "react";

const Products: React.FC = () => {
  const mainProducts = [
    {
      icon: Box,
      title: "볼트 앵글",
      description:
        "견고한 볼트 결합 방식의 앵글 시스템으로, 높은 안정성과 내구성을 제공합니다.",
      features: [
        "견고한 볼트 결합",
        "높은 안정성",
        "내구성 우수",
        "다양한 규격",
      ],
      image: "bg-gradient-to-br from-primary-500 to-primary-600",
    },
    {
      icon: Package,
      title: "무볼트 앵글",
      description:
        "볼트 없이도 간편하게 조립 가능한 앵글 시스템으로, 빠른 설치가 장점입니다.",
      features: ["간편한 조립", "빠른 설치", "볼트 불필요", "경제적 선택"],
      image: "bg-gradient-to-br from-primary-600 to-primary-700",
    },
    {
      icon: Layers,
      title: "경량랙",
      description:
        "가벼우면서도 충분한 강도를 제공하는 경량형 랙으로, 일반적인 상품 진열에 최적화되어 있습니다.",
      features: ["경량 설계", "충분한 강도", "경제적 가격", "다목적 활용"],
      image: "bg-gradient-to-br from-gray-500 to-gray-600",
    },
    {
      icon: Layers,
      title: "중량랙",
      description:
        "무거운 상품도 안전하게 보관할 수 있는 고강도 중량형 랙 시스템입니다.",
      features: ["고강도 설계", "대용량 적재", "안전성 보장", "산업용 특화"],
      image: "bg-gradient-to-br from-slate-600 to-slate-700",
    },
    {
      icon: ShoppingCart,
      title: "곤도라",
      description:
        "매장 진열에 특화된 곤도라 시스템으로, 상품의 매력을 극대화하는 디스플레이를 제공합니다.",
      features: ["매장 특화", "상품 매력 극대화", "고객 접근성", "브랜딩 효과"],
      image: "bg-gradient-to-br from-blue-500 to-blue-600",
    },
    {
      icon: Zap,
      title: "하이퍼",
      description:
        "대형 매장과 창고를 위한 하이퍼 랙 시스템으로, 대용량 저장과 효율적인 관리를 지원합니다.",
      features: ["대용량 저장", "효율적 관리", "대형 매장 특화", "시스템 통합"],
      image: "bg-gradient-to-br from-indigo-500 to-indigo-600",
    },
    {
      icon: Truck,
      title: "파펫트랙",
      description:
        "물류와 창고 관리에 최적화된 파펫트랙으로, 효율적인 상품 이동과 보관을 실현합니다.",
      features: ["물류 최적화", "효율적 이동", "창고 관리", "작업 편의성"],
      image: "bg-gradient-to-br from-green-500 to-green-600",
    },
    {
      icon: Crown,
      title: "킹콩랙",
      description:
        "최고급 사양의 프리미엄 랙 시스템으로, 뛰어난 내구성과 세련된 디자인을 자랑합니다.",
      features: [
        "프리미엄 사양",
        "뛰어난 내구성",
        "세련된 디자인",
        "최고급 마감",
      ],
      image: "bg-gradient-to-br from-primary-700 to-primary-800",
    },
  ];

  const additionalProductSlots = [
    { title: "추가 제품 1", placeholder: true },
    { title: "추가 제품 2", placeholder: true },
    { title: "추가 제품 3", placeholder: true },
    { title: "추가 제품 4", placeholder: true },
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container-max-width section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">주요 제품군</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            다양한 비즈니스 환경에 최적화된 랙과 디스플레이 솔루션을 제공합니다.
          </p>
        </div>

        {/* Main Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {mainProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Product Image/Icon */}
              <div
                className={`${product.image} h-32 flex items-center justify-center`}
              >
                <product.icon className="w-12 h-12 text-white" />
              </div>

              {/* Product Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                      <span className="text-xs text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="mt-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-sm transition-colors"
                  >
                    자세히 보기 →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Products Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            기타 제품
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalProductSlots.map((slot, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 border-dashed border-gray-200"
              >
                {/* Placeholder Image */}
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-32 flex items-center justify-center">
                  <Plus className="w-12 h-12 text-gray-400" />
                </div>

                {/* Placeholder Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-400 mb-3">
                    {slot.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    새로운 제품을 추가하실 수 있습니다.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                      <span className="text-xs text-gray-400">특징 1</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                      <span className="text-xs text-gray-400">특징 2</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              특별한 요구사항이 있으신가요?
            </h3>
            <p className="text-gray-600 mb-6">
              표준 제품 외에도 고객의 특별한 니즈에 맞춘 완전 맞춤형 솔루션을
              제공합니다.
            </p>
            <a href="#contact" className="btn-primary">
              맞춤 견적 받기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
