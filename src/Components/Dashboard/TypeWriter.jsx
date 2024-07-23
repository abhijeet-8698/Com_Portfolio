import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter'

function TypeWriter() {
    const [text] = useTypewriter({
        words: ['Web Development', 'Software Development', 'Android App Development', 'Web App Testing'],
        loop: 3,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })

    return (
        <>
            <div className='App'>
                <span>{text}</span>
                <Cursor cursorColor='red' />
            </div>
        </>
    )
}


export default TypeWriter;