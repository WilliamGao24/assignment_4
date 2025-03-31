import { useState } from 'react';
import "./heronsFormula.css";

function HeronsFormula () {
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [c, setC] = useState('');
    const [result, setResult] = useState('');

    const heronsFormula = (a, b, c) => {
        return (1 / 4) * Math.sqrt(4 * a * a * b * b - Math.pow(a * a + b * b - c * c, 2));
    };

    const handleHerons = (event) => {
        event.preventDefault();
        const sideA = parseFloat(a);
        const sideB = parseFloat(b);
        const sideC = parseFloat(c);
        setResult(heronsFormula(sideA, sideB, sideC));
    };

    return (
        <div>
            <h2>Heron's Formula</h2>
            <form onSubmit={handleHerons}>
                <input type="number" value={a} onChange={(e) => setA(e.target.value)} placeholder="Side A" />
                <input type="number" value={b} onChange={(e) => setB(e.target.value)} placeholder="Side B" />
                <input type="number" value={c} onChange={(e) => setC(e.target.value)} placeholder="Side C" />
                <button type="submit">Calculate</button>
            </form>
            <input type="text" value={result} readOnly placeholder="Result" />
        </div>
    );
};

export default HeronsFormula;