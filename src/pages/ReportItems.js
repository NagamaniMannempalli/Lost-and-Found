import { useState } from "react"; 
import { saveToLocalStorage, getFromLocalStorage } from "../utils/localStorage"; 
import "./ReportItems.css"; 
import {useItems} from '../context/ItemContext'; 
import {useAuth} from '../context/AuthContext'; 
function ReportItems() { 
  const {setLoggedIn}=useAuth(); 
  setLoggedIn(true); 
  const {addItem}=useItems(); 
  const [formData, setFormData] = useState(
    { title: "", description: "", location: "", date: "", status: "Lost", image: "", contact: "", }); 
    const handleChange = (e) => { 
      const { name, value } = e.target; 
      setFormData((prev) => ({ ...prev, [name]: value })); }; 
      const handleSubmit = (e) => { 
        e.preventDefault(); 
        const items=getFromLocalStorage('items')||[]; 
        let nextId = items.length > 0 ? items[items.length - 1].id + 1 : 1; 
        const newItem = { ...formData, id: nextId,  };
         items.push(newItem);
          saveToLocalStorage("items", items);
           addItem(newItem);
            setFormData({ title: "", description: "", location: "", date: "", status: "Lost", image: "", contact: "", }); 
          }; 
          return ( 
          <div className="report-container"> 
          <h1 className="report-title">Report Lost or Found Item</h1> 
          {/* Form */} <form className="report-form" onSubmit={handleSubmit}> 
            <input type="text" name="title" placeholder="Item Title" value={formData.title} onChange={handleChange} required /> 
            <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} rows="3" required ></textarea> 
            <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required /> <input type="date" name="date" value={formData.date} onChange={handleChange} required /> 
            <select name="status" value={formData.status} onChange={handleChange} > <option value="Lost">Lost</option> <option value="Found">Found</option> </select> 
            <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} /> <input type="email" name="contact" placeholder="Contact Email" value={formData.contact} onChange={handleChange} required /> 
            <button type="submit">Submit</button> </form> 
            {/* Display Items */} </div> );
             } 
export default ReportItems;