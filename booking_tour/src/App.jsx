import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { dataUserNotYet, dataAdmin, dataUser } from './component/Data'
import User from './component/User'
function App() {
  return (
    <div className="container">
      <h1 className="text-uppercase text-center text-black my-3">
        Demo Some image screen project Booking Tours
      </h1>
      <User
        title="Main Functions for user not yet register"
        data={dataUserNotYet}
      />
      <br></br>

      <User title="Main Function for user has roles user" data={dataUser} />
      <br></br>

      <User title="Main Function for admin" data={dataAdmin} />
    </div>
  )
}

export default App
