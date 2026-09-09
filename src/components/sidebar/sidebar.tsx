import { NavLink } from "react-router-dom";
import classes from "./sidebar.module.css";
import {
    LayoutDashboard,
    ListTodo,
    FolderKanban,
    Target,
    CalendarDays,
    Star,
    Settings,
} from "lucide-react";

function Sidebar() {
    return (
        <div className={classes.sidebar}>
            <div className={classes.sidebar__header}>
                <img
                    src="/logo.svg"
                    alt="FocusOS logo"
                    width={36}
                    height={36}
                    className={classes.sidebar__header_logo}
                />
                <h1>FocusOS</h1>
            </div>

            <div className={classes.sidebar__main}>
                <ul>
                    <p>WORKSPACE</p>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `${classes.navItem} ${isActive ? classes.active : ""}`
                            }
                        >
                            <LayoutDashboard />
                            <span>Dashboard</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/tasks"
                            className={({ isActive }) =>
                                `${classes.navItem} ${isActive ? classes.active : ""}`
                            }
                        >
                            <ListTodo />
                            <span>Tasks</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/projects"
                            className={({ isActive }) =>
                                `${classes.navItem} ${isActive ? classes.active : ""}`
                            }
                        >
                            <FolderKanban />
                            <span>Projects</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/goals"
                            className={({ isActive }) =>
                                `${classes.navItem} ${isActive ? classes.active : ""}`
                            }
                        >
                            <Target />
                            <span>Goals</span>
                        </NavLink>
                    </li>
                </ul>

                <ul>
                    <p>PERSONAL</p>
                    <li>
                        <NavLink
                            to="/today"
                            className={({ isActive }) =>
                                `${classes.navItem} ${isActive ? classes.active : ""}`
                            }
                        >
                            <CalendarDays />
                            <span>Today</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/important"
                            className={({ isActive }) =>
                                `${classes.navItem} ${isActive ? classes.active : ""}`
                            }
                        >
                            <Star />
                            <span>Important</span>
                        </NavLink>
                    </li>
                </ul>

                <ul>
                    <p>UTILITY</p>
                    <li>
                        <NavLink
                            to="/settings"
                            className={({ isActive }) =>
                                `${classes.navItem} ${isActive ? classes.active : ""}`
                            }
                        >
                            <Settings />
                            <span>Settings</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <hr />
            <div className={classes.sidebar__footer}>
                <img
                    src="/pfp.jpg"
                    alt="profile pic"
                    className={classes.footer__avatar}
                />
                <p className={classes.footer__name}>Ismail Mechkene</p>
            </div>
        </div>
    );
}

export default Sidebar;
