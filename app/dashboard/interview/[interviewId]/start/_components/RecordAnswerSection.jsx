import { Webcam } from 'lucide-react'
import React from 'react'

function RecordAnswerSection() {
  return (
    <div>
        <Image src={'/webcam.png'}/>
        <Webcam />
    </div>
  )
}

export default RecordAnswerSection