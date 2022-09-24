import React from 'react';
import Header from "./Header/Header";
import Sidebar from "./SIdebar/Sidebar";
import Notes from "./Notes/Notes";

const Layout = ():JSX.Element => {
    return (
       <>
            <Header />
            <div className="mainWrapper">
            <Sidebar />
            <Notes />
            </div>
       </>
    );
};

export default Layout;