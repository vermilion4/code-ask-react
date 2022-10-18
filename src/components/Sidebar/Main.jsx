// FORMAT FOR SIDEBAR MAIN COMPONENT - SEE ASK QUESTIONS FOR DEMO

import { useState } from 'react';

export const Main = () => {
  const [loaded, setLoaded] = useState(true);
  const closeMain = {
    marginLeft: '250px',
  };
  const openMain = {
    marginLeft: '85px',
  };
  function load() {
    setLoaded(
      !document.querySelector('.sidebar').classList.contains('openSidebar')
    );
  }
  document.addEventListener('mousemove', load);
  return (
    <div id='main' style={loaded ? openMain : closeMain}>
      <p>Put all your content here</p>
    </div>
  );
};
