import './App.css';
import { useState } from 'react';

const allBrands = [
  {id: 1, name: 'Nike'},
  {id: 2, name: 'Adidas'},    
  {id: 3, name: 'Puma'},
  {id: 4, name: 'Reebok'},
  {id: 5, name: 'Under Armour'},
  {id: 6, name: 'New Balance'},
  {id: 7, name: 'Asics'},
  {id: 8, name: 'Converse'},
  {id: 9, name: 'Vans'}
]

function App() {

  let [selectedBrand,setSelectedBrand] = useState([])

  const onAddToCartClick = (id) =>{
    const selectedItem = allBrands.find(item => item.id === id)
    setSelectedBrand([...selectedBrand, selectedItem ])
  }

  const onRemoveClick = (id) => {
    const FilteredItems = selectedBrand.filter(item => item.id !== id)
    setSelectedBrand(FilteredItems)
  }



    return (
      <>
        <div>
          <p>Add Brands to your cart</p>
          {
            allBrands.map(brand => 
            <div>
              <span>{brand.name}</span>
              <button onClick={()=>onAddToCartClick(brand.id)}>Add To Cart</button>
            </div>)
          }
          <div>
            <p> YOUR CART</p>
            {
              selectedBrand.map(brand => <p>{brand.name} - <button onClick={()=>onRemoveClick(brand.id)}>Remove</button></p>)
            }
          </div>
        </div>
      </>
    );
  }

  export default App;
