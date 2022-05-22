import React from 'react';

const Item = ({item}) => {
    const {image, name, description, minimumOrderQuantity, AvailableQuantity, UnitPrice}= item;
    return (
       <div class="card card-compact lg:max-w-lg bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <p><small>Unit Price: BDT </small><small>{UnitPrice}</small></p>
                <p><small>Minimum Order Quantity: </small><small>{minimumOrderQuantity}</small></p>
                <p><small>Available Quantity: </small><small>{AvailableQuantity}</small></p>
                <div class="card-actions justify-end pt-4">
                <button class="btn btn-primary">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Item;