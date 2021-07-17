import React from 'react'
import * as IoIcons from 'react-icons/io';

//  File data whcich is to be shown while displaying the files in the explorer
const SidebarData = [
    {
        title: 'index.html',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav_text',
        toggle: 'html'

    },
    {
        title: 'index.css',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav_text',
        toggle: 'css'
    },
    {
        title: 'index.js',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav_text',
        toggle: 'js'
    }
];

export default SidebarData


