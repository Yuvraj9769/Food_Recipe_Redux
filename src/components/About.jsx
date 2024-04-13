import React from "react";
import style from "./About.module.css";

const About = () => {
  return (
    <div className={`${style["About"]}`}>
      <div className={`${style["sub-about"]}`}>
        <h2>About Get's Recipe</h2>
        <p>
          Welcome to Get's Recipe, your go-to destination for all things
          culinary! Our mission is to inspire and empower home cooks of all
          skill levels to explore, create, and share delicious meals with
          confidence.
        </p>

        <h3>Our Vision</h3>
        <p>
          We envision a world where everyone feels confident and empowered to
          cook delicious and nutritious meals at home. Through our platform, we
          strive to make cooking more accessible, enjoyable, and rewarding for
          people of all backgrounds.
        </p>

        <h3>What We Offer</h3>
        <ul>
          <li>
            <strong>Curated Recipe Collection:</strong> Explore thousands of
            meticulously curated recipes spanning various cuisines, dietary
            preferences, and cooking skill levels.
          </li>
          <li>
            <strong>Meal Planning Tools:</strong> Say goodbye to mealtime stress
            with our intuitive meal planning tools. Plan your weekly menus,
            create shopping lists, and streamline your cooking process.
          </li>
          <li>
            <strong>Cooking Tips and Tricks:</strong> Whether you're looking to
            sharpen your knife skills, master a new cooking technique, or learn
            about different ingredients, our comprehensive guides and tutorials
            have you covered.
          </li>
          <li>
            <strong>Community Support:</strong> Connect with fellow food
            enthusiasts, share your cooking triumphs, and seek advice from our
            vibrant community of home cooks.
          </li>
        </ul>

        <h3>Get Involved</h3>
        <p className={`${style["ptext"]}`}>
          Join the <strong>Get's Recipe</strong> community today and embark on a
          culinary adventure like never before. Whether you're here to discover
          new recipes, improve your cooking skills, or connect with like-minded
          individuals, we're thrilled to have you on board.
        </p>
        <p>Happy cooking!</p>
      </div>
    </div>
  );
};

export default About;
