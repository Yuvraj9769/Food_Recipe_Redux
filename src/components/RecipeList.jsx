import React from "react";
import styles from "./RecipeList.module.css";
import { useSelector } from "react-redux";
import { PiSpinnerGapBold } from "react-icons/pi";
import { fetchRecipies } from "../features/RecipeSlice/RecipeSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(async () => {
      let data = await axios.get("https://dummyjson.com/recipes");
      data = data?.data?.recipes;
      dispatch(fetchRecipies(data));
    }, 1000);
  }, []);

  const recipes = useSelector((state) => state.recipes);
  return (
    <>
      {recipes.length === 0 ? (
        <span className={`${styles["spinner"]}`}>
          <PiSpinnerGapBold />
        </span>
      ) : (
        <div className={`${styles["recipelist-text"]}`}>
          <div className={`${styles["recipelist-div"]}`}>
            <h1>Recipy List: </h1>
            <ul className={`${styles["container"]}`}>
              {recipes.map((e, i) => (
                <Link to={`/Readmore/${e.id}`} key={i}>
                  <li>{e?.name}</li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default RecipeList;
