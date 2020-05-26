import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const Burger =(props) =>{

  let transformedIngredients= Object.keys(props.ingredients)
        .map(igkey =>{
          return [... Array(props.ingredients[igkey])].map((_,i)=>{
            return <BurgerIngredient key={igkey + i} type={igkey}/>
          })
        })
        .reduce((arr,el)=>{
          return arr.concat(el)
        },[]);
        console.log(transformedIngredients);

        if(transformedIngredients.length ===0) {
          transformedIngredients =<p> please add ingredients </p>
        }


  return(

    <div >
      <p> in burger </p>
   <BurgerIngredient type="bread-top" />
       {transformedIngredients}
   <BurgerIngredient type="bread-bottom" />

    </div>
  );
}

export default Burger;
