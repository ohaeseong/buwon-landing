import { Award, Building, Calendar, Globe, Truck, Users } from "lucide-react";
import React from "react";

const History: React.FC = () => {
  const milestones = [
    {
      year: "2002",
      title: "부원 진열 집기 백화점 설립",
      description:
        "소규모 진열장 유통업체로 시작하여 품질 중심의 경영 철학을 바탕으로 첫걸음을 내딛었습니다.",
      icon: Building,
      color: "bg-primary-500",
    },
    {
      year: "2016.01",
      title: "(주)부원진열장 설립",
      description:
        "늘어나는 수요에 발맞춰 생산 시설을 확장하고 본격적인 대량 생산 체제를 구축했습니다.",
      icon: Building,
      color: "bg-primary-600",
    },
    {
      year: "2019.01",
      title: "메인비즈 인증",
      description:
        "국제 품질 관리 시스템 인증을 획득하여 체계적인 품질 관리 시스템을 확립했습니다.",
      icon: Award,
      color: "bg-primary-700",
    },
    {
      year: "2020.12",
      title: "나이스 우수기술기업 인증",
      description:
        "혁신적인 킹콩랙 시리즈를 출시하여 프리미엄 랙 시장에서 독보적인 위치를 확보했습니다.",
      icon: Award,
      color: "bg-primary-600",
    },
    {
      year: "2021.07",
      title: "PADRA상표등록",
      description:
        "전국 주요 도시에 대리점과 서비스센터를 구축하여 고객 서비스 네트워크를 완성했습니다.",
      icon: Truck,
      color: "bg-primary-700",
    },
    {
      year: "2023.11",
      title: "신상품 킹콩랙 출시",
      description:
        "다양한 업종의 1,000여 고객사와 함께하며 진열장 전문기업으로서의 입지를 확고히 했습니다.",
      icon: Users,
      color: "bg-primary-600",
    },
    {
      year: "2025.02",
      title: "볼트앵글 리뉴얼 출시",
      description:
        "최신 자동화 설비와 스마트 팩토리 시스템을 도입하여 생산성과 품질을 한층 더 향상시켰습니다.",
      icon: Globe,
      color: "bg-primary-700",
    },
    {
      year: "2025.08",
      title: "3D시뮬레이터 개발",
      description: "3D 시뮬레이터 개발을 통한 유통 IT 서비스 화.",
      icon: Calendar,
      color: "bg-primary-800",
    },
  ];

  return (
    <section id="history" className="py-20 bg-white">
      <div className="container-max-width section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            부원 진열장 만에 20년 이상 역사
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            1994년 설립 이래로 끊임없는 혁신과 품질 개선을 통해 대한민국 진열장
            업계를 선도해온 부원 진열장의 발자취를 소개합니다.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200"></div>

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"
                  }`}
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 ${
                        milestone.color
                      } rounded-full mb-4 ${
                        index % 2 === 0 ? "ml-auto" : "mr-auto"
                      }`}
                    >
                      <milestone.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-primary-700 mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Empty space for the other side */}
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-20 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
          <h3 className="text-3xl font-bold text-center mb-8">23년간의 성과</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-primary-100">년 경험</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1,000+</div>
              <div className="text-primary-100">고객사</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-primary-100">완성 프로젝트</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-primary-100">고객 만족도</div>
            </div>
          </div>
        </div>

        {/* Vision */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            미래를 향한 비전
          </h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            부원 진열장은 지난 23년간 축적된 경험과 기술력을 바탕으로 더욱
            혁신적이고 지속가능한 진열 솔루션을 개발하여, 고객의 성공과 함께
            성장하는 파트너가 되겠습니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default History;
