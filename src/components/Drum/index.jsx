import { useState } from 'react'
import DrumButton from '../DrumButton'
import './drum.scss'
export default function Drum() {
    const [displayText, setDisplayText] = useState('')
    const pads = [
        {
            name: 'Heater 1',
            key: 'Q',
            link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
        },
        {
            name: 'Heater 2',
            key: 'W',
            link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
        },
        {
            name: 'Heater 3',
            key: 'E',
            link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
        },
        {
            name: 'Heater 4',
            key: 'A',
            link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
        },
        {
            name: 'Clap',
            key: 'S',
            link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
        },
        {
            name: 'Open-HH',
            key: 'D',
            link: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
        },
        {

            name: 'Kick-n\'-Hat',
            key: 'Z',
            link: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
        },
        {
            name: 'Kick',
            key: 'X',
            link: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
        },
        {
            name: 'Closed-HH',

            key: 'C',
            link: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
        }
    ]
    const display = (name) => setDisplayText(name)
    return (
        <div className='row justify-content-center align-items-center h-100'>
            <div className='d-flex gap-2 container col-5 col-xs-12 bg-light drum rounded p-4 ' id='drum-machine'>
                <div className='row h-100'>
                    {pads.map(pad => <DrumButton pad={pad} display={display} />)}
                </div>
                <div id='display' className='col-4 h-25 text-center align-self-center'>
                    {displayText}
                </div>
            </div>
        </div>
    )
}
