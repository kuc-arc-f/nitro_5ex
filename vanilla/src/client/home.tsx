import ReactDOM from 'react-dom/client'
import React from 'react'

const Page: React.FC = () => {
  return (
  <div className="text-3xl"><h1>home</h1> 
    <hr />
    <span><a href="/about">[ about ]</a>
    </span>
  </div>
  );
};
ReactDOM.createRoot(document.getElementById('app')).render(
  <div>
    <Page />
  </div>
);
