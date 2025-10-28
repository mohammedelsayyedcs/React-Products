import React from 'react'
import './Main.css'

export default function Main() {
    const cards = []

    for (let index = 1; index <= 3; index++) {
        cards.push(

            <div key={index} className="col-4 card px-3 border-0">
                <img src={`./${index}.webp`} style={{ width: '300px', height: '200px' }} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        )
    }
    return (
        <>
            {cards}
        </>
    )
}
