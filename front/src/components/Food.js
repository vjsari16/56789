import React, { useState } from 'react'

export default function Food({ food }) {
    const [quantity, setQuantity] = useState(1)
    const [varient, setVarient] = useState("")

    return (
        <div style={{ margin: '70px' }} className='shadow-lg p-3 mb-5 bg-white rounded'>
            <div >
                <h1>{food.name}</h1>
                <img src={food.image} className='img-fluid' style={{ height: '200px', width: '200px' }} />
            </div>

            <div className='flex-container'>
                <div className='m-1 w-100'>
                    <h1>Varients</h1>
                    <select className='form-control' value={varient} onChange={(e) => { setVarient(e.target.value) }}>
                        {food.varients.map((varient, index) => {
                            return <option value={varient}>{varient}</option>
                        })}
                    </select>
                </div>
                <div className='m-1 w-100'>
                    <h1>Quantity</h1>
                    <select className='form-control' value={quantity} onChange={(e) => { setQuantity(e.target.value) }}>
                        {[...Array(10).keys()].map((x, i) => {
                            return <option value={i + 1}>{i + 1}</option>
                        })}
                    </select>

                </div>
            </div>
            <div className='flex-container m-1'>
                <h1>Price : {food.prices[0][varient] * quantity} Rs/-</h1>


            </div>
            <div className='m-1'>
                <button className='btn'> Add to Cart</button>

            </div>

        </div>

    )
}
