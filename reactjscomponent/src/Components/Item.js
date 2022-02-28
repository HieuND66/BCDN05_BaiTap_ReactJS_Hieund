import React, { Component } from 'react'

export default class 
 extends Component {
  render() {
    let img = "https://i.picsum.photos/id/1012/3973/2639.jpg?hmac=s2eybz51lnKy2ZHkE2wsgc6S81fVD1W2NKYOSh8bzDc"
    return (
      <div className='py-5'>
        <div className="container px-lg-5">

          <div className=" card-deck">
              <div className="card text-center">
                <img src={img}  className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <div className="card  text-center">
              <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <div className="card  text-center">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
          </div>
        </div>

      </div>
    )
  }
}
