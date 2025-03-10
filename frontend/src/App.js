import React, { useState } from 'react';

function App() {
  const [preferences, setPreferences] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const desiredEffects = preferences.split(',').map(effect => effect.trim());
    try {
      const response = await fetch('http://localhost:5001/recommendations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ desiredEffects })
      });
      const data = await response.json();
      if (response.ok) {
        setRecommendations(data);
      } else {
        console.error(data.error);
        setRecommendations([]);
      }
    } catch (error) {
      console.error('Error fetching recommendations:', error);
      setRecommendations([]);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Product Recommendation System</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter desired effects (e.g., relaxation, energy):
          <input
            type="text"
            value={preferences}
            onChange={(e) => setPreferences(e.target.value)}
            style={{ margin: '0 10px', padding: '5px' }}
            placeholder="Comma-separated effects"
          />
        </label>
        <button type="submit" style={{ padding: '5px 10px' }}>Get Recommendations</button>
      </form>
      <div style={{ marginTop: '20px' }}>
        <h2>Recommendations</h2>
        {recommendations.length > 0 ? (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {recommendations.map(product => (
              <li key={product.id} style={{ marginBottom: '10px' }}>
                <strong>{product.name}</strong> (${product.price})<br />
                {product.enhancedDescription}
              </li>
            ))}
          </ul>
        ) : (
          <p>No recommendations yet. Try entering some effects!</p>
        )}
      </div>
    </div>
  );
}

export default App;