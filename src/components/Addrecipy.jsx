import React, { useRef, useState } from "react";
import style from "./Addrecipy.module.css";
import { useDispatch } from "react-redux";
import { addRecipe } from "../features/RecipeSlice/RecipeSlice";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Addrecipy = () => {
  const form = useRef();

  useGSAP(
    () => {
      const arrColor = [
        "#e6194b",
        "#3cb44b",
        "#ffe119",
        "#4363d8",
        "#f58231",
        "#911eb4",
        "#46f0f0",
        "#f032e6",
        "#bcf60c",
        "#fabebe",
        "#008080",
        "#e6beff",
        "#9a6324",
        "#fffac8",
        "#800000",
        "#aaffc3",
        "#808000",
        "#ffd8b1",
        "#000075",
        "#808080",
        "#ffffff",
      ];

      gsap.to(form.current, {
        repeat: -1,
        yoyo: true,
        keyframes: arrColor.map((color) => ({
          borderColor: color,
          duration: 3,
        })),
      });

      gsap.to(".label", {
        repeat: -1,
        yoyo: true,
        keyframes: arrColor.map((color) => ({
          color: color,
          duration: 3,
        })),
      });
    },
    { scope: form.current }
  );

  const [count, setCount] = useState(31);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const name = useRef("");
  const ingredients = useRef("");
  const instructions = useRef("");
  const Prep_Time = useRef("");
  const Cook_Time = useRef("");
  const Servings = useRef("");
  const Difficulty = useRef("");
  const Cuisine = useRef("");
  const Calories = useRef("");
  const Tags = useRef("");
  const Image = useRef("");
  const Rating = useRef("");
  const Review_Count = useRef("");
  const Meal_Type = useRef("");

  const getData = (e) => {
    e.preventDefault();
    if (
      name.current.value.trim() !== "" &&
      ingredients.current.value.trim() !== "" &&
      instructions.current.value.trim() !== "" &&
      Prep_Time.current.value.trim() !== "" &&
      Cook_Time.current.value.trim() !== "" &&
      Servings.current.value.trim() !== "" &&
      Difficulty.current.value.trim() !== "" &&
      Cuisine.current.value.trim() !== "" &&
      Calories.current.value.trim() !== "" &&
      Tags.current.value.trim() !== "" &&
      Image.current.value.trim() !== "" &&
      Rating.current.value.trim() !== "" &&
      Review_Count.current.value.trim() !== "" &&
      Meal_Type.current.value.trim() !== ""
    ) {
      const randomId = Math.floor(Math.random() * 1500);

      const objData = {
        id: count,
        name: name.current.value,
        ingredients: ingredients.current.value.split(",").map((e) => e.trim()),
        instructions: instructions.current.value
          .split(",")
          .map((e) => e.trim()),
        prepTimeMinutes: Number(Prep_Time.current.value),
        cookTimeMinutes: Number(Cook_Time.current.value),
        servings: Number(Servings.current.value),
        difficulty: Difficulty.current.value,
        cuisine: Cuisine.current.value,
        caloriesPerServing: Number(Calories.current.value),
        tags: Tags.current.value.split(",").map((e) => e.trim()),
        userId: randomId,
        image: Image.current.value,
        rating: Number.parseInt(Rating.current.value),
        reviewCount: Number(Review_Count.current.value),
        mealType: Meal_Type.current.value.split(",").map((e) => e.trim()),
      };
      dispatch(addRecipe(objData));
      setCount(count + 1);

      name.current.value = "";
      ingredients.current.value = "";
      instructions.current.value = "";
      Prep_Time.current.value = "";
      Cook_Time.current.value = "";
      Servings.current.value = "";
      Difficulty.current.value = "";
      Cuisine.current.value = "";
      Calories.current.value = "";
      Tags.current.value = "";
      Image.current.value = "";
      Rating.current.value = "";
      Review_Count.current.value = "";
      Meal_Type.current.value = "";

      toast.success("Recipe Added Successfully!");

      setTimeout(() => {
        navigate("/RecipeDetails");
      }, 1000);
    } else {
      toast.error("Please fill in all fields");
    }
  };
  return (
    <div className={`${style["addrecipy-cont"]}`}>
      <form ref={form}>
        <div className={`${style["forminsideText"]}`}>
          <label className="label" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            ref={name}
            placeholder="Enter your name here.."
          />
        </div>

        <div className={`${style["forminsideText"]}`}>
          <label className="label" htmlFor="ingredients">
            Ingredients:
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            rows="6"
            cols="50"
            placeholder="Add ingredient by separating them with commas..."
            ref={ingredients}
          ></textarea>
        </div>

        <div className={`${style["forminsideText"]}`}>
          <label className="label" htmlFor="instructions">
            Instructions:
          </label>
          <textarea
            id="instructions"
            name="instructions"
            rows="10"
            cols="50"
            placeholder="Add instructions here by separating them with commas..."
            ref={instructions}
          ></textarea>
        </div>

        <div className={`${style["forminsideText"]}`}>
          <label className="label" htmlFor="prepTimeMinutes">
            Prep Time (minutes):
          </label>
          <input
            type="number"
            id="prepTimeMinutes"
            name="prepTimeMinutes"
            min="0"
            ref={Prep_Time}
          />
        </div>

        <div className={`${style["forminsideText"]}`}>
          <label className="label" htmlFor="cookTimeMinutes">
            Cook Time (minutes):
          </label>
          <input
            type="number"
            id="cookTimeMinutes"
            name="cookTimeMinutes"
            min="0"
            ref={Cook_Time}
          />
        </div>

        <div className={`${style["forminsideText"]}`}>
          <label className="label" htmlFor="servings">
            Servings:
          </label>
          <input
            type="number"
            id="servings"
            name="servings"
            placeholder="add serving here"
            ref={Servings}
          />
        </div>

        <div className={`${style["forminsideText"]}`}>
          <label className="label" htmlFor="difficulty">
            Difficulty:
          </label>
          <input
            type="text"
            id="difficulty"
            name="difficulty"
            placeholder="add  difficulty level here"
            ref={Difficulty}
          />
        </div>

        <div className={`${style["forminsideText"]}`}>
          <label className="label" htmlFor="cuisine">
            Cuisine:
          </label>
          <input
            type="text"
            id="cuisine"
            name="cuisine"
            placeholder="add cuisine here"
            ref={Cuisine}
          />
        </div>

        <div className={`${style["forminsideText"]}`}>
          <label className="label" htmlFor="caloriesPerServing">
            Calories per Serving:
          </label>
          <input
            type="number"
            id="caloriesPerServing"
            name="caloriesPerServing"
            placeholder="Add calories per serving here"
            ref={Calories}
          />
        </div>

        <div className={`${style["forminsideText"]}`}>
          <label className="label" htmlFor="tags">
            Tags:
          </label>
          <input
            type="text"
            id="tags"
            name="tags"
            placeholder="Add tags here by separating with commas."
            ref={Tags}
          />
        </div>

        <div className={`${style["forminsideText"]}`}>
          <label className="label" htmlFor="image">
            Image URL:
          </label>
          <input
            type="url"
            id="image"
            name="image"
            placeholder="Paste image url here"
            ref={Image}
          />
        </div>

        <div className={`${style["forminsideText"]}`}>
          <label className="label" htmlFor="rating">
            Rating:
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            min="0"
            max="5"
            step="0.1"
            ref={Rating}
          />
        </div>

        <div className={`${style["forminsideText"]}`}>
          <label className="label" htmlFor="reviewCount">
            Review Count:
          </label>
          <input
            type="number"
            id="reviewCount"
            name="reviewCount"
            placeholder="Number of reviews"
            ref={Review_Count}
          />
        </div>

        <div className={`${style["forminsideText"]}`}>
          <label className="label" htmlFor="mealType">
            Meal Type:
          </label>
          <input
            type="text"
            id="mealType"
            name="mealType"
            placeholder="Enter meal type here"
            ref={Meal_Type}
          />
        </div>

        <button
          type="submit"
          className={`${style["submit-btn"]}`}
          onClick={getData}
        >
          Submit
        </button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default Addrecipy;
