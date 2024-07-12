import Ingredient from './Ingredient';

const BurgerStack = ({ ingredients, removeFromBurger }) => {
  return (
    <ul>
      {ingredients.length === 0 ? (
        <li>No Ingredients</li>
      ) : (
        ingredients.map((ingredient, index) => (
          <Ingredient
            key={index}
            ingredient={ingredient}
            handleClick={() => removeFromBurger(index)}
            buttonText="X"
          />
        ))
      )}
    </ul>
  );
};

export default BurgerStack;