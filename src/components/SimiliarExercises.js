import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader';

export default function SimiliarExercises(props) {
    console.log(props.equipmentExercises)
    return (
        <Box sx={{ mt: {lg: '100px', xs: '0'}}}>
            <Typography variant='h3' mb={5}> Exercises that target the same muscle group</Typography>
            <Stack direction='row' sx={{ p: '2', position: 'relative' }}>
                {props.targetMuscleExercises.length ? 
                <HorizontalScrollbar data={props.targetMuscleExercises}/> 
                : <Loader/>}
            </Stack>

            <Typography variant='h3' mb={5}> Exercises that use the same equipment</Typography>
            <Stack direction='row' sx={{ p: '2', position: 'relative' }}>
                {props.equipmentExercises.length ? 
                <HorizontalScrollbar data={props.equipmentExercises}/> 
                : <Loader/>}
            </Stack>
        </Box>
    )
}