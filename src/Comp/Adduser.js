import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'

import {addUserAction} from '../Component/Action';
function AddUser(){

    const [nom,setnom]=useState();
    const [email,setemail]=useState();
    const [ville,setville]=useState();
    const [tel,settel]=useState("");
    const dispatch= useDispatch();
    const navigate=useNavigate();
    const count=useSelector(data=>data.users.length)
    const handleClick=()=>{

        

        dispatch(addUserAction({
            id:count+1,
            nom:nom,
            email:email,
            ville:ville,
            tel:tel,
        }))
        navigate('/')
        

    }
    
    return(
        <div>
            <div className="col-md-6 shadow mx-auto p-5 bg-secondary m-4 ">
                
                  
                  <form >
                    <div className="form-groupe m-2">
                       <input type="text" placeholder="Nom" className="form-control" value={nom} onChange={(e)=>setnom(e.target.value)}/>

                    </div>
                    <div className="form-groupe m-2">
                        <input type="email" placeholder="email" className="form-control" value={email} onChange={(e)=>setemail(e.target.value)} />

                    </div>
                    <div className="form-groupe m-2">
                        <input type="text" placeholder="ville" className="form-control" value={ville} onChange={(e)=>setville(e.target.value)} />

                    </div>
                    <div className="form-groupe m-2">
                        <input type="number" placeholder="telephonne" className="form-control " value={tel} onChange={(e)=>settel(e.target.value)}/>

                    </div>
                    <div className="form-groupe">
                        <input type="submit" value='Enregistrer' className="btn btn-block btn-dark m-3" onClick={handleClick}/>

                    </div>
                    <div>
                     <Link to="/" className="btn btn-outline-dark " >Page Accueille</Link>  
                    </div>

                  </form>

               </div>
        </div>
    )



}
export default AddUser;  