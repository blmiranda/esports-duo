import { MagnifyingGlassPlus } from 'phosphor-react';
import { GameBanner } from './components/GameBanner';
import './styles/main.css';
import logoImg from './assets/logo-esports-duo.svg';

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <header>
        <img src={logoImg} alt="" />
      </header>

      <main className="flex flex-col items-center">
        <h1 className="text-6xl text-white font-black mt-20">
          Your <span className="text-transparent bg-duo-gradient bg-clip-text">duo</span> is here.
        </h1>

        <div className="grid grid-cols-6 gap-6 mt-16">
          <GameBanner bannerUrl="/game-1.png" title="League of Legends" adsCount={4} />
          <GameBanner bannerUrl="/game-1.png" title="League of Legends" adsCount={4} />
          <GameBanner bannerUrl="/game-1.png" title="League of Legends" adsCount={4} />
          <GameBanner bannerUrl="/game-1.png" title="League of Legends" adsCount={4} />
          <GameBanner bannerUrl="/game-1.png" title="League of Legends" adsCount={4} />
          <GameBanner bannerUrl="/game-1.png" title="League of Legends" adsCount={4} />
        </div>

        <div className="bg-duo-gradient w-full pt-1 mt-8 rounded-lg overflow-hidden">
          <div className="bg-[#2a2634] px-8 py-6 self-stretch flex justify-between items-center">
            <div>
              <strong className="text-white text-2xl font-black block">Didn't find your duo?</strong>
              <span className="text-zinc-400 block">Make a post to find new players!</span>
            </div>

            <button className="bg-violet-500 text-white px-4 py-3 rounded flex items-center gap-2 hover:bg-violet-600">
              <MagnifyingGlassPlus size={24} />
              Make a post
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
