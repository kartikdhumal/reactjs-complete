import React from 'react';
import '../styles/templateLiteral.css';

function TemplateLiteral() {
    const codeExample1 = `const a = 5;
const b = 10;
console.log("Fifteen is " + (a + b) + " and\\nnot " + (2 * a + b) + ".");
// "Fifteen is 15 and
// not 20."`;

    const codeExample2 = `const a = 5;
const b = 10;
console.log(\`Fifteen is \${a + b} and
not \${2 * a + b}.\`);
// "Fifteen is 15 and
// not 20."`;

    return (
        <div className="template-literal-container">
            <h1>Template Literals (Template Strings)</h1>
            <p>
                Template literals are enclosed by backtick (<code>`</code>) characters, allowing for multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates.
            </p>
            <p>
                Template literals are sometimes informally called template strings, because they are used most commonly for string interpolation.
            </p>
            
            <h2>String Interpolation</h2>
            <p>
                Without template literals, when you want to combine output from expressions with strings, you'd concatenate them using the addition operator <code>+</code>:
            </p>
            <pre className="code-example">{codeExample1}</pre>
            
            <p>
                That can be hard to read – especially when you have multiple expressions.
            </p>
            <p>
                With template literals, you can avoid the concatenation operator — and improve the readability of your code — by using placeholders of the form <code>${'{expression}'}</code> to perform substitutions for embedded expressions:
            </p>
            <pre className="code-example">{codeExample2}</pre>
        </div>
    );
}

export default TemplateLiteral;
