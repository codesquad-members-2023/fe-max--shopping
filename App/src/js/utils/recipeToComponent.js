import { Component } from "../components/Component.js";

export function recipeToComponent(recipe) {
  const component = new Component("div");

  component.appendChildComponent(recipe);
  component.render();

  component.children[0].recipe = recipe;
  return component.children[0];
}
