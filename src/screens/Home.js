import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousal from "../components/Carousal";

export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItems, setFoodItems] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setFoodItems(response.food_items);
    setFoodCat(response.food_category);
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <div>
        {" "}
        <Navbar />{" "}
      </div>
      <div>
        <Carousal />
      </div>
      <div className="fs-3 m-3">
        {foodCat != []
          ? foodCat.map((data) => {
              return (
                <div className="row mb-3">
                  <div key={data._id} className="">
                    {data.CategoryName}
                  </div>
                  <hr />
                  {foodItems != []
                    ? foodItems
                        .filter(
                          (Items) => Items.CategoryName == data.CategoryName
                        )
                        .map((filterItems) => {
                          return (
                            <div
                              key={filterItems._id}
                              className="col-12 col-md-6 col-lg-3"
                            >
                              <Card
                                foodItem={filterItems}
                                options={filterItems.options[0]}
                              ></Card>
                            </div>
                          );
                        })
                    : ""}
                </div>
              );
            })
          : ""}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

// import React from 'react'
// import Navbar from '../components/Navbar'

// export default function Home() {
//   return (
//     <>
//     <div><Navbar /> </div>
//     <div> body</div>
//     </>
//   )
// }
