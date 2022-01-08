import React, {useState} from 'react';
import "./App.css";
import data from "../data.json";
import {nanoid} from 'nanoid';

function Table() {

  const [ dataEntry, setDataEntry] = useState(data); 
  const [ addFormData, setAddFormData ] = useState({
    name: '',
    specialty: '',
    greased: '',
    weight: '',
    medal: ''
  })

  const handleAddFormChange = (e) => {
    e.preventDefault();
  
  const rawName = e.target.getAttribute('name');
  const rawValue = e.target.value;

  const newFormData = {...addFormData};
  newFormData[rawName] = rawValue;
  setAddFormData(newFormData);
};

const handleAddFormSubmit = (e) => {
  e.preventDefault();

  const newPig = {
    id: nanoid(),
    name: addFormData.name,
    specialty: addFormData.specialty,
    greased: addFormData.greased,
    weight: addFormData.weight,
    medal: addFormData.medal
  };

  const newPigs =[...dataEntry, newPig];
  setDataEntry(newPigs);
};

const handleHideClick = (dataEntryId) => {
  const newDataEntry = [...dataEntry];

  const index = dataEntry.findIndex((dataEntry) => dataEntry.id === dataEntryId );
  newDataEntry.splice(index, 1);
  setDataEntry(newDataEntry);
}


    return (
    <div className ="app-container">
          <table>
        <thead>
          <tr>
          <th>Name</th>
          <th>Specialty</th>
          <th>Greased</th>
          <th>Weight</th>
          <th>Medal</th>
          </tr>
        </thead>
        <tbody>
          {dataEntry.map((pig) => 
          <tr>
          <td>{pig.name}</td>
          <td>{pig.specialty}</td>
          <td>{pig.greased}</td>
          <td>{pig.weight}</td>
          <td>{pig.highest}</td>
          </tr>)}
          
        </tbody>
      </table>  
      <h2> Add a pig </h2>
      <form onSubmit={handleAddFormSubmit}>
        <input 
        type="text"
        name="name"
        required="required"
        placeholder="Enter name of pig"
        onChange={handleAddFormChange} 
        />
        <input 
        type="text"
        name="specialty"
        required="required"
        placeholder="Enter Specialty" 
        onChange={handleAddFormChange} 
        />
        <input 
        type="text"
        name="greased"
        required="required"
        placeholder="Enter Greased" 
        onChange={handleAddFormChange} 
        />
        <input 
        type="text"
        name="weight"
        required="required"
        placeholder="Enter Weight"
        onChange={handleAddFormChange}  
        />
        <input 
        type="text"
        name="medal"
        required="required"
        placeholder="Enter Medal" 
        onChange={handleAddFormChange} 
        />
        <button type = "submit" > Add </button>
        <button type="button" onClick={()=> handleHideClick(dataEntry.id)}> Hide pig </button>
      </form>
    </div>
    )
}
export default Table;