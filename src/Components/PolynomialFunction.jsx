import { useState } from 'react';
import "./PolynomialFunction.css";

function PolynomialEvaluation() {
    const [coefficients, setCoefficients] = useState('');
    const [exponents, setExponents] = useState('');
    const [xValue, setXValue] = useState('');
    const [functionResult, setFunctionResult] = useState('');
    const [evaluationResult, setEvaluationResult] = useState('');

    const polynomialEvaluation = (coeffs, exps, x) => {
        let result = 0;
        for (let i = 0; i < coeffs.length; i++) {
            result += parseFloat(coeffs[i]) * Math.pow(x, parseFloat(exps[i]));
        }
        return result;
    };

    const polynomialFunction = (coeffs, exps) => {
        let result = '';
        for (let i = 0; i < coeffs.length; i++) {
            if (i === 0) {
                result += coeffs[i] + 'x^' + exps[i];
            } else if (coeffs[i] < 0) {
                result += ' - ' + Math.abs(coeffs[i]) + 'x^' + exps[i];
            } else {
                result += ' + ' + coeffs[i] + 'x^' + exps[i];
            }
        }
        return result;
    };

    const handlePolynomial = (event) => {
        event.preventDefault();
        const coeffs = coefficients.split(' ');
        const exps = exponents.split(' ');
        const xVal = parseFloat(xValue);

        setFunctionResult(polynomialFunction(coeffs, exps));
        setEvaluationResult(polynomialEvaluation(coeffs, exps, xVal));
    };

    return (
        <div>
            <h2>Polynomial Evaluation</h2>
            <form onSubmit={handlePolynomial}>
                <input type="text" value={coefficients} onChange={(e) => setCoefficients(e.target.value)} placeholder="Coefficients" />
                <input type="text" value={exponents} onChange={(e) => setExponents(e.target.value)} placeholder="Exponents" />
                <input type="number" value={xValue} onChange={(e) => setXValue(e.target.value)} placeholder="X Value" />
                <button type="submit">Calculate</button>
            </form>
            <input type="text" value={functionResult} readOnly placeholder="Polynomial Function" />
            <input type="text" value={evaluationResult} readOnly placeholder="Polynomial Evaluation" />
        </div>
    );
};

export default PolynomialEvaluation;
