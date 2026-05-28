import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import NewsBoard from "./NewsBoard/NewsBoard";
import Footer from "./Components/Footer/Footer";

const App = () => {

  const [category, setCategory] = useState("general");

  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category} />
      <Footer />
    </div>
  );
};

export default App;
