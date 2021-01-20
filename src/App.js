import './App.css';
import {useState} from 'react';

function App() {
  const [weight, setWeight] = useState(90);
  const [bottles, setBottles] = useState(0)
  const [time, setTime] = useState(0)
  const [gender, setGender] = useState('male')
  const [result, setResult] = useState(0)

  function submit(e) {
    e.preventDefault();
    let abl = 0;
    let litres = bottles * 0.33;
    let burning = weight / 10;
    let grams = litres * 8 * 4.5;
    let gramsLeft = grams - (burning * time);

    if (gender === 'male') {
      abl = gramsLeft / (weight * 0.7);
    }
    else {
      abl = gramsLeft / (weight * 0.6);
    }

    setResult(abl);
  }

  return (
    <>
    <h2>Calculating alcohol blood level</h2>
    <form onSubmit={submit}>
      <div>
        <label>Weight</label>
        <input name="weight" type="number" step="1" value={weight} onChange={e => setWeight(e.target.value)}></input>
      </div>
      <div>
        <label>Bottles</label>
        <input type="number" id="numb" value={bottles} onChange={e => setBottles(e.target.value)}>
        </input>
      </div>
      <div>
        <label>Time</label>
        <input type="number" id="numb" value={time} onChange={e => setTime(e.target.value)}>
        </input>
      </div>
      <div>
        <label>Gender</label>
        <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)} /><label>Male</label>
        <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)}/><label>Female</label>
      </div>
      <div>
        <output>{result.toFixed(1)}</output>
      </div>
      <button>Calculate</button>
    </form>
    </>
  );
}

export default App;
