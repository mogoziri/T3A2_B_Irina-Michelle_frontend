import React from 'react';
import "../../styles/find-car-form.css";
import { Form, FormGroup } from 'reactstrap';


const FindCarForm = () => {
    return ( 
    <Form className="form-search">
        <div className=' d-flex align-items-center justify-content-between 
        flex-wrap'>
            <FormGroup className='form__group-search-title'>
                <h2 className="search">Search Cars</h2>
            </FormGroup>

            <FormGroup className='form__group-search'>
                <input className="location" 
                type="text" 
                placeholder="Location" required/>
            </FormGroup>

            <FormGroup className='select__group-search'>
                <select>
                    <option value="transmission">Transmission</option>
                        <option value="transmission">Automatic</option>
                        <option value="transmission">Manual</option>
                </select>
            </FormGroup>
            
            <FormGroup className='form__group-search'>
                <input className="from" 
                type="date" 
                placeholder="From:" required/>
            </FormGroup>

            <FormGroup className='form__group-search'>
                <input className="to" 
                type="date" 
                placeholder="To:" required/>
            </FormGroup>

            <FormGroup className='form__group-search'>
                <button className="find__car-btn">Search</button>
            </FormGroup>
        </div>
    </Form>
  );
};

export default FindCarForm;

//1:25
