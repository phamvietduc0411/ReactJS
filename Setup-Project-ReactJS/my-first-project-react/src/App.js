import './App.css'
import Composition from './CompositionVsInheritence/Composition'
import Inheritance from './CompositionVsInheritence/Inheritance'
import CorrectlyState from './CorrectlyState'
import Form from './Form/Form'
import UncontrollComponent from './Form/UncontrollComponent'
import HandleEvent from './HandleEventButton'
import Calculator from './Lifting_State_Up/Calculator'
import LoginControl from './LoginControl'
import ProductList from './ProductList/ProductList'
function App() {
  //const [visible, setVisible] = useState(true)
  return (
    // <div className='App'>
    //   <HandleEvent></HandleEvent>
    // </div>

    // <LoginControl isLog={false} />
    // <CorrectlyState />
    // <ProductList />
    // <Form/>
    // <UncontrollComponent />
    // <Calculator />
   < Composition/>
  )
}

export default App
