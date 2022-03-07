import React, { Component } from 'react'
import ContentGlasses from './ContentGlasses';

export default class Content extends Component {

    state = {
      productList : [
        {
          "id": 1,
          "price": 30,
          "name": "GUCCI G8850U",
          "url": "./img/glassesImage/v1.png",
          "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
      },
      {
          "id": 2,
          "price": 50,
          "name": "GUCCI G8759H",
          "url": "./img/glassesImage/v2.png",
          "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
      },
      {
          "id": 3,
          "price": 30,
          "name": "DIOR D6700HQ",
          "url": "./img/glassesImage/v3.png",
          "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
      },
      {
          "id": 4,
          "price": 70,
          "name": "DIOR D6005U",
          "url": "./img/glassesImage/v4.png",
          "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
      },
      {
          "id": 5,
          "price": 40,
          "name": "PRADA P8750",
          "url": "./img/glassesImage/v5.png",
          "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
      },
      {
          "id": 6,
          "price": 60,
          "name": "PRADA P9700",
          "url": "./img/glassesImage/v6.png",
          "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
      },
      {
          "id": 7,
          "price": 80,
          "name": "FENDI F8750",
          "url": "./img/glassesImage/v7.png",
          "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
      },
      {
          "id": 8,
          "price": 100,
          "name": "FENDI F8500",
          "url": "./img/glassesImage/v8.png",
          "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
      },
      {
          "id": 9,
          "price": 60,
          "name": "FENDI F4300",
          "url": "./img/glassesImage/v9.png",
          "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
      }
      ],
      imgModel : `./img/glassesImage/v1.png`,
      titleModel: 'GUCCI G8850U',
      desModel: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.',
    }

    changeGlass = (glass) => {
      let glassList = this.state.productList;
      // console.log(glassList);
      glassList = glassList.find((item) => item.id == glass.id)
      console.log(glassList.url);
       this.setState({
         imgModel : glassList.url
        })
    }
    changeName = (glass) => {
      let glassList = this.state.productList;
      // console.log(glassList);
      glassList = glassList.find((item) => item.id == glass.id)
      console.log(glassList.url);
       this.setState({
        titleModel : glassList.name
        })
    }
    changeDes = (glass) => {
      let glassList = this.state.productList;
      // console.log(glassList);
      glassList = glassList.find((item) => item.id == glass.id)
      console.log(glassList.url);
       this.setState({
        desModel : glassList.desc
        })
    }
  render() {
    return (
      <div className='content'>
        <div className="contentModel">
          <div className="contentModelLeft">
            <div className="contentModelLeftImg">
              <img src="./img/glassesImage/model.jpg" alt="" style={{ width: '100%', height: '100%' }} />

            </div>

          </div>
          <div className="contentModelRight">
            <div className="contentModelRightImg">
              <img src="./img/glassesImage/model.jpg" alt="" style={{ width: '100%', height: '100%' }} />
              <img src={this.state.imgModel} alt="" className="contentModelGlass" />
            </div>
            <div className="contentModelRightInfo" style={{ width: '250px' }}>
              <h3>{this.state.titleModel}</h3>
              <p>{this.state.desModel}</p>
            </div>
          </div>
        </div>
      <ContentGlasses  
      productList={this.state.productList}
      changeGlass={this.changeGlass}
      changeName = {this.changeName}
      />
      </div>
    )

  }
}
