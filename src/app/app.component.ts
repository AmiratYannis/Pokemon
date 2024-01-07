import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true, // Add standalone: true
  imports: [CommonModule] // Add this line

})
export class AppComponent implements OnInit {
  pokemonsList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon;

  ngOnInit(): void {
    console.table(this.pokemonsList);
  }

  selectPokemon(pokemonId: string) {
    const pokemon: Pokemon | undefined = this.pokemonsList.find(pokemon => pokemon.id == +pokemonId);

    if (pokemon) {
      console.log(`You've requested pokemon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    } else {
      console.log(`You've requested a pokemon that doesn't exist`);
    }
  }
}