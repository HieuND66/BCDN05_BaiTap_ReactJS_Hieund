import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
  renderProduct = () => {
    let {productList, xemChiTiet} = this.props
    return productList.map((sp) => {
      return <div className="col-md-6 col-lg-4 col-12 pb-5" key={`shoes${sp.id}`}>
      <ProductItem sanPham = {sp} xemChiTiet = {xemChiTiet}/>
      </div>
    })
  }
  render() {
    return (
      <div className="row py-3">
      {this.renderProduct()}
        </div>
    )
  }
}
