import { useState } from 'react'
import Components from './Components.jsx'
import Make_cv from './Make_cv.jsx';

const App = () => {
    const [submitted, setSubmitted] = useState(false);
    const [data, setData] = useState({});

    if (submitted) {
        return (
            <Make_cv changeSubmitted={setSubmitted} data={data} class="Make_cv"/>
        )
    } else {
        return (
            <Components changeSubmitted={setSubmitted} setData={setData} data={data} id="Components"/>
        )
    }
}

export default App