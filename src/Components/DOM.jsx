import React from 'react'
import domFaqData from '../utils/que'
import '../styles/dom.css'

function DOM() {
    return (
        <div className="faq-container">
            <h1>DOM and Virtual DOM FAQ</h1>
            {domFaqData.map((item, index) => (
                <div key={index} className="faq-item">
                    <h3 className="faq-question">{item.question}</h3>
                    <p className="faq-answer">{item.answer}</p>
                </div>
            ))}
        </div>
    )
}

export default DOM
