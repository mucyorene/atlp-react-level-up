import '../App.css';

export const Navigation = () => {
    return (
        <>
            <nav className="menu">
                <ul className="nav-menu">
                    <li className="company-btn">
                        <button>Company
                            <img src="../assets/icon-arrow-down.svg" alt="" aria-hidden="true"/>
                        </button>
                        <ul className="hidden-company">
                            <li>
                                <a href="/">History</a>
                            </li>
                            <li><a href="/">Our Team</a></li>
                            <li><a href="/">Blog</a></li>
                        </ul>
                    </li>
                    <li><a href="/">Careers</a></li>
                    <li className="features-btn">
                        <button>Features
                            <img src="../assets/icon-arrow-down.svg" alt="" aria-hidden="true"/></button>
                        <ul className="hidden-features">
                            <li><img src="../assets/icon-todo.svg" alt="" aria-hidden="true" width="15"
                                     height="15"/><a href="/">
                                List</a></li>
                            <li><img src="../assets/icon-calendar.svg" alt="" aria-hidden="true" width="15"
                                     height="15"/> <a
                                href="/">Calendar</a></li>
                            <li><img src="../assets/icon-reminders.svg" alt="" aria-hidden="true" width="15"
                                     height="15"/> <a
                                href="/">Reminders</a></li>
                            <li><img src="../assets/icon-planning.svg" alt="" aria-hidden="true" width="15"
                                     height="15"/> <a
                                href="/">Planning</a></li>
                        </ul>
                    </li>
                    <li><a href="/">About</a></li>
                </ul>
                <ul className="nav-buttons nav-menu">
                    <li>
                        <button>Login</button>
                    </li>
                    <li>
                        <button>Register</button>
                    </li>
                </ul>
            </nav>
        </>
    )
}