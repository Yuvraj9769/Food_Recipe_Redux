import React from "react";
import styles from "./Readmore.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ErrorMsg from "./ErrorMsg";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

const Readmore = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.recipes);
  let specificRecipe = data.filter((e) => e.id === Number.parseInt(id))[0];
  return (
    <>
      {data.length === 0 ? (
        <ErrorMsg />
      ) : (
        <div className={`${styles["container"]}`}>
          <div className={`${styles["card"]}`}>
            <div className={`${styles["left"]}`}>
              <img src={specificRecipe.image} alt="" />
            </div>
            <div className={`${styles["right"]}`}>
              <h2>{specificRecipe.name}</h2>
              <h3>Ingredients: </h3>
              <ul>
                {specificRecipe.ingredients.map((e, ind) => (
                  <li key={ind}>{e}, </li>
                ))}
              </ul>
              <h3>Instructions: </h3>
              <ul>
                {specificRecipe.instructions.map((e, ind) => (
                  <li key={ind}>{e}, </li>
                ))}
              </ul>
              <p className={`${styles["text-info"]}`}>
                <strong>PrepTimeMinutes: </strong>
                {specificRecipe.prepTimeMinutes}
              </p>
              <p className={`${styles["text-info"]}`}>
                <strong>CookTimeMinutes: </strong>
                {specificRecipe.cookTimeMinutes}
              </p>
              <p className={`${styles["text-info"]}`}>
                <strong>CaloriesPerServing: </strong>
                {specificRecipe.caloriesPerServing}
              </p>
              <p className={`${styles["text-info"]}`}>
                <strong>MealType: </strong>
                {specificRecipe.mealType}
              </p>
              <span className={`${styles["rating"]}`}>
                <p className={`${styles["b"]}`}>Rating: </p>
                {Array.from({ length: 5 }).map((_, index) =>
                  index < Math.floor(specificRecipe.rating) ? (
                    <IoIosStar key={index} />
                  ) : index === Math.floor(specificRecipe.rating) &&
                    specificRecipe.rating % 1 !== 0 ? (
                    <IoIosStarHalf key={index} />
                  ) : (
                    <IoIosStarOutline key={index} />
                  )
                )}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Readmore;
