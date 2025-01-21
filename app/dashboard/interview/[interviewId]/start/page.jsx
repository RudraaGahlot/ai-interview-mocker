"use client"
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { use, useEffect, useState } from 'react'
import QuestionSection from './_components/QuestionSection';
import RecordAnswerSection from './_components/RecordAnswerSection';
import { Button } from '@/components/ui/button';

function StartInterview({params}){
    const unwrappedParams = use(params);

    const [interviewData, setInterviewData] = useState();
    const [mockInterviewQuestion, setMockInterviewQuestion] = useState();
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
    useEffect(() => {
        GetInterviewDetails();

    },[]);
    const GetInterviewDetails = async () => {
    
                const result = await db.select().from(MockInterview).where(eq(MockInterview.mockId, unwrappedParams.interviewId));
                setInterviewData(result[0]);
        
               const jsonMockResp = JSON.parse(result[0].jsonMockResp)
               setMockInterviewQuestion(jsonMockResp);
               setInterviewData(result[0]);
            
        };

  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            {/* Questions */}
            <QuestionSection 
                mockInterviewQuestion = {mockInterviewQuestion}
                activeQuestionIndex = {activeQuestionIndex}
            />

            {/* Video / Audio Recording */}
            <RecordAnswerSection 
                
            />
        </div>

        <div>
            <Button> Prev</Button>
            <Button>Next</Button>
            <Button>End</Button>
        </div>
    </div>
  )
}

export default StartInterview