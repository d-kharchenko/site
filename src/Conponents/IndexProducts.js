import React, { Component } from 'react';
const carts = [
    {
        title: '1С: Документообіг КОРП для України',
        price: '9000',
        image: require('../img/1c-img.jpg'),
    },
    {
        title: '1С: Комплексний облік для бюджетних установ України',
        price: '8500',
        image: require('../img/1c-img.jpg'),
    },
    {
        title: '1С: Роздріб 8 для України',
        price: '10000',
        image: require('../img/1c-img.jpg'),
    }
];

const title = (
    carts.map((el) =>
        <div className='products-cart'>
            <img src={el.image} className='products-cart__img' alt={el.title}/>
            <h3 className='products-cart__title'>
                {el.title}
            </h3>
            <p className='products-cart__price'>
                {el.price}  грн.
            </p>
        </div>
    )
);

class IndexProducts extends Component{
    render(){
        return(
            <div className='prt-products'>
                <div className='conteiner'>
                    <h2 className='prt-products__title'>Продукти 1С</h2>
                    <div className='products-wrap'>
                        {title}
                    </div>
                </div>

            </div>
        );
    }
}
export default IndexProducts;