import React, { useState, useEffect } from 'react'

const ProductAddForm = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState( 0 );
    const [category, setCategory] = useState('');

    return (
        <form className="d-flex flex-column">
            <div class="form-group">
                <label htmlFor="food-name">Name</label>
                <input type="text" 
                    class="form-control" 
                    name="food-name" 
                    id="food-name" 
                    placeholder=""
                    onChange={ e => setName( e.target.value ) } 
                />
            </div>
            <div class="form-group">
                <label htmlFor="price-name">Price</label>
                <input type="text" 
                    class="form-control" 
                    name="price-name" 
                    id="price-name" 
                    placeholder="" 
                    onChange={ e => setPrice( e.target.value ) }
                />
            </div>
            <div class="form-group d-flex justify-content-around">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="gridRadios" id="dessert" value="dessert" checked 
                        onChange={ e => setCategory( e.target.value ) }
                    />
                    <label class="form-check-label" htmlFor="dessert">
                        Dessert
                    </label>
                </div>
                <div class="form-check">    
                    <input class="form-check-input" type="radio" name="gridRadios" id="meat" value="meat" 
                        onChange={ e => setCategory( e.target.value ) }
                    />
                    <label class="form-check-label" htmlFor="meat">
                        Meat
                    </label>
                </div>
                <div class="form-check">    
                    <input class="form-check-input" type="radio" name="gridRadios" id="salad" value="salad" 
                        onChange={ e => setCategory( e.target.value ) }
                    />
                    <label class="form-check-label" htmlFor="salad">
                        Salad
                    </label>
                </div>
                <div class="form-check">    
                    <input class="form-check-input" type="radio" name="gridRadios" id="drink" value="drink" 
                        onChange={ e => setCategory( e.target.value ) }
                    />
                    <label class="form-check-label" htmlFor="drink">
                        Drink
                    </label>
                </div>
            </div>
            <div class="form-group text-center">
                <input type="submit" value="Add Product" className="btn btn-block btn-danger mt-4" />
            </div>
        </form>
    )
}

export default ProductAddForm;