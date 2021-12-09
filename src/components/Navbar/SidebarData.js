import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as CgIcons from 'react-icons/cg'

export const SidebarData = [
	{
		title: 'Home',
		path : '/',
		icon : <AiIcons.AiFillHome />,
		cName: 'nav-text'
	},
	{
		title: 'Profile',
		path : '/profile',
		icon : <CgIcons.CgProfile />,
		cName: 'nav-text'
	},
	{
		title: 'Games',
		path : '/games',
		icon : <CgIcons.CgGames />,
		cName: 'nav-text'
	},
	{
		title: 'Support',
		path : '/support',
		icon : <CgIcons.CgSupport />,
		cName: 'nav-text'
	}

]