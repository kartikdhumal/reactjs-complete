import React from 'react'

function HigherOrder() {
    return (
        <div>
            <h1> Thank you for visiting me </h1>
        </div>
    )
}

export default HigherOrder

export const HighOrderComponent = (HigherOrder) => {
    return (props) => (
        <>
           <h2>I am Higher order component</h2> 
            <HigherOrder {...props} />
        </>
    )
}

export const EnhancedOrder = HighOrderComponent(HigherOrder);