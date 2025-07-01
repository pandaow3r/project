import React from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';

const ChatHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between p-6 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl border border-white border-opacity-20 mb-6">
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl shadow-lg">
          <MessageCircle className="text-white" size={24} />
        </div>
        <div>
          <h1 className="text-xl font-bold text-white">Birtane</h1>
          <p className="text-sm text-white text-opacity-70">Akıllı Sohbet Asistanı</p>
        </div>
      </div>
      <div className="flex items-center space-x-2 text-white text-opacity-70">
        <Sparkles size={20} className="animate-pulse" />
        <span className="text-sm">Çevrimiçi</span>
      </div>
    </div>
  );
};

export default ChatHeader;