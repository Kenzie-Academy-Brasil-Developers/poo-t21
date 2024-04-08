// POO - Programação Orientada a Objetos
// Das classes - encapsula variáveis e métodos (funções)
// Organização de código
// Javascript / Typescript

import { IRecipe, TRecipeCreateData, TRecipeUpdateData } from "./omitpickpartial";

//Toda classe também inicie com uma letra maiúscula
//PascalCase

/*
let firstName = "Alex"

function sayHello(){
    console.log(firstName);
}
*/

// this - é utilizado para se referir a própria clases e consegue acessar variáveis e métodos

// Planta de um "objeto"
class Person {
   name: string; // Qualquer nome
   age: number; // Qualquer idade

   //um método que "executa na inicialização de uma classe"
   constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
   }

   sayHello() {
      console.log(`Olá, meu nome é ${this.name}!`);
   }
}

// A classe aceita múltiplas instâncias
const personA = new Person("Alex", 33);
const personB = new Person("Julyanna", 18);

class RecipeService {
   //Caso o valor deva ser o mesmo em todas as instâncias, atribuir valor dentro da classe
   recipeList: IRecipe[];
   id = 1;

   // Método executado na inicialização da classe (instância)
   constructor(recipeList: IRecipe[] = []) {
      this.recipeList = recipeList;
   }

   create(data: TRecipeCreateData): IRecipe {
      const now = new Date();

      const newRecipe: IRecipe = {
         id: this.id,
         ...data,
         created_at: now,
      };

      this.recipeList.push(newRecipe);

      this.id++;

      return newRecipe;
   }

   remove(removingId: number): string {
      const index = this.recipeList.findIndex((recipe) => recipe.id === removingId);

      if (index !== -1) {
         this.recipeList.splice(index, 1);
         return "Recipe deleted successfully.";
      }

      return "Recipe not found.";
   }

   update(updatingId: number, data: TRecipeUpdateData): IRecipe | string {
      const currentRecipe = this.recipeList.find((recipe) => recipe.id === updatingId);

      if (!currentRecipe) {
         return "Recipe not found.";
      }

      const now = new Date();

      const updateRecipe: IRecipe = {
         ...currentRecipe,
         ...data,
         updated_at: now
      };

      const index = this.recipeList.findIndex((recipe) => recipe.id === updatingId);

      this.recipeList.splice(index, 1, updateRecipe);

      return updateRecipe;
   }
}

const recipeList = new RecipeService();