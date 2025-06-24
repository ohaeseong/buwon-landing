import React from 'react';
import { Shield, Wrench, Clock, ThumbsUp } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: '품질 보증',
      description: '엄격한 품질 관리 시스템과 고급 원자재 사용으로 최고 품질을 보장합니다.',
      details: ['ISO 9001 인증', '3년 품질보증', '전수검사 시스템']
    },
    {
      icon: Wrench,
      title: '맞춤 제작',
      description: '고객의 특별한 요구사항을 반영한 완전 맞춤형 디자인과 제작 서비스를 제공합니다.',
      details: ['3D 설계 서비스', '현장 측정', '무료 컨설팅']
    },
    {
      icon: Clock,
      title: '신속 납기',
      description: '효율적인 생산 시스템으로 빠른 제작과 배송, 설치 서비스를 제공합니다.',
      details: ['평균 2주 제작', '전국 배송', '전문 설치팀']
    },
    {
      icon: ThumbsUp,
      title: 'A/S 지원',
      description: '제품 설치 후에도 지속적인 관리와 유지보수 서비스를 제공합니다.',
      details: ['24시간 상담', '정기 점검', '부품 공급']
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container-max-width section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            부원 진열장만의 특별함
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            30년간 축적된 경험과 전문성을 바탕으로 고객에게 최고의 가치를 제공합니다.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                <feature.icon className="w-10 h-10 text-primary-600 group-hover:text-white transition-colors duration-300" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Details */}
              <div className="space-y-2">
                {feature.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center justify-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                    <span className="text-sm text-gray-700">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            제작 프로세스
          </h3>
          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: '01', title: '상담', desc: '요구사항 파악' },
              { step: '02', title: '설계', desc: '3D 디자인 제작' },
              { step: '03', title: '견적', desc: '정확한 비용 산출' },
              { step: '04', title: '제작', desc: '정밀 제작 공정' },
              { step: '05', title: '설치', desc: '전문팀 설치' }
            ].map((process, index) => (
              <div key={index} className="text-center relative">
                {index < 4 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gray-200 z-0"></div>
                )}
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-4">
                    {process.step}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{process.title}</h4>
                  <p className="text-sm text-gray-600">{process.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
