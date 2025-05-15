import React, { useState } from 'react';
import './ProductDescriptionGenerator.css';

const ProductDescriptionGenerator = () => {
  const [productTitle, setProductTitle] = useState('');
  const [productFeatures, setProductFeatures] = useState('');
  const [generatedDescription, setGeneratedDescription] = useState('');
  const [seoInsights, setSeoInsights] = useState({
    keywordDensity: 0,
    readabilityScore: 0,
  });

  const handleGenerate = () => {
    // Placeholder for actual generation logic
    setGeneratedDescription('This is a sample generated description. The actual AI integration will be implemented later.');
    setSeoInsights({
      keywordDensity: 2.5,
      readabilityScore: 85,
    });
  };

  return (
    <div className="product-description-generator">
      <header className="generator-header">
        <h1>AI-Generated Product Descriptions</h1>
        <p className="subtitle">Create engaging, SEO-friendly descriptions from product features</p>
      </header>

      <div className="main-content">
        <div className="input-section">
          <div className="section-title">Input Details</div>
          <div className="input-group">
            <label htmlFor="productTitle">Product Title</label>
            <input
              type="text"
              id="productTitle"
              value={productTitle}
              onChange={(e) => setProductTitle(e.target.value)}
              placeholder="Enter your product title"
            />
          </div>

          <div className="input-group">
            <label htmlFor="productFeatures">Product Features</label>
            <textarea
              id="productFeatures"
              value={productFeatures}
              onChange={(e) => setProductFeatures(e.target.value)}
              placeholder="Enter your product features (one per line)"
              rows="8"
            />
          </div>

          <button 
            className="generate-button" 
            onClick={handleGenerate}
            disabled={!productTitle || !productFeatures}
          >
            Generate Description
          </button>
        </div>

        <div className="output-section">
          <div className="section-title">Generated Content</div>
          <div className="generated-content">
            {generatedDescription || 'Your generated description will appear here...'}
          </div>

          {generatedDescription && (
            <div className="seo-insights">
              <div className="section-title">SEO Insights</div>
              <div className="insights-grid">
                <div className="insight-item">
                  <span className="insight-label">Keyword Density</span>
                  <span className="insight-value">{seoInsights.keywordDensity}%</span>
                </div>
                <div className="insight-item">
                  <span className="insight-label">Readability Score</span>
                  <span className="insight-value">{seoInsights.readabilityScore}/100</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDescriptionGenerator; 