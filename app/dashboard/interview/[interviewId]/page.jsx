"use client"
import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import { Lightbulb, WebcamIcon } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam';


function Interview({ params }) {

    const [interviewData, setInterviewData] = useState();
    const [webCamEnabled, setWebCamEnabled] = useState(false);

    useEffect(() => {
       console.log(params.interviewId);
       GetInterviewDetails();
       
    }, []); // Dependency array ensures this runs when interviewId changes

    /**
     * Used to get interview details by mockId
     */
    const GetInterviewDetails = async () => {

            const result = await db.select().from(MockInterview).where(eq(MockInterview.mockId, params.interviewId));
            setInterviewData(result[0]);
    
            console.log(result);
        
    };
  return (
    <div className='my-10 '>
        <h2 className='font-bold text-2xl'>Let's get started</h2>
        <div className='grid grid-cols-1 md:grid-cols-2  gap-10'>

            <div className='flex flex-col  gap-5'>
            {interviewData ? 
                <div className='text-lg flex flex-col mt-5 gap-5 p-5 bg-secondary rounded-lg border'>
                    <p><strong>Job Position:</strong> {interviewData.jobPosition}</p>
                    <p><strong>Job Description:</strong> {interviewData.jobDesc}</p>
                    <p><strong>Job Experience:</strong> {interviewData.jobExperience}</p>
                </div>
            : (
                <p className='font-sm mt-5 text-gray-600'><strong>Loading details...</strong></p>
            )}
            <div className='p-2 border text-sm rounded-lg border-yellow-300 bg-yellow-100' >
                <h2 className='flex gap-2 items-center text-yellow-600'><Lightbulb /><strong className='text-sm'>Information</strong></h2>
                <h2 className='mt-2.5  text-yellow-600'>{process.env.NEXT_PUBLIC_INFORMATION}</h2>
            </div>
        </div>

        <div className='flex flex-col items-center'> 
            {webCamEnabled? <Webcam
                onUserMedia={() => setWebCamEnabled(true)}
                onUserMediaError={() => setWebCamEnabled(false)}
                mirrored={true  }
                style={{
                    height:300,
                    width:300
                }} />
            :
            <>
            <WebcamIcon className='h-72 my-5 w-full p-20 bg-secondary rounded-lg border'/>
            <Button className="w-full bg-transparent text-black hover:text-white transition-all border-solid border-2" onClick={() => setWebCamEnabled(true)} >
                Allow permission for Cam and Mic
            </Button>
            </>
            }
            
        </div>  
       
        
        </div>
        <div className="mt-5 flex justify-end items-end">
            <Link href={'/dashboard/interview/'+params.interviewId+'/start'} >
                <Button >Start Interview</Button>
                </Link>
            
            </div>
    </div>
  )
}

export default Interview
