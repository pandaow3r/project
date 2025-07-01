import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, disabled = false }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-3 p-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl border border-white border-opacity-20">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Mesajınızı yazın... (hava durumu sorun!)"
        disabled={disabled}
        className="flex-1 bg-transparent text-white placeholder-white placeholder-opacity-70 outline-none text-sm"
      />
      <button
        type="submit"
        disabled={!message.trim() || disabled}
        className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl hover:from-purple-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 shadow-lg"
      >
        <Send size={18} />
      </button>
    </form>
  );
};

export default ChatInput;