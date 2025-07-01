import { WeatherData } from '../types';

// Simulated weather data for demo purposes
const weatherDatabase: Record<string, WeatherData> = {
  'istanbul': {
    location: 'İstanbul',
    temperature: 22,
    description: 'Parçalı bulutlu',
    humidity: 65,
    windSpeed: 12
  },
  'ankara': {
    location: 'Ankara',
    temperature: 18,
    description: 'Açık',
    humidity: 45,
    windSpeed: 8
  },
  'izmir': {
    location: 'İzmir',
    temperature: 25,
    description: 'Güneşli',
    humidity: 70,
    windSpeed: 15
  },
  'default': {
    location: 'Genel',
    temperature: 20,
    description: 'İyi hava',
    humidity: 55,
    windSpeed: 10
  }
};

export const getWeatherInfo = async (location?: string): Promise<WeatherData> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const key = location?.toLowerCase() || 'default';
  return weatherDatabase[key] || weatherDatabase['default'];
};

export const detectWeatherQuery = (message: string): boolean => {
  const weatherKeywords = [
    'hava', 'hava durumu', 'weather', 'sıcaklık', 'derece', 
    'yağmur', 'güneş', 'bulut', 'rüzgar', 'nem'
  ];
  
  return weatherKeywords.some(keyword => 
    message.toLowerCase().includes(keyword)
  );
};