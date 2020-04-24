import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';

//lets add multiple hook capability

//Give the ability to track multiple values and hooks
let values = []
let currentHook = 0

function useState(initialState) {
  //use values array instead of the singular value and access it using indexes
  if (typeof values[currentHook] === 'undefined') {
    values[currentHook] = initialState
  }

  //update setter function so only corresponding value is updated
  let hookIndex = currentHook
  function setState(nextValue) {
    values[hookIndex] = nextValue
    ReactDOM.render(<MyName />, document.getElementById('root'))
  }
  return [values[currentHook++], setState]
}

const MyName = () => {
  currentHook = 0
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const handleChange = (evt) => {
    setFirstName(evt.target.value)
  }
  const handleLastNameChange = (evt) => {
    setLastName(evt.target.value)
  }
  return (
    <div>
      <h1>My Name is : {firstName} {lastName}</h1>
      <input type="text" value={firstName} onChange={handleChange} />
      <input type="text" value={lastName} onChange={handleLastNameChange} />
    </div>
  );
}
export default MyName;
