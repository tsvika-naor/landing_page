import './App.css';
import Sidenav from './components/Sidenav'
import ContactUs from './components/ContactUs'
import Preview from './components/Preview'
import Offer from './components/Offer'

function App () {
  return (
    <div className="wrap">
      <div class="flex justify-center">
        <Sidenav />
        <figure class="bg-gray-100 rounded-xl p-8 xl:w-3/4 lg:w-3/4 md:w-1/2 sm:w-1/2  ">
          <Preview />
          <Offer />
          <ContactUs />
        </figure>
        <Sidenav />
      </div>
    </div>
  );
}

export default App;
