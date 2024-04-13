import React from "react";
import { useSelector } from "react-redux";
import styles from "./RecipeDetails.module.css";
import { PiSpinnerGapBold } from "react-icons/pi";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { nanoid } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";
import { fetchRecipies } from "../features/RecipeSlice/RecipeSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

const RecipeDetails = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(async () => {
      let data = await axios.get("https://dummyjson.com/recipes");
      data = data?.data?.recipes;
      dispatch(fetchRecipies(data));
    }, 1000);
  }, []);
  const data = useSelector((state) => state.recipes);
  return (
    <div className={`${styles["container"]}`}>
      <h1 className={`${styles["recipe"]}`}>Recipes</h1>
      {data.length === 0 ? (
        <span className={`${styles["spinner"]}`}>
          <PiSpinnerGapBold />
        </span>
      ) : (
        <div className={`${styles["card-container"]}`}>
          {data.map((e, i) => (
            <div className={`${styles["card"]}`} key={nanoid()}>
              <img src={e.image} alt="img" />
              <p className={`${styles["name"]}`}>{e.name}</p>
              <ul className={`${styles["list-ingredients"]}`}>
                <h3>Ingredients: </h3>
                <span>
                  {e.ingredients.map((ele, j) => (
                    <li key={nanoid()}>{ele}, </li>
                  ))}
                </span>
              </ul>
              <ul className={`${styles["list-instructions"]}`}>
                <h3>Instructions: </h3>
                <span>
                  {e.instructions.map((ele, k) => (
                    <li key={nanoid()}>{ele}, </li>
                  ))}
                </span>
              </ul>
              {e.rating && (
                <p className={`${styles["cuisine"]}`}>
                  <span>Rating: </span>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={nanoid()}>
                      {index < Math.floor(e.rating) ? (
                        <IoIosStar key={nanoid()} />
                      ) : index === Math.floor(e.rating) &&
                        e.rating % 1 !== 0 ? (
                        <IoIosStarHalf key={nanoid()} />
                      ) : (
                        <IoIosStarOutline key={nanoid()} />
                      )}
                    </span>
                  ))}
                </p>
              )}

              <Link to={`/Readmore/${e.id}`}>
                <button>Read More</button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;
