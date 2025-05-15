import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductForm.css';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    features: []
  });
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleTitleChange = (e) => {
    setFormData({
      ...formData,
      title: e.target.value
    });
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 2000); 

      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleFeaturesChange = (e) => {
    const features = e.target.value.split(',').map(feature => feature.trim());
    setFormData({
      ...formData,
      features
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResponse(null);

    try {
      const response = await axios.post('https://web-production-7bad.up.railway.app/getResponse', formData);
      setResponse(response.data);
    } catch (err) {
      setError('Error submitting form: ' + err.message);
    }
  };

  return (
    <div className="product-form-container">
      <header className="header">
        <div className="header-content">
          <div className="logo-container">
            <div className="ai-logo">
              <span className="ai-text">DI</span>
            </div>
            <div className="title-container">
              <h1>DescriptoAI</h1>
              <p className="subtitle">Create amazing product descriptions with AI</p>
            </div>
          </div>
        </div>
      </header>
      
      <div className="main-content">
        <div className="form-section">
          <h2>Product Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Product Title:</label>
              <input
                type="text"
                id="title"
                value={formData.title}
                onChange={handleTitleChange}
                placeholder="Enter product title"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="features">Features (comma-separated):</label>
              <input
                type="text"
                id="features"
                value={formData.features.join(', ')}
                onChange={handleFeaturesChange}
                placeholder="Enter features separated by commas"
                required
              />
            </div>

            <button type="submit">Generate</button>
          </form>

          {error && <div className="error">{error}</div>}
        </div>

       
          <div className="response-section">
            <div className="response">
              <h3>Short Description</h3>
              {response && ( <pre>
                {JSON.stringify(response)}
         
                </pre>   )}
            </div>
          </div>
      </div>
    </div>
  );
};

export default ProductForm; 