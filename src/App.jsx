import { useState } from "react"
import ActionToLearn from "./components/ActionToLearn"
import Features from "./components/Features"
import Footer from "./components/Footer"
import GetStarted from "./components/GetStarted"
import Header from "./components/Header"
import LearnCrypto from "./components/LearnCrypto"
import MarketTrend from "./components/MarketTrend"
import MarketUpdate from "./components/MarketUpdate"
import Navbar from "./components/Navbar"
import LoginModal from "./components/LoginModal"
import CreateAccountModal from "./components/CreateAccountModal"


function App() {
  const [showModal, setShowModal] = useState(null)

  return (
    <>
      <Navbar openLogin={() => setShowModal('login')}/>
      <Header openCreateAccount={() => setShowModal('create-account')}/>
      <MarketTrend />
      <Features />
      <ActionToLearn />
      <MarketUpdate />
      <GetStarted openCreateAccount={() => setShowModal('create-account')}/>
      <LearnCrypto />
      <Footer />

      {showModal === 'login' && <LoginModal onClose={() => setShowModal(null)} onCreateAccount={() => setShowModal('create-account')}/>}
      {showModal === 'create-account' && <CreateAccountModal onClose={() => setShowModal(null)} onLogin={() => setShowModal('login')}/>}
    </>
  )
}

export default App
