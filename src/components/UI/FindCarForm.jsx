import React from 'react';
import "../../styles/find-car-form.css";
import { Form, FormGroup } from 'reactstrap';


const FindCarForm = () => {
    return ( 
    <Form className="form">
        <div className=' d-flex align-items-center justify-content-between
        flex-wrap position-'>
            <FormGroup className='form__group-title'>
                <h2 className="search">Search Cars</h2>
            </FormGroup>

            <FormGroup className='form__group'>
                <input className="location" 
                type="text" 
                placeholder="Location" required/>
            </FormGroup>

            <FormGroup className='select__group'>
                <select>
                    <option value="features">Features</option>
                    <option value="trans">Transmission</option>
                    <option value="type">Type</option>
                </select>
            </FormGroup>
            
            <FormGroup className='form__group'>
                <input type="date" placeholder="From" required/>
            </FormGroup>

            <FormGroup className='form__group'>
                <input type="date" placeholder="To" required/>
            </FormGroup>

            <FormGroup className='form__group'>
                <button className="find__car-btn">Search</button>
            </FormGroup>
        </div>
    </Form>
  );
};

export default FindCarForm;

//1:25:52