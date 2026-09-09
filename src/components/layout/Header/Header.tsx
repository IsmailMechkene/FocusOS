import classes from "./header.module.css";
import { Search } from "lucide-react";
import { Bell } from "lucide-react";


function Header() {
    return (
        <div className={classes.header}>
            <div className={classes.search}>
                <Search size={24} color="#4F5A65" strokeWidth={1.5}/>
                <input type="text" name="" id="" placeholder="Search" />
            </div>

            <div className={classes.right}>
                <Bell />
                <img src="pfp.jpg" alt="profile pic" />
            </div>
                
        </div>
    );
}

export default Header;
