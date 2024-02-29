import React, { useEffect, useRef } from 'react'

export default function DrumButton({ pad, display }) {
  const audioElement = useRef()
  const handleClick = () => {
    audioElement.current.play();
    display(pad.name);
  }
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key.toUpperCase() === pad.key) {
        handleClick();
      }
    }
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className='drum-pad col-4' id={pad.name} onClick={handleClick}>
      <audio src={pad.link} className='clip' id={pad.key} ref={audioElement} />
      <button className='btn w-100 bg-secondary h-75 fw-bold'>
        {pad.key}
      </button>
    </div>
  )
}
