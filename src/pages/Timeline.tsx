import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header/Header";
import { Separator } from "../components/Separator/Separator";
import { Tweet } from "../components/Tweet/Tweet";
import "./Timeline.css"


export function Timeline() {

  const [textValue, setTextValue] = useState("")  
  const [tweets, setTweets] = useState([
    "Meu primeiro Tweeet",
    "Como funcionsa isto?...",
    "Testando..."
  ])

  const createNewTweet = (e: FormEvent) => {
    e.preventDefault()
    setTweets([textValue, ...tweets])
    setTextValue("")
  }

  const handleHotKeySubmit = (e: KeyboardEvent) => {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      setTweets([textValue, ...tweets])
      setTextValue("")
    }
  }

  return(
    <main className="timeline">
      <Header title="Home"/>
      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/weslleycastro.png" alt="Weslley castro" />
          <textarea
           id="tweet" 
           placeholder="What's happening?"
           onChange={(e) => setTextValue(e.target.value)}
           value={textValue}
           onKeyDown={handleHotKeySubmit}/>
        </label>

        <button type="submit">Tweet</button>
      </form>
      <Separator/>

      {tweets.map((tweet) => <Tweet key={tweet} content={tweet}/>)}
    
    </main>
  )
}