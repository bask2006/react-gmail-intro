import './styles/App.css'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Navigation from './components/Navigation.jsx'

function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <Main />
    </div>
  )
}

export default App
