

const initialState={
    users:[
{id:1,nom:'hamza',email:"x.@gmail.com",ville:'tanger',tel:'046467392'},
{id:2,nom:'karim',email:"l.@gmail.com"  ,ville:'rabat', tel:'0546782663'},
{id:3,nom:'ali',email:"y.@gmail.com"  ,ville:'asila', tel:'0546782663'}

]};

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case "Add_user":
             return {...state,users:[...state.users,action.payload] };
        case "update_user":
            const user=state.users.find((u)=>u.id===parseInt(action.payload.id))
            if (user){
                user.nom=action.payload.nom
                user.email=action.payload.email
                user.ville=action.payload.ville
                user.tel=action.payload.tel
            }
            return state

        case "delete_user":
            return {...state,users:[...state.users.filter((u)=>u.id!==parseInt(action.payload))] };


            case "filtre_user":
            return {...state,users:[...state.users.filter((u)=>u.ville===(action.payload))] };
      
            case "Clear-filtre_user":
                return {...state,users:[...state.users]};


            case "trier_user":
                let newuser=[...state.users]
                let newtable=newuser.sort((a,b) => (a.ville > b.ville ? 1 : -1))
                 
                
                return ({...state,users:[...newtable]});
          
        default :
        return state ;

    }
    
}
export default reducer;

    