import React, { Component } from 'react'

export default class ContentGlasses extends Component {
  handleGlass = (glass) => {
    this.props.changeGlass(glass)
    this.props.changeName(glass)
    
  }
  render() {
    let {productList} = this.props
    // console.log(productList);
    return (
      <div className='contentGlasses'>
             <div className="contentGlassesWrapper">
               {productList.map((item, index) =>{
                 return(

                 <div className="contentGlassesImg" key={index}>
                   <img 
                  //  style={{ width: '150px', height: '100px' }}
                   src={item.url}
                    alt="" 
                    onClick={ () => 
                    this.handleGlass(item)
                    }
                    />
                   </div>
                 );
               })}
              {/* <img src="./img/glassesImage/g1.jpg" alt="" style={{ width: '150px', height: '100px' }} /> */}
          </div>
      </div>
    )
  }
}
