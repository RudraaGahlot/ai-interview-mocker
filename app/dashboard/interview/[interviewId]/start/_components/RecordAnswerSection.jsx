"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Webcam from 'react-webcam';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { Mic } from 'lucide-react';

// Dynamically import the useSpeechToText hook to ensure it only runs on the client side
const useSpeechToText = dynamic(() => import('react-hook-speech-to-text').then(mod => mod.useSpeechToText), { ssr: false });

function RecordAnswerSection({ results }) {
  const [userAnswer, setUserAnswer] = useState('');
  const {
    error,
    interimResult,
    isRecording,
    results: speechResults,
    startSpeechToText,
    stopSpeechToText
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && results) {
      results.map((result) => (
        setUserAnswer(prevAns => prevAns + result?.transcript)
      ));
    }
  }, [results]);
  return (
    <div className=' flex flex-col items-center justify-center'>
        <div className='flex flex-col mt-6 my-5 justify-center items-center rounded-lg p-5 bg-black'>
            <Image alt='WebCam' src={'/webcam.png'} width={200} height={200} className='absolute'/>
            <Webcam
              mirrored= "true"
              style={{
                height: 300,
                width: '100%',
                zIndex: 10,
                // visibility: 'hidden',
              }}
            />
           
        </div>
        <Button variant="outline" className="my-10"
          onClick={isRecording?stopSpeechToText:startSpeechToText}
        >
          {
            isRecording?
            <h2 className='text-red-600 animate-pulse flex gap-2 items-center'>
              <StopCircle />Stop Recording
            </h2>
            :
            <h2 className='text-primary flex gap-2 items-center'>
                <Mic />Record Answer
                </h2>   }
          </Button>
    </div>
  )
}

export default RecordAnswerSection

