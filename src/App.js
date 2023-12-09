import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Category from './components/Category';
import axios from 'axios';
// import AddCart from './components/AddCart';

function App() {
  const [filter, setFilter] = useState(null);
  const [data, setData] = useState([])
  const [popup, setPopup] = useState(false)

  useEffect(() => {
    const getData = () => {
      let url = 'http://localhost:4000/api/product';
      if (filter) {
        url += `/${filter}`;
      }
      axios.get(url)
        .then((res) => {
          setData(res.data.product)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    getData()
  }, [filter])
  return (
    <>
      <Navbar {...{ popup, setPopup }} />
      <Category {...{ filter, setFilter }} />
      <Products Items={data} {...{ setPopup }} />
    </>
  );
}

export default App;
