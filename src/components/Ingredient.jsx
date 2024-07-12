

const Ingredient = ({ ingredient, handleClick, buttonText }) => {
    return (
      <li style={{ backgroundColor: ingredient.color }}>
        {ingredient.name}
        <button onClick={handleClick}>{buttonText}</button>
      </li>
    );
  };
  
  export default Ingredient;
  