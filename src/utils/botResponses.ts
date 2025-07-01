import { getWeatherInfo, detectWeatherQuery } from './weatherService';

const generalResponses = [
  'Merhaba! Size nasıl yardımcı olabilirim?',
  'Bu konuda size yardımcı olmaya çalışayım.',
  'Anladım, başka bir sorunuz var mı?',
  'İlginç bir soru! Bunun hakkında düşünmeme izin verin.',
  'Tabii ki! Size daha fazla bilgi verebilirim.',
  'Bu konuda elimden geldiğince yardımcı olmaya çalışacağım.',
  'Harika bir soru! Cevabını düşünüyorum.',
  'Size en iyi şekilde yardımcı olmak istiyorum.'
];

export const generateBotResponse = async (userMessage: string): Promise<string> => {
  const message = userMessage.toLowerCase();
  
  // Weather queries
  if (detectWeatherQuery(message)) {
    let location = '';
    
    // Extract location from message
    const cities = ['istanbul', 'ankara', 'izmir'];
    const foundCity = cities.find(city => message.includes(city));
    if (foundCity) {
      location = foundCity;
    }
    
    try {
      const weather = await getWeatherInfo(location);
      return `🌤️ ${weather.location} için hava durumu:
      
🌡️ Sıcaklık: ${weather.temperature}°C
☁️ Durum: ${weather.description}
💧 Nem: %${weather.humidity}
💨 Rüzgar: ${weather.windSpeed} km/h

Başka bir şehir için hava durumunu öğrenmek ister misiniz?`;
    } catch (error) {
      return 'Üzgünüm, hava durumu bilgisini şu anda alamıyorum. Lütfen daha sonra tekrar deneyin.';
    }
  }
  
  // Greeting responses
  if (message.includes('merhaba') || message.includes('selam') || message.includes('hello')) {
    return 'Merhaba! Ben Birtane, size yardımcı olmak için buradayım. Hava durumu dahil birçok konuda size yardımcı olabilirim. 🌟';
  }
  
  // About responses
  if (message.includes('kimsin') || message.includes('kim') || message.includes('nedir')) {
    return 'Ben Birtane! Akıllı bir sohbet botuyum. Size çeşitli konularda yardımcı olabilir, hava durumu bilgisi verebilir ve sorularınızı yanıtlayabilirim. 🤖✨';
  }
  
  // Thank you responses
  if (message.includes('teşekkür') || message.includes('sağol') || message.includes('thanks')) {
    return 'Rica ederim! Başka bir konuda yardımcı olabilirsem söyleyin. 😊';
  }
  
  // Default response
  return generalResponses[Math.floor(Math.random() * generalResponses.length)];
};