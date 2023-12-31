import React, { useEffect, useState } from "react";
import CoffeePage from "./components/CoffeePage";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import SignUp from "./components/SignUp";
import CoffeeProfile from "./components/CoffeeProfile";
import CoffeeReview from "./components/CoffeeReview";
import NewCoffeePage from "./components/NewCoffeePage";
import CoffeeEditReview from "./components/CoffeeEditReview";
// import { useNavigate } from "react-router-dom";


function App() {
  const [user, setUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showBest, setShowBest] = useState(false);
  const [showWorst, setShowWorst] = useState(false);
  const [showDecaf, setShowDecaf] = useState(false);
  // const navigate = useNavigate();


  function updateSearch(input) {
    setSearchTerm(input);
  }

  function showAll() {
    setSearchTerm('');
    setShowDecaf(false);
    setShowWorst(false);
    setShowBest(false);
    // navigate("/");

  }

  function switchShowBest() {
    setSearchTerm('');
    setShowDecaf(false);
    setShowWorst(false);
    setShowBest(true);
  }

  function switchShowWorst() {
    setSearchTerm('');
    setShowDecaf(false);
    setShowBest(false);
    setShowWorst(true);
  }

  function switchShowDecaf() {
    setSearchTerm('');
    setShowWorst(false);
    setShowBest(false);
    setShowDecaf(true);
  }

  useEffect(() => {
    fetch("/check-session").then((r) => {
      if (r.status === 204) {
        setUser(null);
      } else if (r.ok) {
          r.json().then((user) => {
          setUser(user);
        });
      }
      else {
        setUser(null);

      }
    });
  }, []);

  return (
    <>
      <Header 
        signedUser={user} 
        setSignedUser={setUser} 
        submitSearch={updateSearch} 
        showAll={showAll} 
        switchShowBest={switchShowBest} 
        showBest={showBest}
        switchShowWorst={switchShowWorst} 
        showWorst={showWorst}
        switchShowDecaf={switchShowDecaf}
        showDecaf={showDecaf}
        />
      <Routes>
        <Route
          path={"/login"}
          element={<SignIn signedUser={user} setSignedUser={setUser} />}
        />
        <Route
          path={"/signup"}
          element={<SignUp signedUser={user} setSignedUser={setUser} />}
        />
        <Route
          path={"/logout"}
          element={<SignOut signedUser={user} setSignedUser={setUser} />}
        />
        <Route path={"/"} element={<CoffeePage signedUser={user} 
          showAll={showAll}
          searchTerm={searchTerm} 
          showBest={showBest} 
          showWorst={showWorst} 
          showDecaf={showDecaf}/>} />
        <Route path={"/new"} element={<NewCoffeePage signedUser={user} />} />
        <Route path={"/:id"} element={<CoffeeProfile signedUser={user} />} />
        <Route
          path={"/:id/new-rate"}
          element={<CoffeeReview signedUser={user} />}
        />
        <Route
          path={"/:id/edit-rate"}
          element={<CoffeeEditReview signedUser={user} />}
        />
      </Routes>
    </>
  );
}

export default App;
