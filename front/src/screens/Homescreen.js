import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Food from '../components/Food'

import { getAllFoods } from '../actions/foodActions'


export default function Homescreen() {

    const dispatch = useDispatch()

    const Itemsstate = useSelector((state) => state.getAllFoodsReducer);

    const { Items, error, loading } = Itemsstate;
    console.log(Items);

    useEffect(() => {
        dispatch(getAllFoods);

    }, []);
    return (


        <div>
            <div className='row'>

                {loading ? (
                    <h1>Loading...</h1>
                ) : error ? (
                    <h1>Something went wrong</h1>
                ) : Items ? (

                    Items && Items.map((food) => {
                        return (
                            <div className='col-md-4'  key={food.id}>
                                <div>
                                    <Food food={food} />
                                </div>
                            </div>
                        )
                    })

                ): null}

            </div>
        </div>
    )
}
