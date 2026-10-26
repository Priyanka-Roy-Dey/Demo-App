import { useState } from "react";

const emptyAppointment={customerName:'', appointmentDate:''}

function BookAppointment(){
const [form, setForm]=useState(emptyAppointment)

function handleChange(e){
    setForm({...form, [e.target.name]:e.target.value})
}

function handleSubmit(e) {
    e.preventDefault()
    console.log('Booked:', form)
    setForm(emptyAppointment)
  }

return (
<div>
<h2>Appointment Form</h2>
<form onSubmit={handleSubmit}>
<input type="text" name="customerName" placeholder="Enter name" value={form.customerName} onChange={handleChange} required /><br></br>
<input type="date" name="appointmentDate" value={form.appointmentDate} onChange={handleChange} required/><br></br>
<button type="submit">Book Appointment</button>
</form>
</div>
)
}

export default BookAppointment;