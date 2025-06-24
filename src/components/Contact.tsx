import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제 구현에서는 여기에 폼 제출 로직을 추가
    alert("문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.");
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "전화 문의",
      content: "1644-7847",
      subtitle: "평일 9:00 - 18:00",
    },
    {
      icon: Mail,
      title: "이메일",
      content: "buwon7338@naver.com",
      subtitle: "24시간 접수 가능",
    },
    {
      icon: MapPin,
      title: "본사 위치",
      content: "공장 물류센터 대구광역시 달서구 조암로10길 31(월성동)",
      subtitle: "본사 전시장 대구광역시 남구 성당로 120",
    },
    {
      icon: Clock,
      title: "운영시간",
      content: "평일 09:00 - 18:00",
      subtitle: "토/일/공휴일 휴무",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container-max-width section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">문의하기</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            진열장과 디스플레이 솔루션에 대한 문의사항이 있으시면 언제든지
            연락주세요. 전문 상담사가 친절하게 도와드리겠습니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">견적 문의</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    이름 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="홍길동"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    연락처 *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="010-1234-5678"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    이메일 *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    회사명
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="회사명을 입력해주세요"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  문의내용 *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="진열장 종류, 크기, 수량 등 자세한 요구사항을 알려주세요."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center"
              >
                <Send className="mr-2" size={20} />
                문의 보내기
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                연락처 정보
              </h3>
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h4>
                      <p className="text-primary-600 font-medium">
                        {info.content}
                      </p>
                      <p className="text-sm text-gray-600">{info.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-primary-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">빠른 상담 원하세요?</h3>
              <p className="mb-6 opacity-90">
                전화로 직접 상담받으시면 더욱 빠르고 정확한 견적을 받으실 수
                있습니다.
              </p>
              <a
                href="tel:1644-7847"
                className="inline-flex items-center bg-white text-primary-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Phone className="mr-2" size={20} />
                지금 전화하기
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
