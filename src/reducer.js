export const initialState={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    //token:'BQAxYfEKySiShOlsDOEwBjI5eNujcF0e1LW7Cl4STEllGufmpRe3BnsVLFegQoIsZMeJwWrBUMacJgMW_rP0X8gf06YUj55VXCSNDssSm3wAV7Q5vwzmGBGer3-h3fEqM97qDwXUwZjdZ9kc2qdkvWYbO4b9s-1csdlxr7BfNN_pd9a6',
}

const reducer=(state,action)=>{

   if(action.type==='SET_USER'){
       return {...state, user:action.user}
   }
   if(action.type==='SET_TOKEN'){
       return {...state, token:action.token}
   }
   if(action.type==='SET_PLAYLISTS'){
    return {...state, playlists:action.playlists}
}
if(action.type==='SET_DISCOVER_WEEKLY'){
    return {...state, discover_weekly:action.discover_weekly}
}

}

export default reducer