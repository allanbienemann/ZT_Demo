import Nav from './components/Nav'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Testimonial />
      </main>
      <Footer />
    </div>
  )
}
