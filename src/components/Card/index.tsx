import Image from "next/image";
import { House } from "../../../types/house";

interface CardProps {
    home: House
}

export default function Card(props : CardProps) {

    const { home } = props;

    return (
            <div className="p-4">
                <div className="overflow-hidden shadow-lg rounded-2xl">
                    <Image src='/house.png' alt="Picture of house" width={300} height={350} className='rounded-xl'/>
                    <div className="relative max-w-full p-5 -mt-14 bg-white rounded-xl">
                        <div className="flex flex-row text-xl text-primary font-extrabold pl-3 z-40">
                            <div className="flex flex-col basis-4/5">
                                <p className="inline-block">{home.address}</p>
                            </div>
                            <div className="flex flex-col basis-1/5">
                                <svg width="30" height="30" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" strokeWidth="0.00024000000000000003" className="inline-block">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.144"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM14.79 12.53L11.26 16.06C11.11 16.21 10.92 16.28 10.73 16.28C10.54 16.28 10.35 16.21 10.2 16.06C9.91 15.77 9.91 15.29 10.2 15L13.2 12L10.2 9C9.91 8.71 9.91 8.23 10.2 7.94C10.49 7.65 10.97 7.65 11.26 7.94L14.79 11.47C15.09 11.76 15.09 12.24 14.79 12.53Z" fill="#5FCDB2"></path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div className="text-md text-secondary px-3">
                            <p>{`${home.city}, ${home.state} ${home.zipCode}`}</p>
                        </div>
                        <div className="flex justify-around text-sm">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bed inline-block" width="15" height="15" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#696BA4" fill="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M3 7v11m0 -4h18m0 4v-8a2 2 0 0 0 -2 -2h-8v6" />
                                    <circle cx="7" cy="10" r="1" />
                                </svg>
                                <p className="text-xs text-secondary inline-block pl-[0.1rem]">{home.bedrooms}</p>
                            </div>                     
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar inline-block" width="15" height="15" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#696BA4" fill="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <rect x="4" y="5" width="16" height="16" rx="2" />
                                    <line x1="16" y1="3" x2="16" y2="7" />
                                    <line x1="8" y1="3" x2="8" y2="7" />
                                    <line x1="4" y1="11" x2="20" y2="11" />
                                    <line x1="11" y1="15" x2="12" y2="15" />
                                    <line x1="12" y1="15" x2="12" y2="18" />
                                </svg>
                                <p className="text-xs text-secondary inline-block pl-[0.1rem]">{home.yearBuilt}</p>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bath inline-block" width="16" height="16" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#696BA4" fill="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4v-3a1 1 0 0 1 1 -1z" />
                                    <path d="M6 12v-7a2 2 0 0 1 2 -2h3v2.25" />
                                    <path d="M4 21l1 -1.5" />
                                    <path d="M20 21l-1 -1.5" />
                                </svg>
                                <p className="text-xs text-secondary inline-block pl-[0.1rem]">{home.bathrooms}</p>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home inline-block" width="15" height="15" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#696BA4" fill="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <polyline points="5 12 3 12 12 3 21 12 19 12" />
                                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                                    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                                </svg>
                                <p className="text-xs text-secondary inline-block pl-[0.1rem]">{home.sqft} 
                                    <span className="text-secondary text-[0.7rem] pl-[0.1rem]">sq. ft</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>          
    )
}



