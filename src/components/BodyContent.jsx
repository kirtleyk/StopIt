import React from 'react';
import StockList from './StockList';
import StockDetail from './StockDetail';

const BodyContent = () => {
  return (
      <div className="row" style={{ border: "1px solid green"}}>
        <div className="col" style={{ border: "1px solid red", width: "40%" }} >
          <StockList />
        </div>

        <div className="col" style={{ border: "1px solid blue", width: "40%"}}>
          <StockDetail />
        </div>
      </div>
  );
}

export default BodyContent;