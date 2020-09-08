import React from 'react'
import { Header } from './style'
import logoImage from '@assets/images/general/logo.svg'

const App = () => {
  return (
    <div className="App">
      <Header>
        <img src={logoImage} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </Header>
    </div>
  )
}

export default App
