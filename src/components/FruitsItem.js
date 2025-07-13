import React from "react";

const FruitsItem = ({fruist, increase, decrease}) => {
    console.log(fruits);
    reutrn (
        <div>
            {fruits.map((fruit) => {
                reutrn (
                    <div key={fruit.id}>
                        <h1>{fruit.name}</h1>
                        <h2>{fruit.price}</h2>
                        <p>{fruit.quality}</p>
                        <button onClick={increase}>+</button>
                        <button onClick={decrease}>-</button>
                    </div>
                )
            })}
        </div>
    )
}



export default FruitsItem