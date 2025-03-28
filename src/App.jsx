import ActionToLearn from "./components/ActionToLearn"
import Features from "./components/Features"
import Footer from "./components/Footer"
import GetStarted from "./components/GetStarted"
import Header from "./components/Header"
import LearnCrypto from "./components/LearnCrypto"
import MarketTrend from "./components/MarketTrend"
import MarketUpdate from "./components/MarketUpdate"
import Navbar from "./components/Navbar"


function App() {


  return (
    <>
      <Navbar />
      <Header />
      <MarketTrend />
      <Features />
      <ActionToLearn />
      <MarketUpdate />
      <GetStarted />
      <LearnCrypto />
      <Footer />
    </>
  )
}

export default App
