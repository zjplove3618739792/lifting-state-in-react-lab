import Ingredient from './Ingredient';

const IngredientList = ({ ingredients, addToBurger }) => {
  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <Ingredient
          key={index}
          ingredient={ingredient}
          handleClick={() => addToBurger(ingredient)}
          buttonText="+"
        />
      ))}
    </ul>
  );
};

export default IngredientList;