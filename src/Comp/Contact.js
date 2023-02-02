
import { useSelector,useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { deleteUserAction ,FiltreUserAction,TrierUserAction,clearFiltreUserAction} from '../Component/Action';



function ContactUser(){ 
    const [ville,setville]=useState('');
    
 

    const users=useSelector(data=>data.users );
    const dispatch=useDispatch();
  
    const handleDelete=(id)=>{
        dispatch(deleteUserAction(id))

    }
    const handleRechercher=()=>{
       
        dispatch(FiltreUserAction(ville))

         }
         const handleClair=(users)=>{
    
            dispatch(clearFiltreUserAction(users))
         
            
            
        }
         

         
    const handleTrier=()=>{
    
        dispatch(TrierUserAction())
     
        
        
    }
    

    

    return(
        <div>
                
                <div className="col-md-12 my-5 text-rigth  ">
                     <Link to="/add_user" className="btn btn-outline-dark  bg-warning" >+ Ajoute Contact</Link><br/><br/>
                     Rechercher par ville :<select value={ville} onChange={(e)=>setville(e.target.value)}>
                     <option>----choise une ville-----</option>
                        {
                           users.map((ele,indix)=>{
                                return(<option key={indix} value={ele.ville}>{ele.ville}</option>)

                            })
                                
                            }
                     </select>
                     
                     <input type="button" value="Rechercher" onClick={handleRechercher}  /><br></br>
                     {/* <input type="button" value="Claire" onClick={handleClair}  /><br></br> */}

                     Trier Par ville : <select>
                        <option>---Choise une option---</option>
                        <option> </option>

                        <option> </option>
                     </select>
                     <input type="button" value="Trier Par ville" onClick={handleTrier}  />
                     



                 </div>

                 <div className="col-md-10 mx-auto">
                <table border='2' className='table table-hover '>
                    <thead className="text text-white bg-dark text-center">
                        <tr>
                            <th>Id</th>
                            <th>Nom et Prenom</th>
                            <th>Email</th>
                            <th>Ville</th>
                            <th>telephonne</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>       
        
                {users.map((user,indix)=>{
                  return(
                    <tr key={indix} >
                        <td>{user.id}</td>
                        <td >{user.nom}</td>
                        <td>{user.email}</td>
                        <td>{user.ville} </td>
                        <td>{user.tel}</td>   
                        <td>

                            <Link to={`/update_user/${user.id}`}>
                                <button type="button" className="btn btn-small btn-primary">Modifie</button>

                            </Link>
                            <button type="button" className="btn btn-small btn-danger" onClick={()=>handleDelete(user.id)}>Supprimer</button>
                        </td>  
                    </tr> )
                  
                 
                })
                

                }
                </tbody>
             


            </table>

                </div>

            



        </div>
    )

}
export default ContactUser;   