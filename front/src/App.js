import React, { useState } from 'react';
const App = () => {
    const [title, settitle] = useState('hellowww');
    function sss1() {
        settitle("asd")
    }
    return (
        <div>
            <div>{title}</div>
            <button onClick={sss1}> button</button>
        </div>

    )
}
export default App;
