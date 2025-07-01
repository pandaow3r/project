import React from 'react';
import { Message } from '../types';

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.sender === 'user';
  
  return (
    <div className={`flex mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
        isUser 
          ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg' 
          : 'bg-white bg-opacity-20 backdrop-blur-sm text-white border border-white border-opacity-20 shadow-lg'
      } transform transition-all duration-300 hover:scale-105`}>
        {message.isTyping ? (
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-white bg-opacity-60 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-white bg-opacity-60 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-2 h-2 bg-white bg-opacity-60 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
        ) : (
          <div>
            <p className="text-sm whitespace-pre-wrap">{message.text}</p>
            <p className="text-xs mt-1 opacity-70">
              {message.timestamp.toLocaleTimeString('tr-TR', { 
                hour: '2-digit', 
                minute: '2-digit' 
              })}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;