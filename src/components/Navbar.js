import { Link } from 'react-router-dom';
import { Stack, ListItemButton, Box, Button } from '@mui/material'
import {useState, useEffect} from 'react'
import Logo from '../assets/images/Logo.png';
import hamburgerIcon from '../assets/icons/Hamburger_icon.svg.png'



export default function Navbar() {

    const [showMenu, setShowMenu] = useState(false);

    function toggleShowMenu() {
        setShowMenu(prevShowMenu => !prevShowMenu)
    }


    return(
        <>
            <Stack 
                direction='row' 
                justify-content='space-around'
                sx={{gap: {lg: '1300px', sm: '600px',  xs: '330px'}, mt:{sm: '32px', xs:'20px'}, justifyContent: 'none'}}
            >

                <Link to="/">
                    <img src={Logo} alt='logo' style={{width:'70px', height: '100px' }} />
                </Link>

                <div onClick={toggleShowMenu}>
                <img src={hamburgerIcon} alt='Hamburger Icon' height='25px' width='25px' />
                </div>
            </Stack>

            {showMenu ? 
            <Stack direction='column' gap='10px' sx={{pl: {lg: '1100px', xs: '220px'}, fontSize: {lg: '30px', xs: '20px'}, width: {lg: '1450px', xs: '440px'}}}>
            <ListItemButton>
                <a href='#exercises' 
                    style={{textDecoration: 'none', color: '#3A1212'}}
                >
                    Exercises
                </a>
            </ListItemButton>

            <ListItemButton>
                <Link to='/FitnessCalculator' 
                    style={{ textDecoration: 'none', color:'#3A1212'}}
                    px='20px'
                >
                    Fitness Calculator
                </Link>
            </ListItemButton>

            <ListItemButton>
                <Link to='/HealthyRecipeFinder' 
                    style={{ textDecoration: 'none', color:'#3A1212'}}
                    px='20px'
                >
                    Healthy Recipe Finder
                </Link>
            </ListItemButton>

            <Box>
                <Button variant="contained" sx={{ m: 1, width: 0.5 }}>
                  Register
                </Button>
                <Button variant="outlined" sx={{ m: 1, width: 0.5 }}>
                  Login
                </Button>
              </Box>
            </Stack>
            : ''}

           
        </>
        
    )
}