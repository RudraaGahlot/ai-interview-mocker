import { Lightbulb, Volume2 } from 'lucide-react';
import React, { useEffect, useState } from 'react';

export default function QuestionSection({ mockInterviewQuestion }) {

    const textToSpeech= (text) =>{
      if('speechSynthesis' in window){
        const speech = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(speech)
      }
      else {
        alert('Sorry, your browser does not support text to speech')
      }
    }
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  // Ensure state updates happen via useEffect, not during render
  useEffect(() => {
    if (mockInterviewQuestion && mockInterviewQuestion.length > 0) {
      // Set a default active question if needed
      setActiveQuestionIndex(0);
    }
  }, [mockInterviewQuestion]);

  return (
    mockInterviewQuestion && (
      <div className="p-5 border rounded-lg my-10 ">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {mockInterviewQuestion.map((question, index) => (
            <h2
              key={index}
              className={`p-2 rounded-full text-xs md:text-sm text-center cursor-pointer ${
                activeQuestionIndex === index && 'bg-primary text-white'
              }`}
              onClick={() => setActiveQuestionIndex(index)} // Only update state via events
            >
              Question {index + 1}
            </h2>
          ))}
        </div>
        <h2 className='my-5 text-md md:text-lg'>{mockInterviewQuestion[activeQuestionIndex]?.question}</h2>
        <Volume2 className='cursor-pointer' onClick={()=>textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.question)}> </Volume2>

        <div className='border rounded-lg p-5 bg-blue-200 mt-28'>
          <h2 className='flex gap-2 items-center text-primary'>
            <Lightbulb />
            <strong> Note: </strong>
          </h2>
          <h2 className='text-sm  text-primary my-2'>{process.env.NEXT_PUBLIC_INFORMATION}</h2>
        </div>
      </div>
    )
  );
}
