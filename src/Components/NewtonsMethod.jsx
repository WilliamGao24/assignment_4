import { useState } from 'react';
import "./NewtonsMethod.css";

const NewtonsMethod = () => {
    const [g, setGuess] = useState('');
    const [result, setResult] = useState('');

    const newtonsMethod = (g) => {
        function f(x) {
            return 6 * Math.pow(x, 4) - 13 * Math.pow(x, 3) - 18 * Math.pow(x, 2) + 7 * x + 6;
        }

        function fPrime(x) {
            return 24 * Math.pow(x, 3) - 39 * Math.pow(x, 2) - 36 * x + 7;
        }

        let maxIterations = 1000;
        let iterations = 0;
        
        while (Math.abs(f(g)) > 0.0001 && iterations < maxIterations) {
            g = g - f(g) / fPrime(g);
            iterations++;
        }
        return g;
    };

    const handleNewtons = (event) => {
        event.preventDefault();
        const guess = parseFloat(g);
        setResult(newtonsMethod(guess));
    };

    return (
        <div>
            <h2>Newton's Method</h2>
            <form onSubmit={handleNewtons}>
                <input type="number" value={g} onChange={(e) => setGuess(e.target.value)} placeholder="Initial guess" />
                <button type="submit">Calculate</button>
            </form>
            <input type="text" value={result} readOnly placeholder="Root Result" />
        </div>
    );
};

export default NewtonsMethod;