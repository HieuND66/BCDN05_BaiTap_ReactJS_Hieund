import React, { Component } from 'react'
import './Modal/modal.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
var FontAwesome = require('react-fontawesome');
export default class Modal extends Component {
  render() {
    let {shoesState} = this.props
    return (
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="card modal-dialog">
          <div className="left">
            <img src={shoesState.image} alt="shoe" />

          </div>
          <div className="right">
            <div className="product-info">
              <div className="product-name">
                <h1>Airmax</h1>
                <i className="fa fa-search" />
                <i className="fa fa-user" />
                <i className="fa fa-shopping-cart" />
              </div>
              <div className="details">
                <h3>Winter Collection</h3>
                <h2>{shoesState.name}</h2>
                <h4><span className="fa fa-dollar" />${shoesState.price}</h4>
                <h4 className="dis"><span className="fa fa-dollar" />$900</h4>
              </div>
              <ul>
                <li>SIZE</li>
                <li className="bg">7</li>
                <li className="bg">8</li>
                <li className="bg">9</li>
                <li className="bg">10</li>
                <li className="bg">11</li>
              </ul>
              <ul>
                <li>COLOR</li>
                <li className="yellow" />
                <li className="black" />
                <li className="blue" />
              </ul>
              <p className='des'>{shoesState.shortDescription}</p>
            </div>
          </div>
        </div>

    </div>
    )
  }
}
