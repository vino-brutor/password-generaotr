import { useState } from 'react' 

import React from 'react';

function App() {

  const [password, setPassword] = useState()
  const [copyText, setCopyText] = useState("Copiar")
  const [copyClass, setCopyClass] = useState("copy")

  const createPassword = () => {
    setCopyText("Copiar")
    setCopyClass("copy")
    const letters = "abcdefghijklmnopqrstuvwxyz".split("");
    const Upletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const numbers = "0123456789".split("");
    const symbols = "@#!$%&*".split("");
    const characters = [letters, Upletters, numbers, symbols];
  
    let password = "";
    for (let i = 0; i < 12; i++) {
        let randomCategory = characters[Math.floor(Math.random() * characters.length)];
        let digit = randomCategory[Math.floor(Math.random() * randomCategory.length)]
        password += digit;
      }
      setPassword(password)
  }

  const copyToClipboard = () => {
    setCopyText("Copiado!")
    setCopyClass("copied")
    window.navigator.clipboard.writeText(password)
  }

  return (
    <div className="app">
      <h1 className='title'>GERADOR DE SENHAS</h1>
      <div className='button-div'>
        <button className='btn btn-secondary buttonCustom' onClick={createPassword}>Gerar senha</button>
        <button className={'btn btn-secondary buttonCustom ' + copyClass} onClick={copyToClipboard}>{copyText}</button>
      </div>
      <div className='div-password'>
        <h2>{password}</h2>
      </div>
    </div>
  )
}

export default App
