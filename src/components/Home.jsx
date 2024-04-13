import React, { useRef } from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Home = () => {
  const mainDiv = useRef();

  useGSAP(
    () => {
      gsap.from("#maindiv > *", {
        opacity: 0,
        scale: 0,
        stagger: 0.5,
      });
    },
    { scope: mainDiv }
  );

  return (
    <div className={`${styles["home-container"]}`}>
      <div className={`${styles["home-sub-div"]}`} id="maindiv" ref={mainDiv}>
        <div className={`${styles["msgdiv"]}`}>
          <h1>Welcome to Get's Recipe!</h1>
          <p>
            Explore a world of culinary delights right at your fingertips.
            Whether you're a seasoned chef or a novice in the kitchen, our
            curated collection of recipes has something for everyone. From
            mouthwatering mains to delectable desserts, get ready to embark on a
            gastronomic journey like never before.
          </p>
        </div>
        <section id={`${styles["discover"]}`}>
          <h2>Discover New Flavors:</h2>
          <ul>
            <li>
              With thousands of recipes at your fingertips, explore new flavors
              and cuisines from around the globe.
            </li>
            <li>
              Our intuitive search feature allows you to filter recipes based on
              ingredients, cooking time, and dietary restrictions.
            </li>
            <li>
              From classic comfort foods to exotic dishes, there's always
              something new to discover and delight your taste buds.
            </li>
            <li>
              Explore trending ingredients and cooking techniques to stay ahead
              of the culinary curve.
            </li>
            <li>
              Whether you're a vegetarian, vegan, or omnivore, we have recipes
              tailored to suit your dietary preferences.
            </li>
          </ul>
        </section>

        <section id={`${styles["save"]}`}>
          <h2>Save Your Favorites:</h2>
          <ul>
            <li>
              Found a recipe you love? Save it to your personal collection for
              quick access later.
            </li>
            <li>
              Never lose track of your favorite dishes again. Our bookmarking
              feature makes it easy to organize and categorize recipes.
            </li>
            <li>
              Create multiple recipe collections to suit different occasions,
              such as weeknight dinners, special occasions, or holiday feasts.
            </li>
            <li>
              Share your favorite recipes with friends and family via social
              media or email.
            </li>
            <li>
              Need to make adjustments to a recipe? Our customizable ingredient
              lists make it easy to adapt recipes to suit your taste.
            </li>
          </ul>
        </section>

        <section id={`${styles["plan"]}`}>
          <h2>Plan Your Meals:</h2>
          <ul>
            <li>
              Say goodbye to mealtime stress with our meal planning tools.
            </li>
            <li>
              Plan your weekly menus with ease, taking the guesswork out of what
              to cook each day.
            </li>
            <li>
              Our drag-and-drop interface makes it simple to arrange meals and
              create shopping lists.
            </li>
            <li>
              Add recipes directly from your collection to your meal plan,
              making meal prep a breeze.
            </li>
            <li>
              Receive automated reminders for upcoming meals to keep you on
              track with your cooking schedule.
            </li>
          </ul>
        </section>

        <section id={`${styles["inspire"]}`}>
          <h2>Get Inspired:</h2>
          <ul>
            <li>
              Feeling uninspired in the kitchen? Let us spark your creativity
              with our curated selection of featured recipes.
            </li>
            <li>
              Explore seasonal ingredients and holiday-themed dishes to add
              excitement to your cooking repertoire.
            </li>
            <li>
              Check out our cooking tips and tricks for expert advice on
              everything from knife skills to flavor pairings.
            </li>
            <li>
              Watch video tutorials from renowned chefs to learn new techniques
              and recipes.
            </li>
            <li>
              Participate in cooking challenges and themed recipe contests to
              test your skills and win prizes.
            </li>
          </ul>
        </section>

        <section id={`${styles["community"]}`}>
          <h2>Join Our Community:</h2>
          <ul>
            <li>
              Connect with like-minded foodies from around the world in our
              vibrant community forums.
            </li>
            <li>
              Share your cooking triumphs and kitchen fails, and learn from
              others' experiences.
            </li>
            <li>
              Ask questions, seek advice, and troubleshoot cooking problems with
              our knowledgeable community members.
            </li>
            <li>
              Join special interest groups based on your culinary interests,
              such as baking, grilling, or international cuisine.
            </li>
            <li>
              Engage in lively discussions, swap recipes, and make new friends
              who share your passion for food.
            </li>
          </ul>
        </section>

        <p className={`${styles["endtext"]}`}>
          Start your culinary adventure today with
          <strong>Get's Recipe.</strong>
          Happy cooking!
        </p>

        <Link to="/Addrecipy">
          <button className={`${styles["add-recipy-btn"]}`}>
            Add your own recipe
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
