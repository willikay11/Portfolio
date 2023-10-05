import './App.css';
import me from './assets/images/me.svg';

function App() {
  return (
      <div className="w-full bg-white h-screen p-4">
          <div className="grid grid-cols-12 h-full">
            <div className="col-start-3 col-span-8">
                <p className="text-gray-600 text-x8 font-[900] uppercase xl:text-x15 2xl:text-base">Menu</p>
                <div className="inline-flex mt-3">
                    <span className="text-gray-900 text-x13 font-[900] xl:text-2xl">Home&nbsp;/</span>
                    <span className="text-rose-500 text-x13 font-[900] xl:text-2xl">About Me&nbsp;</span>
                    <span className="text-gray-900 text-x13 font-[900] xl:text-2xl">/&nbsp;</span>
                    <span className="text-rose-500 text-x13 font-[900] xl:text-2xl">Tech Stack&nbsp;</span>
                    <span className="text-gray-900 text-x13 font-[900] xl:text-2xl">/&nbsp;</span>
                    <span className="text-rose-500 text-x13 font-[900] xl:text-2xl">Projects&nbsp;</span>
                    <span className="text-gray-900 text-x13 font-[900] xl:text-2xl">/&nbsp;</span>
                    <span className="text-rose-500 text-x13 font-[900] xl:text-2xl">Experience&nbsp;</span>
                </div>

                <div className="grid grid-cols-12 gap-x-24">
                    <div className="col-span-8 mt-4 xl:mt-16">
                        <p className="text-gray-900 font-[900] text-5xl xl:text-6xl">Whatever the design is</p>
                        <p className="text-gray-900 font-[900] text-5xl xl:text-6xl mt-2 xl:mt-4">I always <span className="text-rose-500">implement</span> it</p>

                        <section>
                            <p className="text-gray-900 uppercase text-x8 font-[900] mt-10 xl:text-x15">ABOUT ME</p>
                        </section>
                    </div>
                    <div className="col-span-4 mt-4 xl:mt-16">
                        <img src={me} alt="William Kamau" className="h-36 w-36 rounded-full" />

                        <p className="uppercase text-x8 font-[900] text-gray-600 mt-3 xl:mt-4 xl:text-x15">ONE-LINE SUMMARY(TL:DR)</p>

                        <p className="text-gray-900 text-x13 font-[900] mt-2">Design Leader, Advisor & Mentor</p>
                    </div>
                </div>
            </div>
          </div>
      </div>
  );
}

export default App;
