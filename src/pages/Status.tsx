import { FormEvent, KeyboardEvent, useState } from "react"
import { PaperPlaneRight } from "phosphor-react"
import { Header } from "../components/Header/Header"
import { Separator } from "../components/Separator/Separator"
import { Tweet } from "../components/Tweet/Tweet"
import "./Status.css"


export function Status() {
 
  const [textValue, setTextValue] = useState("")  
  const [answers, setNewAnswers] = useState([
    "Concordo...",
    "Olha, faz sentido",
    "PArabéns pelo progresso."
  ])

  const createNewTweet = (e: FormEvent) => {
    e.preventDefault()
    setNewAnswers([textValue, ...answers])
    setTextValue("")
  }
 
  const handleHotKeySubmit = (e: KeyboardEvent) => {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      setNewAnswers([textValue, ...answers])
      setTextValue("")
    }
  }
 
  return(
    <main className="status">
      <Header title="Tweet"/>

      <Tweet content=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit dignissimos voluptatibus laboriosam alias et error similique perferendis impedit dolore saepe. Quo, id repudiandae voluptatum ab eum vero voluptatem sint officiis?"/>
     
      <Separator/>
      
      <form onSubmit={createNewTweet} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/weslleycastro.png" alt="Weslley castro"/>
          <textarea 
            id="tweet" 
            placeholder="Tweet your answer"
            onChange={(e)=> setTextValue(e.target.value)}
            value={textValue}
            onKeyDown={handleHotKeySubmit}/>
        </label>

        <button type="submit">
          <PaperPlaneRight/>
          <span>Answer</span>
        </button>
      </form>
   

      {answers.map((answer) => <Tweet key={answer} content={answer}/>)}
    
    </main>
  )
}