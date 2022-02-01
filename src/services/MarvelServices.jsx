class MarvelServices {
   _apiKey = 'apikey=19eae94341efc00f960466c252912730';
   _apiBase = 'https://gateway.marvel.com:443/v1/public/';
   _baseOffset = 0;

   getResource = async (url) => {
      const res = await fetch(url);

      if (!res.ok) {
         throw new Error(`Fetching ${url} failed`);
      }

      return await res.json();
   }

   getAllCharacters = async (offset = this._baseOffset) => {
      const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=${offset}&${this._apiKey}`);
      return res;
   }

   getCharacterById = async (id) => {
      const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
      return this._transformCharacter(res.data.results[0]);
   }

   _transformCharacter = async (res) => {
      return {
         name: res.name,
         thumbnail: res.thumbnail.path + '.' + res.thumbnail.extension,
         description: (res.description.length > 225 ? res.description.substr(0, 225) + '...' : res.description) || (res.description.length === 0 ? 'Sorry, this character has no description.' : res.description),
         homepage: res.urls[0].url,
         wiki: res.urls[1].url,
         comics: res.comics.items
      }
   }
};

export default MarvelServices;