import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import SideHeader from './components/SideHeader';

function App() {
  const [main, setMain] = useState({
    data: [],
    productNames: [],
    stateNames: [],
    cityNames: [],
    selectedProduct: [],
    selectedState: [],
    selectedCity: []
  });
  // const [data, setData] = useState([]);
  // const [selectedProduct, setSelectedProduct] = useState();
  // const [selectedState, setSelectedState] = useState();
  // const [selectedCity, setSelectedCity] = useState();
  // const [productNames, setProductNames] = useState();
  // const [cityNames, setCityNames] = useState();
  // const [stateNames, setStateNames] = useState();
 
  // const getStates = () => {
  //   // setProductNames([ ... new Set(data.map(i => i.product_name))])
  //   console.log(productNames)
  //   setStateNames([ ... new Set(data.map(i => i.address.state))])
  //   setCityNames([ ... new Set(data.map(i => i.address.city))])
  // }
  useEffect(() => {
    axios.get('https://assessment-edvora.herokuapp.com/')
    .then(res => {
      console.log(res.data);
      setMain({
        data: res.data,
        productNames: [ ... new Set(res.data.map(i => i.product_name))],
        stateNames: [ ... new Set(res.data.map(i => i.address.state))],
        cityNames:[ ... new Set(res.data.map(i => i.address.city))],
        selectedProduct: [ ... new Set(res.data.map(i => i.product_name))],
        selectedState: [ ... new Set(res.data.map(i => i.address.state))],
        selectedCity:[ ... new Set(res.data.map(i => i.address.city))]
      })
      // setData(res.data);
      // setProductNames([ ... new Set(data.map(i => i.product_name))])
    })
    .catch(err => {
      console.log(err);
    });
    // getStates();
  }, [])

  // setProductNames([ ... new Set(data.map(i => i.product_name))])

  // let distinctP = [ ... new Set(data.map(i => i.product_name))];
  // let distinctC = [ ... new Set(data.map(i => i.address.city))];
  // let distinctS = (data.map(i => i.address.state))
  
  // setDistincS(dS);
  // setProductNames(distinctP);
  // setCityNames(distinctC);
  // setStateNames(distinctS);
  // console.log(distinctS)

  const handleChangeProduct = (e) => {
    setMain({ ...main, selectedProduct: [e.target.value] })
    // setMain({ ...main, selectedState: main.data.filter(i => i.product_name === e.target.value).map(s => s.address.state) })
    // setMain(...main, {
    //   stateNames: resultS
    // })
    // setStateNames(resultS)
    // setMain({stateNames: resultS})
    // console.log(main.stateNames);
  }

  const handleChangeState = (e) => {
    // setSelectedState(e.target.value);
  }

  const handleChangeCity = (e) => {
    // setSelectedCity(e.target.value)
  }

  
  return (
    <div className="App">
      <div className='filters'>
        <h1>Filters</h1>
        <hr />
        <select onChange={handleChangeProduct}>
          <option value='Products'>Products</option>
          {
            main.productNames && main.productNames.map((productNames, index) => <option key={index} value={productNames}>{productNames}</option> )
          }
        </select>
        <select onChange={handleChangeState}>
          <option value='State'>State</option>
          {
            main.selectedState && main.selectedState.map((stateNames, index) => <option key={index} value={stateNames}>{stateNames}</option> )
          }
        </select>
        <select onChange={handleChangeCity}>
          <option value='City'>City</option>
          {
            main.cityNames && main.cityNames.map((cityNames, index) => <option key={index} value={cityNames}>{cityNames}</option> )
          }
        </select>
      </div>
      <SideHeader distinctP={main.selectedProduct} data={main} />
    </div>
  );
}

export default App;
