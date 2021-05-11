import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SiderbarData = [
    {
        title: 'Home',
        path: '/Home',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },

    {
        title: 'Expense Tracker',
        path: '/Tracker',
        icon: <AiIcons.AiOutlineBarChart/>,
        cName: 'nav-text'
    },

    {
        title: 'About Us',
        path: '/About',
        icon: <IoIcons.IoMdPeople/>,
        cName: 'nav-text'
    },
    
    {
        title: 'Log-out',
        path: '/',
        icon: <IoIcons.IoMdLogOut/>,
        cName: 'nav-text'
    },
]

