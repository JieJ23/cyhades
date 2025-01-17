import React, { createContext, useContext, useState, useEffect } from "react";
// Create a context to hold the fetched data
const DataContext = createContext();
// Create a custom hook to consume the context
export const useData = () => useContext(DataContext);

// Create a provider component to wrap your application and provide the data
export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const response = await fetch(
          `https://script.google.com/macros/s/AKfycbxpzr726LzPiTop6UYQj06AAtcHXFPUC9tU1KZJwi3bKVLvYsUEZeUXFiHasKnC6h7U/exec`
        );
        const data = await response.json();
        const posts = await data.filter((obj) => obj.v === "y");
        setPosts(posts);
        setLoader(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoader(false);
      }
    }

    load();
  }, []);

  return (
    <DataContext.Provider value={{ posts, loader }}>
      {children}
    </DataContext.Provider>
  );
};
