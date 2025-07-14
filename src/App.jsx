import SearchForm from './components/SearchForm';
import atm from './images/atmosphere.jpg';

export default function App() {
  return (
    <section
      className={`relative min-h-screen w-full bg-cover bg-center bg-no-repeat`}
      style={{ backgroundImage: `url(${atm})` }}
    >
      <div className='absolute top-0 flex h-full w-full flex-col items-center justify-center gap-4 bg-black/20'>
        <SearchForm />
      </div>
    </section>
  );
}
