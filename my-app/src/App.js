import React from 'react';

function App() {
  const handleClick = () => {
    alert("hello");
  };

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

export default App;
