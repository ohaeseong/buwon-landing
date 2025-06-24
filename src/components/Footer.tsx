import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max-width section-padding py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">부원 진열장</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              당사는 2002년 창사한 진열대/유통 기자재 전문 기업입니다. 새로운
              공간 창출과 상품개발을 위해 끊임없이 노력하는 저희 부원진열장은
              글로벌 경쟁 환경 속에서 살아 숨 쉬듯 변화하는 유통 흐름을 잘
              파악하여 고객의 소리에 귀 기울이며 제품의 품질을 높이고 끊임없는
              신제품 개발로 항상 최고의 서비스를 제공하고자 노력합니다.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone size={16} />
                <span>1644-7847</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail size={16} />
                <span>buwon7338@naver.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin size={16} />
                <span>본사 전시장 대구광역시 남구 성당로 120</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">주요 제품</h4>
            <ul className="space-y-2 text-gray-300">
              <li>볼트 앵글</li>
              <li>무볼트 앵글</li>
              <li>경량랙 / 중량랙</li>
              <li>곤도라</li>
              <li>하이퍼</li>
              <li>파펫트랙</li>
              <li>킹콩랙</li>
              <li>맞춤형 디스플레이</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">서비스</h4>
            <ul className="space-y-2 text-gray-300">
              <li>무료 상담 및 견적</li>
              <li>3D 설계 서비스</li>
              <li>현장 측정</li>
              <li>전문 설치</li>
              <li>A/S 지원</li>
              <li>유지보수</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm">
              © 2024 부원 진열장. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                개인정보처리방침
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                이용약관
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                문의하기
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
