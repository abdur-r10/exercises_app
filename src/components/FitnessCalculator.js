import {Stack, Typography, TextField, Button, Select, MenuItem, InputLabel, Box } from '@mui/material'
import { useState, useEffect } from 'react'
import { fetchData, fitnessOptions } from '../utils/fetchData';


export default function FitnessCalculator() {
    const [displayData, setDisplayData] = useState(false);

    const [weight, setWeight] = useState([]);

    const [height, setHeight] = useState([]);

    const [age, setAge] = useState([]);

    const [gender, setGender] = useState([]);

    const [dataBmi, setDataBmi] = useState([]);

    const [dataMetabolicRate, setDataMetabolicRate] = useState([]);

    const [dataBodyFatPercent, setDataBodyFatPercent] = useState([]);

    const [dataBodyWeight, setDataBodyWeight] = useState([]);


    useEffect(() => {
        const fetchBmiData = async () => {
            const bmiData = await fetchData(`https://mega-fitness-calculator1.p.rapidapi.com/bmi?weight=${weight}&height=${height}`, fitnessOptions)
            setDataBmi(bmiData)

            const metabolicRateData = await fetchData(`https://mega-fitness-calculator1.p.rapidapi.com/bmr?weight=${weight}&height=${height}&age=${age}&gender=${gender}`, fitnessOptions)
            setDataMetabolicRate(metabolicRateData)
            console.log(dataMetabolicRate)
            
            const bodyFatPercentData = await fetchData(`https://mega-fitness-calculator1.p.rapidapi.com/bfp?weight=${weight}&height=${height}&age=${age}&gender=${gender}`, fitnessOptions)
            setDataBodyFatPercent(bodyFatPercentData)
            console.log(dataBodyFatPercent)

            const bodyWeightData = await fetchData(`https://mega-fitness-calculator1.p.rapidapi.com/ibw?weight=${weight}&height=${height}&gender=${gender}`, fitnessOptions)
            setDataBodyWeight(bodyWeightData)
            console.log(dataBodyWeight)
        } 

        fetchBmiData();
    }, [weight, height, age, gender])

    function handleWeight(e) {
        setWeight(e.target.value)
        console.log(e.target.value)
        setDisplayData(false)
    }

    function handleHeight(e) {
        setHeight(e.target.value)
        console.log(e.target.value)
        setDisplayData(false)
    }

    function handleAge(e) {
        setAge(e.target.value)
        console.log(e.target.value)
        setDisplayData(false)
    }

    function handleGender(e) {
        setGender(e.target.value)
        console.log(e.target.value)
        setDisplayData(false)
    }

    function displayInfo() {
        setDisplayData(prevDisplayData => !prevDisplayData)
    }


    return(
    <Box>
    <Typography variant='h3' py='30px'>BmiCalculator</Typography>
    
    <Stack direction='column' width='300px'>
        <TextField 
        id="outlined-basic" 
        label="input weight in kg" 
        variant="outlined" 
        required 
        type='number' 
        inputProps={{min: 30, max: 200, step:0.5}} 
        sx={{my:'30px'}}
        onChange={(e) => handleWeight(e)}
        value={weight}
        name='weight'
        />

        <TextField 
        id="outlined-basic" 
        label="input height in cm" 
        variant="outlined" 
        required 
        type='number' 
        inputProps={{min: 90, max: 230, step:1}} 
        sx={{my:'30px'}}
        onChange={(e) => handleHeight(e)}
        value={height}
        name='height'
        />

        <TextField 
        id="outlined-basic" 
        label="input age" 
        variant="outlined" 
        required 
        type='number' 
        inputProps={{min: 10, max: 110, step:1}} 
        sx={{my:'30px'}}
        onChange={(e) => handleAge(e)}
        value={age}
        name='age'
        />

        <InputLabel id="gender" sx={{mt:'30px'}}>select gender</InputLabel>
        <Select
        labelId="gender"
        id="outlined-basic"
        value={gender}
        label="Gender"
        required
        sx={{mb:'30px'}}
        onChange={(e) => handleGender(e)}
        >
        
        <MenuItem value='male'>Male</MenuItem>
        <MenuItem value='female'>Female</MenuItem>
        </Select>

        <Button 
        variant="contained" 
        onClick={displayInfo}
        >
            Get Fitness Info
        </Button>


        {
        displayData ? Object.getOwnPropertyNames(dataBmi.info).length === 1 ||  Object.getOwnPropertyNames(dataMetabolicRate.info).length === 1 || Object.getOwnPropertyNames(dataBodyFatPercent.info).length === 1 ||  Object.getOwnPropertyNames(dataBodyWeight.info).length === 1 ? 
        <Typography>Please ensure all inputs are filled in</Typography> 
        : <Stack>
            <Typography>Your BMI is: {dataBmi.info.bmi}</Typography>  
            <Typography>Your Weight Catagory is: {dataBmi.info.health}</Typography>  
            <Typography>The healthy BMI range is: {dataBmi.info.healthy_bmi_range.toFixed(2)}</Typography>
            <Typography>Your Basal Metabolic Rate is: {dataMetabolicRate.info.bmr}</Typography>
            <Typography>Your Body Fat Percentage is: {dataBodyFatPercent.info.bfp.toFixed(2)}%</Typography>
            <Typography>Your Fat Mass is: {dataBodyFatPercent.info.fat_mass.toFixed(2)}</Typography>
            <Typography>Your Lean Mass is: {dataBodyFatPercent.info.lean_mass.toFixed(2)}</Typography>
            <Typography>Your Health Status is: {dataBodyFatPercent.info.health}</Typography>
            <Typography>Your Ideal Body Weight is: {((dataBodyWeight.info.robinson + dataBodyWeight.info.miller + dataBodyWeight.info.devine + dataBodyWeight.info.hamwi)/ 4).toFixed(2)}</Typography>
        </Stack>
        : ''
        }
    </Stack>
    </Box>
    )
}

