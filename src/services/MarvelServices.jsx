import useHttp from "../hooks/http.hook";

const useMarvelServices = () => {
   const {loading, request, error, clearError} = useHttp()
   const _apiKey = 'apikey=19eae94341efc00f960466c252912730'
   const _apiBase = 'https://gateway.marvel.com:443/v1/public/'
   const _baseOffset = 0

   const getAllCharacters = async (offset = _baseOffset) => {
      const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`)
      return res;
   }

   const getCharacterById = async (id) => {
      const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
      return _transformCharacter(res.data.results[0]);
   }

   const _transformCharacter = async (res) => {
      return {
         name: res.name,
         thumbnail: res.thumbnail.path + '.' + res.thumbnail.extension,
         description: (res.description.length > 225 ? res.description.substr(0, 225) + '...' : res.description) || (res.description.length === 0 ? 'Sorry, this character has no description.' : res.description),
         homepage: res.urls[0].url,
         wiki: res.urls[1].url,
         comics: res.comics.items
      }
   }

   return {error, loading, getCharacterById, getAllCharacters, clearError}
};

export default useMarvelServices;