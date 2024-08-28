// import React from 'react'
import { FormOutlined,UserOutlined } from '@ant-design/icons'
// import { Avatar } from 'antd';

// const Navbar = () => {
//   return (
//     <>
//         <nav className=' bg-slate-100 h-16 flex items-center p-5 font-poppins font-semibold justify-between fixed top-0 left-0 right-0 z-50' >
//             <div className=' flex gap-3 items-center'>
//                 <p className={` text-black`}>Fill in your form </p>
//                 <FormOutlined style={{color:"#00008B"}} />
//             </div>
//             <Avatar style={{ backgroundColor: '#00008B', width:"25px" , height:"25px", fontSize:"12px" }} icon={<UserOutlined />} />
//         </nav>
//     </>
//   )
// }

// export default Navbar

import { useContext } from 'react'
import styles from './Navbar.module.css' 
import { Avatar, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom'
import UserContext from '../../Contexts/UserContextProvider';
import { capitalizeFirstLetter } from '../../utils/helpers';

const Navbar = () => {
  //for taking user and set user from context
  const {user, setUser} = useContext(UserContext)
  const navigate = useNavigate();
  //for handling logout
  const logOutFunction = () => {
      localStorage.clear();
      setUser(null);
      navigate("/");
  }

  const avatarIcon = user ? (
    <Avatar size={'small'} style={{ backgroundColor: 'rgba(1, 41, 112, 0.7)', fontSize:'small' }}>{user.username.split('.').map(name => name[0].toUpperCase()).slice(0, 2).join('')}</Avatar>
  ) : null;

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a rel="noopener noreferrer" onClick={logOutFunction}>
          Logout
        </a>
      ),
    },
  ]
  return (
    <nav className={styles.nav}>
    <div className=' flex gap-3 items-center'>
               <p className={` text-black font-poppins font-semibold text-sm`}>Fill in your form </p>
             <FormOutlined style={{color:"#00008B"}} />
    </div>
    {user?<div className={styles.navbar_right}>
        {avatarIcon}
        
        <Dropdown menu={{ items }} placement="bottom" trigger={['click']}>
          <h5 className={styles.navbar_name}>{user ? capitalizeFirstLetter(user.username).replace('.',' ') : null}</h5>
        </Dropdown>
    </div>:<></>}
    </nav>
  )
}

export default Navbar