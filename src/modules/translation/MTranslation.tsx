'use client'

import React, { useState } from 'react';

import { SoundFilled } from '@ant-design/icons';
import { Button, Input } from 'antd';

import 'tailwindcss/tailwind.css';


const { TextArea } = Input;

export const TranslationPage: React.FC = () => {
  const [sourceText, setSourceText] = useState('');
  const [targetText, setTargetText] = useState('');

  const [timeoutId, setTimeoutId] = useState<any>(null);

  const handleTranslate = (text: string) => {
    setSourceText(text);
    if (timeoutId) clearTimeout(timeoutId);
    setTimeoutId(setTimeout(async () => {
      try {
        setTargetText(text);
      } catch (error) {
        console.error('Failed to translate text:', error);
      }
    }, 1000));
  };

   const handlePlayAudio = async (targetText: string) => {
    
    const audio = new Audio(`https://dict.evelingo.vn/api/v1/words/pronunciation/?word=${targetText}`);

    audio.play();
   }

return (
    <div className='flex justify-center m-12'>
        <TextArea
            value={sourceText}
            onChange={(e) => handleTranslate(e.target.value)}
            placeholder="Type text to translate..."
            className="w-1/3 h-60 m-5"
        />
      <div className="relative w-1/3 h-60 m-5">
      <TextArea
        value={targetText}
        readOnly
        placeholder="Translation will appear here..."
        style={{ width: '100%', height: '100%'}}
      />
    <Button 
        onClick={() => handlePlayAudio(targetText)} 
        className="absolute bottom-2 left-2 text-center no-underline text-lg cursor-pointer"
    >
      <SoundFilled className='text-40px mx-auto' />
    </Button>
    </div>
    </div>
);
};