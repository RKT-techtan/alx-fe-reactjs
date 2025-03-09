import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Switch, Link, useRouteMatch, ProfileSettings } from 'react-router-dom';

const Profile = () => {
	let { path, url } = useRouteMatch();

	return (
        <div>
            <h2>Dashboard</h2>
            <ul>
                <li>
                    <Link to={`${url}/profile`}>ProfileDetails</Link>
                </li>
                <li>
                    <Link to={`${url}/settings`}>ProfileSettings</Link>
                </li>
            </ul>

export default Profile;
