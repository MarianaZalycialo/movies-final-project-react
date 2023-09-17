import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import './Header.css'
import {DarkModeToggle} from "@anatoliygatt/dark-mode-toggle";

const Header = ({themeMode}) => {

    const [mode, setMode] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

    useEffect(() => {
        localStorage.setItem('theme', mode);
    }, [mode]);


    return (
        <div className={'header-container'}>
            <div className={'logo'}>MovieStar</div>
            <nav>
                <ul>
                    <li><Link to="/movies">Movies</Link></li>
                    <li><Link to="/genres">Genres</Link></li>
                    <li><Link to="/search">Search</Link></li>
                </ul>
            </nav>
            <div className={'right'}>
                <DarkModeToggle
                    mode={mode}
                    dark="Dark"
                    light="Light"
                    size="sm"
                    inactiveTrackColor="#e2e8f0"
                    inactiveTrackColorOnHover="#f8fafc"
                    inactiveTrackColorOnActive="#cbd5e1"
                    activeTrackColor="#334155"
                    activeTrackColorOnHover="#1e293b"
                    activeTrackColorOnActive="#0f172a"
                    inactiveThumbColor="#1e293b"
                    activeThumbColor="#e2e8f0"
                    onChange={(mode) => {
                        setMode(mode);
                        themeMode(mode);
                    }}
                />
                <div className={'user-box'}>
                    <div className={'user-logo'}></div>
                    <div>User-1212</div>
                </div>
            </div>

        </div>
    );
};

export default Header;