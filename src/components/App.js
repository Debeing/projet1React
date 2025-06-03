import banner from './banner';
import logo from '../assets/logo.png';
//import Cart  from './Cart';
 import ShoppingList  from './ShoppingList';

function App() {
  return <div>
    <banner>
      <img src={logo} alt='la maison jungle' className='lmj-logo'/>
      <h1 className='lmj-title'>La maison jungle</h1>
    </banner>

    {/*<Cart/>*/} 
    <ShoppingList/>
    </div>
}

export default App
