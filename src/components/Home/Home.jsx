import React, { useState } from 'react'
import './Home.css'

export default function Home(props) {
    const [user, setUser] = useState({ name: 'Mohamed', balance: 400 });
    let [age, setAge] = useState(20);

    // Methods
    const increaseAge = () => {
        setAge(++age)
    }

    const increaseBalance = (val) => {
        setUser({ ...user, balance: user.balance + val })
    }

    const decreaseBalance = () => {
        setUser({ ...user, balance: user.balance - 100 })
    }

    return (
        <div className='body'>
            <div className='home'>
                <h4>Name : {props.name}</h4>
                <h4>Age: {age}</h4>
                <h4>Balance: {user.balance}</h4>
                <button className='btn btn-primary my-4 mx-2' onClick={increaseAge}>Increase Age</button>
                <button className='btn btn-success my-4 mx-2' onClick={() => { increaseBalance(props.increaseVal) }}>Increase Balance + {props.increaseVal}</button>
                <button className='btn btn-danger my-4 mx-2' onClick={decreaseBalance}>Decrease Balance - 100</button>
            </div>
        </div>
    )
}
