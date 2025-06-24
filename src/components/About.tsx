import { Award, Clock, Target, Users } from "lucide-react";
import React from "react";

const About: React.FC = () => {
  const stats = [
    { icon: Award, value: "30+", label: "년간 축적된 전문 경험" },
    { icon: Users, value: "1000+", label: "만족한 고객사" },
    { icon: Clock, value: "24/7", label: "고객 지원 서비스" },
    { icon: Target, value: "99%", label: "고객 만족도" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-max-width section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            부원 진열장을 소개합니다
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            20년 이상 쌓아온 경험과 기술력으로 최고 품질의 진열장과 디스플레이
            솔루션을 제공하는 대한민국 대표 진열장 전문 유통업체입니다.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              품질과 신뢰의 23년 역사
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                (주)부원진열장은 2002년 설립 이래 진열장 및 물류보관설비
                분야에서 쌓아온 풍부한 경험과 기술력을 바탕으로, 다양한 산업
                환경에 최적화된 설비 솔루션을 제공해온 전문 기업입니다.
              </p>
              <p>
                현장의 특성과 고객의 요구에 맞춘 맞춤 설계는 물론, 변화하는 산업
                상황에 유연하게 대응할 수 있는 시스템을 갖추고 있습니다.
              </p>
              <p>
                앞으로도 최고의 품질과 신뢰를 바탕으로, 고객의 성공을 함께하는
                든든한 파트너가 되겠습니다.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">핵심 가치</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h5 className="font-semibold text-gray-900">품질 우선</h5>
                  <p className="text-gray-600 text-sm">
                    최고급 원자재와 정밀한 제작 공정으로 완벽한 품질 구현
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h5 className="font-semibold text-gray-900">고객 맞춤</h5>
                  <p className="text-gray-600 text-sm">
                    고객의 특별한 요구사항을 반영한 맞춤형 디자인 제공
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h5 className="font-semibold text-gray-900">신속 대응</h5>
                  <p className="text-gray-600 text-sm">
                    빠른 견적과 제작, 설치까지 원스톱 서비스
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
