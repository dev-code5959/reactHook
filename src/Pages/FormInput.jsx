import  { useState } from 'react';
import Menu from '../components/Menu';

const FormInput = () => {

    let [formObj,setFormObj] = useState({fName:"",lName:"",city:"",gender:""});

const onInputChange = (property,value)=>{

  setFormObj(prevObj =>({
    ...prevObj,
    [property]:value

  }));
}

const FormSubmit = (e)=>{
  e.preventDefault();
  alert(JSON.stringify(formObj))
}

    return (
        <div>
          <Menu/>
             <div className="container">
      <div className="row">
        <div className="col-xl-2"></div>
        <div className="col-xl-8 mt-5">
        <form  className="" onSubmit={FormSubmit}>
        <input type="text" onChange={(e)=>{onInputChange("fName",e.target.value)}} value={formObj.fName} className="form-control" placeholder="First Name"  /> <br/>
        <input type="text" onChange={(e)=>{onInputChange("lName",e.target.value)}} value={formObj.lName} className="form-control" placeholder="Last Name" /> <br/>
        <select className="form-select" value={formObj.city} onChange={(e)=>{onInputChange("city",e.target.value)}}>
           <option className="form-select" value="">Choose City</option>
           <option className="form-select" value="Dhaka">Dhaka</option>
           <option className="form-select" value="Rangpur">Rangpur</option>

        </select>
        <br/>
        <input checked={formObj.gender==="Male" } onChange={()=>{onInputChange("gender","Male")}} type="radio" name="gender"/> male
        <input checked={formObj.gender==="Female"} onChange={()=>{onInputChange("gender","Female")}} type="radio" name="gender"/> female
        <br/>

        <button className="btn btn-success">submit</button>
      </form>
        </div>
        <div className="col-xl-2"></div>
      </div>
     </div>
        </div>
    );
};

export default FormInput;