import React from "react";


const NumberFact = function({num,fact}){
    return(
        <div>
            <h2>Interesting Fact about Number {num}</h2>
            <p>{fact}</p>
        </div>
    )
}

export default NumberFact;