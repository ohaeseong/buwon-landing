import { ArrowRight } from "lucide-react";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-white pt-20">
      <div className="container-max-width section-padding py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              최고 품질의
              <span className="text-primary-600 block">진열장 전문</span>
              제조업체
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              부원 진열장은 30년의 경험과 노하우로 고품질의 진열장, 아트 사인,
              킹콩랙을 제조하여 고객의 비즈니스 성공을 함께합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#products"
                className="btn-primary inline-flex items-center justify-center"
              >
                제품 보기
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="#contact"
                className="btn-secondary inline-flex items-center justify-center"
              >
                견적 문의
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold">30+</div>
                  <div className="text-sm opacity-90">년 경험</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold">1000+</div>
                  <div className="text-sm opacity-90">완성 프로젝트</div>
                </div>
              </div>
              <div className="bg-white/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">핵심 제품군</h3>
                <ul className="space-y-1 text-sm">
                  <li>• 볼트/무볼트 앵글</li>
                  <li>• 경량랙/중량랙</li>
                  <li>• 곤도라/하이퍼</li>
                  <li>• 파펫트랙/킹콩랙</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
