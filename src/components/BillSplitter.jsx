import React, { useState } from 'react';

function BillSplitter() {
  const [billAmount, setBillAmount] = useState(0);
  const [splitWays, setSplitWays] = useState(1);
  const [splitAmount, setSplitAmount] = useState(0);

  const calculateSplit = () => {
    const amount = parseFloat(billAmount);
    const ways = parseInt(splitWays);
    if (!isNaN(amount) && !isNaN(ways)) {
      setSplitAmount((amount / ways).toFixed(2));
    } else {
      setSplitAmount("Invalid Input");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Split Your Bill</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2" for="billAmount">Bill Amount</label>
          <input 
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
            type="number" 
            id="billAmount" 
            value={billAmount} 
            onChange={(e) => setBillAmount(e.target.value)} 
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2" for="splitWays">Split Ways</label>
          <input 
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
            type="number" 
            id="splitWays" 
            value={splitWays} 
            onChange={(e) => setSplitWays(e.target.value)} 
          />
        </div>
        <button 
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
          type="button" 
          onClick={calculateSplit}
        >
          Calculate
        </button>
        <p className="text-lg font-bold">Split Amount: ${splitAmount}</p>
      </div>
    </div>
  );
}

export default BillSplitter;
