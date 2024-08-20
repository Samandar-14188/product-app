import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from '../../components/Button/Button';


export default function Products() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: 0,
    status: '',
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://auth-rg69.onrender.com/api/products/all');
        setProducts(response.data);
      } catch (error) {
        console.error('Serverdan ma\'lumot olishda xatolik: ', error);
      }
    };

    fetchProducts();
  }, []);

  const handleInputChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddProduct = async () => {
    try {
      const response = await axios.post('https://auth-rg69.onrender.com/api/products', newProduct);
      setProducts([...products, response.data]);
      setNewProduct({
        name: '',
        description: '',
        price: 0,
        status: '',
      });
    } catch (error) {
      console.error('Mahsulot qoshishda xatolik: ', error);
    }
  };
  const handleDelete = async (productId) => {
    try {
      await axios.delete(`https://auth-rg69.onrender.com/api/products/${productId}`);
      
      setProducts(products.filter(product => product.id !== productId));
    } catch (error) {
      console.error('Mahsulotni o\'chirishda xatolik: ', error);
    }
  };

  return (
    <div className='products-wrapper'>
      <header>
        
        <Link to={'/SignIn'}  className='link'>
        Sign in

        </Link>
        <Link to={'/Signup'} className='link'>
        Sign Up

        </Link>
        <Link to={'/'} className='link'>
        Chiqish

        </Link>
          

        
      </header>
     
      <main className='cards-container'>
      <div className='add-product-wrapper'>
        <button>Yangi mahsulot qo'shish</button>
        <input
          type='text'
          name='name'
          placeholder='Nomi'
          value={newProduct.name}
          onChange={handleInputChange}
        />
        <input
          type='text'
          name='description'
          placeholder='Tavsif'
          value={newProduct.description}
          onChange={handleInputChange}
        />
        <input
          type='number'
          name='price'
          placeholder='Narxi'
          value={newProduct.price}
          onChange={handleInputChange}
        />
        <input
          type='text'
          name='status'
          placeholder='Statusi'
          value={newProduct.status}
          onChange={handleInputChange}
        />
        <button onClick={handleAddProduct}>Qo'shish</button>
      </div>
      <div className='form'>
            
      </div>
      <div className='cards'>
      {products.map((product) => (
          <div key={product.id} className='card'>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span>${product.price}</span>
            <button className='status'>{product.status}</button>
            <Button text="delete"  onClick={() => handleDelete(product.id)} />
          </div>
        ))}
      </div>
      
      </main>



    </div>
  );
}
