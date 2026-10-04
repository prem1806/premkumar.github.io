import Header from './components/Header'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Education from './components/Education'
import Showcase from './components/Showcase'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
        <Education />
        <Showcase />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
