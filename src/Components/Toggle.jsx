import React, { useState } from 'react';

function Toggle() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}

export default Toggle;
