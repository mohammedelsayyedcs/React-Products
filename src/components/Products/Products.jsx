import React from 'react'
import './Products.css'

export default function Products() {
  const cards = []

  for (let index = 1; index <= 3; index++) {
    cards.push(

      <div class="col-4 card px-3 border-0">
        <img src={`./${index}.webp`} style={{ width: '300px', height: '200px' }} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>

    )

  }

  return (
    <div className='body row container mx-auto'>

      {cards}

    </div>
  )
}
