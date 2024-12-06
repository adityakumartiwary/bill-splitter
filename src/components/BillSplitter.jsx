import { useState } from "react";

const App = () => {
  const [categories, setCategories] = useState([
    { name: "House Rent", total: 0 },
    { name: "Food", total: 0 },
    { name: "Water", total: 0 },
    { name: "Electricity", total: 0 },
    { name: "Internet", total: 0 },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("House Rent");
  const [newCategory, setNewCategory] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [numPeople, setNumPeople] = useState("");
  const [tipPercentage, setTipPercentage] = useState(0);
  const [splitAmount, setSplitAmount] = useState(null);

  // Calculate split amount
  const calculateSplit = () => {
    const amount = parseFloat(expenseAmount);
    const people = parseInt(numPeople);
    const tip = (amount * tipPercentage) / 100;
    const totalAmount = amount + tip;

    if (!amount || !people || people <= 0) {
      setSplitAmount("Please enter valid values!");
      return;
    }

    const result = totalAmount / people;
    setSplitAmount(result.toFixed(2));

    // Update total for selected category
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.name === selectedCategory
          ? { ...category, total: category.total + totalAmount }
          : category
      )
    );

    setExpenseAmount("");
    setNumPeople("");
    setTipPercentage(0);
  };

  // Add a new custom category
  const addCategory = () => {
    if (newCategory.trim()) {
      setCategories([...categories, { name: newCategory.trim(), total: 0 }]);
      setNewCategory("");
    }
  };

  // Calculate the total of all expenses
  const totalExpenses = categories.reduce((sum, category) => sum + category.total, 0);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 h-screen bg-gray-200 p-4">
        <h2 className="text-xl font-bold mb-4">Expense Categories</h2>
        <ul className="mb-4">
          {categories.map((category, index) => (
            <li
              key={index}
              className={`cursor-pointer p-2 rounded ${
                selectedCategory === category.name
                  ? "bg-blue-500 text-white"
                  : "hover:bg-blue-100"
              }`}
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.name} - ₹{category.total.toFixed(2)}
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="w-full px-2 py-1 border rounded mb-2"
            placeholder="Add new category"
          />
          <button
            onClick={addCategory}
            className="w-full bg-blue-500 text-white py-1 rounded hover:bg-blue-600 transition"
          >
            Add Category
          </button>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-bold">Total Expenses:</h3>
          <p className="text-xl text-blue-600 font-bold">₹{totalExpenses.toFixed(2)}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center bg-gray-100">
        <div className="p-8 bg-white shadow-lg rounded-lg w-96">
          <h1 className="text-2xl font-bold text-center mb-6">
            Bill Splitter App
          </h1>

          <p className="text-gray-700 font-medium mb-4">
            Selected Category:{" "}
            <span className="text-blue-600 font-bold">{selectedCategory}</span>
          </p>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Expense Amount
            </label>
            <input
              type="number"
              value={expenseAmount}
              onChange={(e) => setExpenseAmount(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter expense amount"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Number of People
            </label>
            <input
              type="number"
              value={numPeople}
              onChange={(e) => setNumPeople(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter number of people"
            />
          </div>

          

          <button
            onClick={calculateSplit}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Split Bill
          </button>

          {splitAmount !== null && (
            <div className="mt-6 text-center">
              {isNaN(splitAmount) ? (
                <p className="text-red-500">{splitAmount}</p>
              ) : (
                <p className="text-lg font-bold">
                  Each person owes:{" "}
                  <span className="text-blue-600">₹{splitAmount}</span>
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
