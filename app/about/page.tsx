"use client";

import {NextPage} from "next";
import {useState} from "react";

const AboutPage: NextPage = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>About</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}

export default AboutPage;