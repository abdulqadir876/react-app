import { useState } from 'react'
import easylogo from '../img/easy.png'
import { NavData } from './NavData'
import { Link } from 'react-router-dom'

const Nav = () => {
    const [selected, setSelected] = useState(0);

    return (
        <div className='bg-[#F16738] h-[69px] flex items-center'>
            <div className='container mx-auto flex justify-between items-center'>
                <div className="logo">
                    <img className='w-24' src={easylogo} alt="" />
                </div>
                <nav>
                    <ul className='flex gap-4'>
                        {/* <li><a href="#" className='text-lg text-white'>Home</a></li> */}
                        {NavData.map((item, index) => {
                            return (
                                <li key={index}  onClick={() => setSelected(index)} className={`text-lg ${selected === 'index' ?  'text-blue-500' : 'text-white'}`}>
                                     
                                    <Link to={item.path}  >{item.title}  </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Nav