import React, { useState, useEffect } from 'react'
import './styles.scss'

import { useWeb3React } from '@web3-react/core'
import { connectors } from '../../connectors.js'
import { useDispatch , useSelector } from 'react-redux';
import { setWalletAddress } from '../../redux/Slices/walletSlice.js';





export default function WalletModal({ isOpen, closeModal }) {
    const [address, setAddress] = useState('');
    const [metamaskErro, setMetamaskError] = useState(null);

    const dispatch = useDispatch();


    const { library,
        chainId,
        account,
        activate,
        deactivate,
        active
    } = useWeb3React();

    const setProvider = (type) => {
        window.localStorage.setItem("provider", type);
    };
    const metamaskConnectedTo = async () => {
        if (window.ethereum) {
            try {
                const currentNetworkId = await window.ethereum.request({ method: 'net_version' });

                if (currentNetworkId === '43114') {
                    return true;
                } else {
                    return false;
                }
            } catch (error) {
                console.error('Error checking network:', error);
                return false;
            }
        }

        return false;
    };

    

    const connectToMetamask = async (wallet) => {
        if (await metamaskConnectedTo()) {
            switch (wallet) {
                case 'metamask':
                    
                    activate(connectors.injected, async (error) => {
                        if (error) {
                            console.error('Error activating MetaMask:', error);
                            // Handle error, set state, or show a message to the user
                        } else {
                             setProvider('injected');

                            const walletAddress = library?.getSigner().getAddress();
                            if (walletAddress) {
                                console.log('Connected to MetaMask. Wallet Address:', walletAddress);
                                dispatch(setWalletAddress(walletAddress));
                            } else {
                                console.log('Wallet address is undefined');
                            }
                        }
                    });
                    closeModal();
                    break;
                case 'coinbase':
                    console.log('coinbase connected');
                default:
                    break;
            }
        } else {
            setMetamaskError('Switch To Avalanche Network');
            console.log('switch');
        }

    };

    useEffect(()=>{
        dispatch(setWalletAddress(account));

    },[account])

    const test = ()=>{
        console.log("azaz"+account);
    }

    return (
        <>


            {/* Main modal */}
            <div className="wallet-container" style={{}}  >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        {/* Modal header */}
                        <div className="modal-header">
                            <h3 className="title">Connect wallet</h3>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={closeModal}
                            ></button>
                        </div>
                        {/* Modal body */}
                        <div className="modal-body">
                            <p>
                                Connect with one of our available wallet providers or create a new one.
                            </p>
                            <ul className="wallets">
                                <li
                                    onClick={() => connectToMetamask('metamask')}
                                >
                                    <svg width="32px" height="32px" viewBox="0 0 257 238" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M243.1 0.5L143.6 74.4L162 30.8L243.1 0.5Z" fill="#E2761B" stroke="#E2761B" strokeLinecap="round" strokeLinejoin="round"></path><path d="M13.4 0.5L112.1 75.1L94.6 30.8L13.4 0.5ZM207.3 171.8L180.8 212.4L237.5 228L253.8 172.7L207.3 171.8ZM2.90002 172.7L19.1 228L75.8 212.4L49.3 171.8L2.90002 172.7Z" fill="#E4761B" stroke="#E4761B" strokeLinecap="round" strokeLinejoin="round"></path><path d="M72.6 103.2L56.8 127.1L113.1 129.6L111.1 69.1L72.6 103.2ZM183.9 103.2L144.9 68.4L143.6 129.6L199.8 127.1L183.9 103.2ZM75.8 212.4L109.6 195.9L80.4 173.1L75.8 212.4ZM146.9 195.9L180.8 212.4L176.1 173.1L146.9 195.9Z" fill="#E4761B" stroke="#E4761B" strokeLinecap="round" strokeLinejoin="round"></path><path d="M180.8 212.4L146.9 195.9L149.6 218L149.3 227.3L180.8 212.4ZM75.8 212.4L107.3 227.3L107.1 218L109.6 195.9L75.8 212.4Z" fill="#D7C1B3" stroke="#D7C1B3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M107.8 158.5L79.6 150.2L99.5 141.1L107.8 158.5ZM148.7 158.5L157 141.1L177 150.2L148.7 158.5Z" fill="#233447" stroke="#233447" strokeLinecap="round" strokeLinejoin="round"></path><path d="M75.8 212.4L80.6 171.8L49.3 172.7L75.8 212.4ZM176 171.8L180.8 212.4L207.3 172.7L176 171.8ZM199.8 127.1L143.6 129.6L148.8 158.5L157.1 141.1L177.1 150.2L199.8 127.1ZM79.6 150.2L99.6 141.1L107.8 158.5L113.1 129.6L56.8 127.1L79.6 150.2Z" fill="#CD6116" stroke="#CD6116" strokeLinecap="round" strokeLinejoin="round"></path><path d="M56.8 127.1L80.4 173.1L79.6 150.2L56.8 127.1ZM177.1 150.2L176.1 173.1L199.8 127.1L177.1 150.2ZM113.1 129.6L107.8 158.5L114.4 192.6L115.9 147.7L113.1 129.6ZM143.6 129.6L140.9 147.6L142.1 192.6L148.8 158.5L143.6 129.6Z" fill="#E4751F" stroke="#E4751F" strokeLinecap="round" strokeLinejoin="round"></path><path d="M148.8 158.5L142.1 192.6L146.9 195.9L176.1 173.1L177.1 150.2L148.8 158.5ZM79.6 150.2L80.4 173.1L109.6 195.9L114.4 192.6L107.8 158.5L79.6 150.2Z" fill="#F6851B" stroke="#F6851B" strokeLinecap="round" strokeLinejoin="round"></path><path d="M149.3 227.3L149.6 218L147.1 215.8H109.4L107.1 218L107.3 227.3L75.8 212.4L86.8 221.4L109.1 236.9H147.4L169.8 221.4L180.8 212.4L149.3 227.3Z" fill="#C0AD9E" stroke="#C0AD9E" strokeLinecap="round" strokeLinejoin="round"></path><path d="M146.9 195.9L142.1 192.6H114.4L109.6 195.9L107.1 218L109.4 215.8H147.1L149.6 218L146.9 195.9Z" fill="#161616" stroke="#161616" strokeLinecap="round" strokeLinejoin="round"></path><path d="M247.3 79.2L255.8 38.4L243.1 0.5L146.9 71.9L183.9 103.2L236.2 118.5L247.8 105L242.8 101.4L250.8 94.1L244.6 89.3L252.6 83.2L247.3 79.2ZM0.799988 38.4L9.29999 79.2L3.89999 83.2L11.9 89.3L5.79999 94.1L13.8 101.4L8.79999 105L20.3 118.5L72.6 103.2L109.6 71.9L13.4 0.5L0.799988 38.4Z" fill="#763D16" stroke="#763D16" strokeLinecap="round" strokeLinejoin="round"></path><path d="M236.2 118.5L183.9 103.2L199.8 127.1L176.1 173.1L207.3 172.7H253.8L236.2 118.5ZM72.6 103.2L20.3 118.5L2.90002 172.7H49.3L80.4 173.1L56.8 127.1L72.6 103.2ZM143.6 129.6L146.9 71.9L162.1 30.8H94.6L109.6 71.9L113.1 129.6L114.3 147.8L114.4 192.6H142.1L142.3 147.8L143.6 129.6Z" fill="#F6851B" stroke="#F6851B" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    <a

                                    >
                                        Metamask
                                    </a>
                                </li>
                                <li onClick={test}>

                                    <svg viewBox="0 0 28 28" width="32px" height="32px" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="14" cx="14" cy="14" fill="#2C5FF6"></circle><path fillRule="evenodd" clipRule="evenodd" d="M14 23.8C19.4124 23.8 23.8 19.4124 23.8 14C23.8 8.58761 19.4124 4.2 14 4.2C8.58761 4.2 4.2 8.58761 4.2 14C4.2 19.4124 8.58761 23.8 14 23.8ZM11.55 10.8C11.1358 10.8 10.8 11.1358 10.8 11.55V16.45C10.8 16.8642 11.1358 17.2 11.55 17.2H16.45C16.8642 17.2 17.2 16.8642 17.2 16.45V11.55C17.2 11.1358 16.8642 10.8 16.45 10.8H11.55Z" fill="white"></path></svg>
                                    <a>CoinBase Wallet</a>
                                </li>
                                <li>

                                    <svg viewBox="0 0 28 28" width="32px" height="32px" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14" cy="14" r="14" fill="#3B99FC"></circle><path d="M8.38969 10.3739C11.4882 7.27538 16.5118 7.27538 19.6103 10.3739L19.9832 10.7468C20.1382 10.9017 20.1382 11.1529 19.9832 11.3078L18.7076 12.5835C18.6301 12.6609 18.5045 12.6609 18.4271 12.5835L17.9139 12.0703C15.7523 9.9087 12.2477 9.9087 10.0861 12.0703L9.53655 12.6198C9.45909 12.6973 9.3335 12.6973 9.25604 12.6198L7.98039 11.3442C7.82547 11.1893 7.82547 10.9381 7.98039 10.7832L8.38969 10.3739ZM22.2485 13.012L23.3838 14.1474C23.5387 14.3023 23.5387 14.5535 23.3838 14.7084L18.2645 19.8277C18.1096 19.9827 17.8584 19.9827 17.7035 19.8277C17.7035 19.8277 17.7035 19.8277 17.7035 19.8277L14.0702 16.1944C14.0314 16.1557 13.9686 16.1557 13.9299 16.1944C13.9299 16.1944 13.9299 16.1944 13.9299 16.1944L10.2966 19.8277C10.1417 19.9827 9.89053 19.9827 9.73561 19.8278C9.7356 19.8278 9.7356 19.8277 9.7356 19.8277L4.61619 14.7083C4.46127 14.5534 4.46127 14.3022 4.61619 14.1473L5.75152 13.012C5.90645 12.857 6.15763 12.857 6.31255 13.012L9.94595 16.6454C9.98468 16.6841 10.0475 16.6841 10.0862 16.6454C10.0862 16.6454 10.0862 16.6454 10.0862 16.6454L13.7194 13.012C13.8743 12.857 14.1255 12.857 14.2805 13.012C14.2805 13.012 14.2805 13.012 14.2805 13.012L17.9139 16.6454C17.9526 16.6841 18.0154 16.6841 18.0541 16.6454L21.6874 13.012C21.8424 12.8571 22.0936 12.8571 22.2485 13.012Z" fill="white"></path></svg>
                                    <a>WalletConnect</a>
                                </li>
                                {
                                    metamaskErro !== null ?
                                        <span className='error'>{metamaskErro}</span> : ''
                                }
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

