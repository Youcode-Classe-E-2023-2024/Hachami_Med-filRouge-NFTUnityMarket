import React, { useState, useEffect } from 'react'

import { Link, NavLink } from 'react-router-dom'
import menus from '../../pages/menu'

import './styles.scss'
import logo from '../../assets/images/logo/logoNftUnityMarket.png'
import Button from '../button'
import WalletModal from './WalletModal';
import { useSelector } from 'react-redux';


import { useWeb3React } from '@web3-react/core'

import {
	useDisclosure,
} from "@chakra-ui/react";
import { toHex, truncateAddress } from "../../utilities/utils";


const Header = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const walletAddress = useSelector((state) => state.wallet.walletAddress);

	const { library,
		active,
		account,
		deactivate,
	} = useWeb3React();


	const [scroll, setScroll] = useState(false)
	useEffect(() => {
		window.addEventListener('scroll', () => {
			setScroll(window.scrollY > 300)
		})
		return () => {
			setScroll({})
		}
	}, [])

	const [menuActive, setMenuActive] = useState(null)

	const handleMenuActive = () => {
		setMenuActive(!menuActive)
	}

	const [activeIndex, setActiveIndex] = useState(null)
	const handleDropdown = (index) => {
		setActiveIndex(index)
	}


	return (
		<>

			<header id='header_main' className={`header ${scroll ? 'is-fixed' : ''}`}>
				<div className='container'>
					<div id='site-header-inner'>
						<div className='header__logo'>
							<NavLink to="/">
								<img src={logo} alt='NFTUnityMarket' />
							</NavLink>
						</div>
						<nav
							id='main-nav'
							className={`main-nav ${menuActive ? 'active' : ''}`}
						>
							<ul id='menu-primary-menu' className='menu'>
								{menus.map((data, idx) => (
									<li
										key={idx}
										onClick={() => handleDropdown(idx)}
										className={`menu-item ${data.namesub ? 'menu-item-has-children' : ''
											} ${activeIndex === idx ? 'active' : ''}`}
									>
										<Link to={data.links}>{data.name}</Link>
										{data.namesub && (
											<ul className='sub-menu'>
												{data.namesub.map((submenu) => (
													<li key={submenu.id} className='menu-item'>
														<NavLink to={submenu.links}>{submenu.sub}</NavLink>
													</li>
												))}
											</ul>
										)}
									</li>

								))}

							</ul>
							<div className='btns-mobile'>
								<Button className="btn-mobile " title='Connect Wallet' />
								<Button className="btn-mobile" title='Join Discord' path='/contact' />


							</div>
						</nav>
						<div className='site-header-btn '>
							{
								active
								?<Button className="btn-mobile " title={truncateAddress(account)} onClick={deactivate} />
								:<Button className="btn-mobile " title='Connect Wallet' onClick={onOpen} />
								
							}


							<Button className="discord-btn" title='Join Discord' path='/contact' onClick={() => console.log(account)} />
						</div>



						<div
							className={`mobile-button ${menuActive ? 'active' : ''}`}
							onClick={handleMenuActive}
						>
							<span></span>
						</div>
					</div>
				</div>
				{
					isOpen &&
					<WalletModal isOpen={isOpen} closeModal={onClose} />
				}

			</header>
		</>


	)
}

export default Header
