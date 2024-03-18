import React from 'react'

const Play = (props) => {

    const setMyChoice = (e) => {
        props.setChoice(e.target.dataset.id)
        console.log('checking')
        props.showResult(true);
    }

  return (
    <div>
      <header>Rock Paper Scissor</header>
      <button data-id='rock' onClick={setMyChoice}>Rock</button>
      <button data-id='paper' onClick={setMyChoice}>Paper</button>
      <button data-id='scissors' onClick={setMyChoice}>Scissor</button>

    </div>
  )
}

export default Play
