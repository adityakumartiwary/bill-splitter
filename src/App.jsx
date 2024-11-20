import React from 'react';
import NavigationBar from './components/Navbar';
import BillSplitter from './components/BillSplitter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />
      <main className="flex-1 container mx-auto p-4">
        <BillSplitter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
