import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from "@material-ui/core";
import {useDataLayerValue} from './DataLayer'
function Header() {
    const [{ user }, dispatch] = useDataLayerValue();
    return (
        <div>
            <div className="header">
                <div className="header__left">
            <SearchIcon/>
            <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
                </div>
             <div className="header__right">
             <Avatar alt={user?.display_name} src={user?.images[0]} />
<h4>{user?.display_name}</h4>
             </div>

            </div>
        </div>
    )
}

export default Header
