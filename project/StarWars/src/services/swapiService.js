
class SwapiService {

  _apiBase = 'https://swapi.co/api';
  _imageBase = 'https://starwars-visualguide.com/assets/img';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`)
    }
    return await res.json();
  }

   getAllPeople = async (page) => {
    const res = await this.getResource(`/people/?page=${page}`);
    return res.results.map(this._transformPerson);
  }

   getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person);
  }

   getAllPlanets = async (page) => {
    const res = await this.getResource(`/planets/?page=${page}`);
    return res.results.map(this._transformPlanet);
  }
  
  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  }
  
  getAllStarships = async (page) => {
    const res = await this.getResource(`/starships/?page=${page}`);
    return res.results.map(this._transformStarship);
  }
  
  getStarship = async (id) => {
    const starship = await this.getResource(`/starships/${id}/`);
    return this._transformStarship(starship);
  }
  
  getPersonImage = (id) => {
    return `${this._imageBase}/characters/${id}.jpg`;
  }

  getStarshipImage = (id) => {
    return `${this._imageBase}/starships/${id}.jpg`;
  }

  getPlanetImage = (id) => {
    return `${this._imageBase}/planets/${id}.jpg`;
  }

  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet = (planet) => {
    
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
      climate: planet.climate,
      gravity: planet.gravity,
      orbitalPeriod: planet.orbital_period,
      terrain: planet.terrain,
      surfaceWater: planet.surface_water,
    }
  }

  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity
    }
  }

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
      hairColor: person.hair_color,
      height: person.height,
      mass: person.mass,
      skinColor: person.skin_color,
    }
  }

}

export default new SwapiService();




