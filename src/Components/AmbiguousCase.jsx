import { useState } from 'react'
import './AmbiguousCase.css'


function AmbiguousCase() {
    const [A, setA] = useState('');
    const [a, setSideA] = useState('');
    const [b, setSideB] = useState('');
    const [result, setResult] = useState('');

    const ambiguousCase = (A, a, b) => {
        const h = Math.round(b * Math.sin(A * Math.PI / 180));

        if (A === 90) {
            return 'Right triangle';
        }

        if (A < 90) {
            if (a < h) {
                return "No triangle";
            } else if (a > b) {
                return "One triangle";
            } else if ((h < a) && (a < b)) {
                return "Two triangles";
            } else if (a === h) {
                return "Right triangle";
            } else {
                return "No solution";
            }
        } else if (A < 180) {
            if (a <= b) {
                return "No triangle";
            } else if (a > b) {
                return "One triangle";
            } else {
                return "No solution";
            }
        }
    };

    const handleAmbiguous = (event) => {
        event.preventDefault();
        const angle = parseFloat(A);
        const sideA = parseFloat(a);
        const sideB = parseFloat(b);
        setResult(ambiguousCase(angle, sideA, sideB));
    };

    return (
        <div>
            <h2>Ambiguous Case</h2>
            <form onSubmit={handleAmbiguous}>
                <input type="number" value={A} onChange={(e) => setA(e.target.value)} placeholder="Angle A" />
                <input type="number" value={a} onChange={(e) => setSideA(e.target.value)} placeholder="Side A" />
                <input type="number" value={b} onChange={(e) => setSideB(e.target.value)} placeholder="Side B" />
                <button type="submit">Calculate</button>
            </form>
            <input type="text" value={result} readOnly placeholder="Result" />
        </div>
    );
};

export default AmbiguousCase;