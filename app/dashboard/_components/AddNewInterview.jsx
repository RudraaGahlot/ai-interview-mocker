"use client"
import React, { useState } from 'react'

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { Button } from '@/components/ui/button'



import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { chatSession } from '@/utils/GeminiAIModal'
import { LoaderCircle } from 'lucide-react'
import { MockInterview } from '@/utils/schema'
import { v4 as uuidv4 } from 'uuid'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { db } from '@/utils/db'
import { useRouter } from 'next/navigation'





function AddNewInterview() {
  const [ openDailog,setOpenDailog] = useState(false)
  const[jobPosition,setJobPosition]=useState();
  const[jobDesc,setJobDesc]=useState();
  const[jobExperience,setJobExperience]=useState();
  const [loading, setLoading] = useState(false);
  const[JsonResponse,setJsonResponse]=useState([]);
  const router = useRouter();
  const {user} = useUser();
  const onSubmit = async(e) => {
    setLoading(true)
    e.preventDefault()
    console.log(jobPosition,jobDesc,jobExperience);

    const InputPrompt = "Job Position:"+jobPosition+", Job Description:"+jobDesc+", Years of Experience:"+jobExperience+", Depends on Job Position, Job Description & Years of Experience give us "+process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT+" interview question along with answer in JSON format, Give us question and answer field on JSON"
    
    const result = await chatSession.sendMessage(InputPrompt);

    const MockJSONResp = (await result.response.text()).replace(/```json|```/g, '').trim();
    console.log(MockJSONResp);
    console.log(JSON.parse(MockJSONResp));
    setJsonResponse(JSON.parse(MockJSONResp));

    if(MockJSONResp){
    const resp  = await db.insert(MockInterview).values({
        mockId: uuidv4(),
        jsonMockResp: MockJSONResp,
        jobPosition: jobPosition,
        jobDesc: jobDesc,
        jobExperience: jobExperience,
        createdBy: user?.primaryEmailAddress?.emailAddress,
        createdAt: moment().format('DD-MM-yyyy')
    }).returning({mockId:MockInterview.mockId})

    console.log("Inserted ID: ", resp);
    if(resp){
      setOpenDailog(false);
      router.push('/dashboard/interview/'+resp[0]?.mockId)
    }
  } else {
    console.log("ERROR");
    
  }
    

    
    setLoading(false);
    
  }

  return (
    <div>
        <div className='p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all'
          onClick={() => setOpenDailog(true)}
        >
            <h2 className='text-lg text-center'>+ Add New</h2>
        </div>
        <Dialog open={openDailog}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Tell me more about the Job you are interviewing</DialogTitle>
          <DialogDescription>
            
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
                    <div className='p-2'>
                      <label>Job Role/Position</label>
                      <Input required 
                        onChange={(event) => setJobPosition(event.target.value)}
                      />
                    </div>
                    <div className='p-2'>
                      <label>Job Description/Tech stack (in short)</label>
                      <Textarea required 
                        onChange={(event) => setJobDesc(event.target.value)}
                      />
                    </div>
                    <div className='p-2'>
                      <label>Years of experience</label>
                      <Input type="number" required max="50"
                        onChange={(event) => setJobExperience(event.target.value)}
                      />
                    </div>
                    <div className='flex gap-5 justify-end'>
                    <Button type="button" variant="ghost" onClick={()=>setOpenDailog(false)}>Cancel</Button>
                    <Button type="submit" disabled={loading}>
                        {loading?
                          <>
                          <LoaderCircle className='animate-spin' />Generating from AI
                          </>:'Start Interview'
                        }
                      </Button>
                    </div>
                  </form>
      </DialogContent>
    </Dialog>
        
    </div>
  )
}

export default AddNewInterview





