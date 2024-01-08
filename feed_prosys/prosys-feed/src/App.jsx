import Header from './components/header/Header'
import Post from './components/postFeed/Post'
import Ramais from './components/ramais/Ramais'
import ChatSide from './components/chatSide/ChatSide'

import './App.css'

function App() {

  return (
    <>
    <Header />
    <div className='main'>
      <section className='sideInfo'>
        <Ramais />
        <Ramais />
      </section>
      <Post />
      <section>
        <ChatSide />
      </section>
    </div>
    </>
  )
}

export default App
