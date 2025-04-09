
import './App.css'
import GrandPaa from './components/GrandPaa/GrandPaa'
import HookForm from './components/HookForm/HookForm'
import RefForm from './components/RefForm/RefForm'
import ReuseblaeForm from './components/ReuseblaeForm/ReuseblaeForm'
import SimpleForm from './components/SimpleForm/SimpleForm'
import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {

//   const handleSignUpSubmit =(data)=>{
//     console.log('sign up data: ', data)
// }
// const handleUpdateProfile =(data)=>{
//   console.log('update profile data: ', data)
// }

  return (
    <>
      
      <h1>Form Master</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReuseblaeForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit} 
      


      >

      <div>
        <h2>Sign Up</h2>
        <p>please sign up right now</p>
      </div>

      </ReuseblaeForm>
      <ReuseblaeForm formTitle={'Profile Update'} submitBtn='Update' handleSubmit={handleUpdateProfile}>

        <div>
          <h2>Update Profile</h2>
          <p>Always keep update</p>
        </div>
      </ReuseblaeForm> */}
      <GrandPaa></GrandPaa>
    </>
  )
}

export default App
