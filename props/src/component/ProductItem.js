import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    let {sanPham, xemChiTiet} = this.props
    return (
 
            <div className="glassBox">
              <div className="glassBox__imgBox">
                <img src={sanPham.image} alt className='img-fluid' />
              </div>
                <h3 className="glassBox__title">{sanPham.name}</h3>
                <p>{sanPham.price}$</p>
                <button class="bn30" data-toggle="modal" data-target="#exampleModal"
                onClick={() => { 
                  xemChiTiet(sanPham)
                 }}
                >thông tin chi tiết</button>
            </div>

    )
  }
}
