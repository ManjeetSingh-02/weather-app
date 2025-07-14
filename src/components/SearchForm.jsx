import axios from 'axios';
import { useQueryStore } from '../stores/backgroundStore';

export default function SearchForm() {
  // get setQueryResult function from background store
  const { setQueryResult } = useQueryStore();

  async function handleSubmit(e) {
    // prevent default form submission
    e.preventDefault();

    // variable to hold city name
    const cityName = e.target['city-name'].value.trim();

    // check if the input is empty
    if (cityName === '') alert('Please enter a city name');
    else {
      // clear previous query result
      setQueryResult(null);

      // call open weather API
      const { data } = await axios.request({
        method: 'GET',
        url: import.meta.env.VITE_WEATHER_API_URL,
        headers: {
          'Content-Type': 'application/json',
        },
        params: {
          key: import.meta.env.VITE_WEATHER_API_KEY,
          q: cityName,
        },
      });

      // set query result in the store
      setQueryResult(data);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col items-start gap-2 text-2xl text-white'
    >
      <label htmlFor='city-name'>Enter a city name</label>
      <input
        type='text'
        id='city-name'
        name='city-name'
        className='w-auto rounded-tr-2xl rounded-bl-2xl border bg-transparent px-4 py-2 outline-none focus:bg-black/50'
      />
    </form>
  );
}
