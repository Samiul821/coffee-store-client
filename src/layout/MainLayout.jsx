import React from 'react';
import { Outlet } from 'react-router-dom';
import Haeder from '../components/Haeder';

const MainLayout = () => {
    return (
        <div>
            <Haeder></Haeder>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;