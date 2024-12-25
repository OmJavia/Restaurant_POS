import React, { useState } from 'react';
import Sidebar from './Sidebar';

const Calculator = () => {
  const productPrices = {
    Sugar: 44,
    Rice: 60, 
  };

  const [product, setProduct] = useState('Sugar'); // default product is "Sugar"
  const [weightInput, setWeightInput] = useState('');
  const [moneyInput, setMoneyInput] = useState('');
  const [result, setResult] = useState('');

  const handleConvert = () => {
    const pricePerKg = productPrices[product];

    if (weightInput) {
      // Convert weight to price
      const cost = (weightInput / 1000) * pricePerKg;
      if (weightInput >= 1000) {
        const weightInKg = (weightInput / 1000).toFixed(2); // Convert to kilograms
        setResult(`It will cost ₹${cost.toFixed(2)} for ${weightInKg} kg of ${product.toLowerCase()}.`);
      } else {
        setResult(`It will cost ₹${cost.toFixed(2)} for ${weightInput} grams of ${product.toLowerCase()}.`);
      }
    } else if (moneyInput) {
      // Convert money to weight
      const weight = (moneyInput / pricePerKg) * 1000;
      if (weight >= 1000) {
        const weightInKg = (weight / 1000).toFixed(2); // Convert to kilograms
        setResult(`You will get ${weightInKg} kg of ${product.toLowerCase()} for ₹${moneyInput}.`);
      } else {
        setResult(`You will get ${weight.toFixed(2)} grams of ${product.toLowerCase()} for ₹${moneyInput}.`);
      }
    }
  };

  // Reset form when user clicks on any input field
  const handleReset = () => {
    setWeightInput('');
    setMoneyInput('');
    setResult('');
  };

  return (
    
    <div style={styles.container}>
      <h2 style={styles.heading}>CONVERTOR</h2>

      {/* Product dropdown */}
      <div style={styles.row}>
        <label style={styles.label}>PRODUCT</label>
        <select 
          style={styles.input} 
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        >
          <option value="Sugar">Sugar</option>
          <option value="Rice">Rice</option>
        </select>
      </div>

      {/* Input for price */}
      <div style={styles.row}>
        <label style={styles.label}>PRICE</label>
        <input
          type="number"
          placeholder="Enter price"
          value={moneyInput}
          onChange={(e) => setMoneyInput(e.target.value)}
          onClick={handleReset}
          style={styles.input}
        />
      </div>

      {/* Input for grams */}
      <div style={styles.row}>
        <label style={styles.label}>GRAM</label>
        <input
        
          type="number"
          placeholder="Enter grams"
          value={weightInput}
          onChange={(e) => setWeightInput(e.target.value)}
          onClick={handleReset}
          style={styles.input}
        />
      </div>

      {/* Convert button */}
      <div style={styles.buttonRow}>
        <button onClick={handleConvert} style={styles.button}>
          CONVERT
        </button>
      </div>

      {/* Display result */}
      {result && <p style={styles.result}>{result}</p>}
    </div>
  );
};

const styles = {
  container: {
    border: '2px solid black',
    padding: '20px',
    maxWidth: '400px',
    margin: 'auto',
    textAlign: 'center',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  label: {
    flex: '1',
    textAlign: 'left',
  },
  input: {
    flex: '2',
    padding: '5px',
    marginLeft: '10px',
  },
  buttonRow: {
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    width: '100%',
  },
  result: {
    marginTop: '20px',
    fontWeight: 'bold',
  },
};

export default Calculator;
