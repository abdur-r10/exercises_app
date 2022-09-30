import {Route, Routes} from 'react-router-dom';
import { Box } from '@mui/material'
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import FitnessCalculator from './components/FitnessCalculator';
import HealthyRecipeFinder from './components/HealthyRecipeFinder'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

export default function App() {
    return(
        <Box width="400px" sx={{width: {xl : '1488px'}}} m='auto'>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exercise/:id" element={<ExerciseDetail />} />
                <Route path='/FitnessCalculator' element={<FitnessCalculator />} />
                <Route path='/HealthyRecipeFinder' element={<HealthyRecipeFinder />} />
            </Routes>
            <Footer />
        </Box>
    )
}