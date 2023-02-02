import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch ,useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUserAction } from "../Component/Action";


function UpdateUser(){
    const {id }=useParams();
    const user=useSelector(data=>data.users.find((u)=>u.id===parseInt(id)))
    const [nom,setnom]=useState(user.nom);
    const [email,setemail]=useState(user.email);
    const [ville,setville]=useState(user.ville);
    const [tel,settel]=useState(user.tel);
    const dispatch= useDispatch();
    const navigate=useNavigate();
   
    const handleClick=()=>{
        dispatch(updateUserAction({
            id:id,
            nom:nom,
            email:email,
            ville:ville,
            tel:tel,
        }))
        navigate('/')

    }

    return(
        <div>

<div className="col-md-6 shadow mx-auto p-5 bg-secondary ">
                
                  
                <form >
                  <div className="form-groupe m-2">
                      <input type="text" placeholder="Nom" className="form-control" value={nom} onChange={(e)=>setnom(e.target.value)}/>

                  </div>
                  <div className="form-groupe m-2">
                      <input type="email" placeholder="Email" className="form-control" value={email} onChange={(e)=>setemail(e.target.value)} />

                  </div>
                  <div className="form-groupe m-2">
                      <input type="text" placeholder="ville" className="form-control" value={ville} onChange={(e)=>setville(e.target.value)} />

                  </div>
                  <div className="form-groupe m-2">
                      <input type="number" placeholder="telephonne" className="form-control " value={tel} onChange={(e)=>settel(e.target.value)}/>

                  </div>
                  <div className="form-groupe">
                      <input type="submit" value='Enregestrie' className="btn btn-block btn-dark m-3" onClick={handleClick}/>

                  </div>
                  <div>
                   <Link to="/" className="btn btn-outline-dark " >pag accuele</Link>  
                  </div>

                </form>

             </div>
            
        </div>
    )

}
export default UpdateUser;