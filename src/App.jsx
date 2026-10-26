import { useState } from 'react'
import './App.css'
import Name from "./name"
import ThemeToggle from './Toggle'

const emptyForm = { name: '', age: '', email: '', address: '' }

function App() {
  const [form, setForm] = useState(emptyForm)
  const [people, setPeople] = useState([])

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setPeople([...people, { ...form, id: Date.now() }])
    setForm(emptyForm)
  }

  return (
    <section id="center">
      <ThemeToggle />
      <Name userName={form.name}/>
      <hr></hr>
      <div className="hero">
        <h1>Hello {form.name}!</h1><br></br>
        <form className="person-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            required
            pattern="[A-Za-z ]+"
            maxLength={50}
            title="Letters and spaces only"
          />
          <input
            type="number"
            name="age"
            placeholder="Enter your age"
            value={form.age}
            onChange={handleChange}
            required
            min={1}
            max={120}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Enter your address"
            value={form.address}
            onChange={handleChange}
            required
            minLength={5}
            maxLength={200}
          />
          <button type="submit">Show</button>
          <button onClick={()=>setForm("")}> Clear</button>
        </form>

        {people.length > 0 && (
          <table className="people-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {people.map((person) => (
                <tr key={person.id}>
                  <td>{person.name}</td>
                  <td>{person.age}</td>
                  <td>{person.email}</td>
                  <td>{person.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  )
}

export default App
