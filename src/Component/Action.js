

export const addUserAction=(user)=>{
    return {type:'Add_user',payload:user}
}

export const updateUserAction=(neuser)=>{
    return {type:'update_user',payload:neuser}
}


export const deleteUserAction=(id)=>{
    return {type:'delete_user',payload:id}
}

export const FiltreUserAction=(ville)=>{
    return {type:'filtre_user',payload:ville}
}

export const clearFiltreUserAction=()=>{
    return {type:'Clear-filtre_user'}
}
export const TrierUserAction=()=>{
    return {type:'trier_user'}
}