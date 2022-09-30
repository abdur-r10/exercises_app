import { Box, Stack, Typography, Button, Link } from '@mui/material'

export default function HeroBanner() {
    return(
        <Stack direction='row' sx={{ml: {lg: '110px', xs: '0px'}}}>
        <Box sx={{
             mt: { lg: '100px', xs: '70px' },
             ml: { sm: '50px' },
             height: {lg: '350px', xs: '260px'},
             width: {lg: '350px', xs: '202px'},
             p: 2, 
             border: '1px solid grey',
             position: 'relative' }}
            >
            <Typography 
                color='#FF2625'
                sx={{ fontSize: {lg: '26px', xs: '18px' }, fontWeight: {lg: '600', xs: '300'} }}
            >
                Fitness Club
            </Typography>
            <Typography 
                sx={{fontSize: {lg: '44px', xs: '20px'}, marginY: {lg: 3, xs: 1}, fontWeight: {lg: '300px', xs: '50px'} }}
            >
                Try, progress <br/> and Repeat
            </Typography>
            <Typography sx={{fontSize: {lg: '22px', xs: '12px'}, lineHeight: {lg: '35px', xs: '20px'}}}>
                Check out effective exercises
            </Typography>
            <Button variant='contained' sx={{background: '#FF2625', marginY: {lg: 3, xs: 1}, p: {lg: '10px', xs: '2px'}}} href='#exercises'>Explore Exercises</Button>
        </Box>


        <Box sx={{
            mt: { lg: '100px', xs: '70px' },
            ml: { sm: '50px' },
            height: {lg: '350px', xs: '260px'},
            width: {lg: '350px', xs: '202px'},
            p: 2, 
            border: '1px solid grey',
            position: 'relative' }} 
            >
            <Typography 
                color='#FF2625'
                sx={{ fontSize: {lg: '26px', xs: '18px' }, fontWeight: {lg: '600', xs: '300'} }}
            >
                Fitness Club
            </Typography>
            <Typography 
                sx={{fontSize: {lg: '44px', xs: '20px'}, marginY: {lg: 3, xs: 1}, fontWeight: {lg: '300px', xs: '50px'} }}
            >
                Sweat, smile <br/> and Repeat
            </Typography>
            <Typography sx={{fontSize: {lg: '22px', xs: '12px'}, lineHeight: {lg: '35px', xs: '20px'}}}>
                Find your health stats today
            </Typography>
            <Button variant='contained' sx={{background: '#FF2625', marginY: {lg: 3, xs: 1}, p: {lg: '10px', xs: '2px'}}} href='../components/FitnessCalculator.js'>
                <Link to='/FitnessCalculator' underline='none' color='white' > Fitness Calculator </Link>
            </Button>
        </Box>


        <Box sx={{
             mt: { lg: '100px', xs: '70px' },
             ml: { sm: '50px' },
             height: {lg: '350px', xs: '260px'},
             width: {lg: '350px', xs: '202px'},
             p: 2, 
             border: '1px solid grey',
             position: 'relative' }}
            >
            <Typography 
                color='#FF2625'
                sx={{ fontSize: {lg: '26px', xs: '18px' }, fontWeight: {lg: '600', xs: '300'} }}
            >
                Fitness Club
            </Typography>
            <Typography 
                sx={{fontSize: {lg: '44px', xs: '20px'}, marginY: {lg: 3, xs: 1}, fontWeight: {lg: '300px', xs: '50px'} }}
            >
                Exercise, eat <br/> and Repeat
            </Typography>
            <Typography sx={{fontSize: {lg: '22px', xs: '12px'}, lineHeight: {lg: '35px', xs: '20px'}}}>
                Cook up healthy recipes today
            </Typography>
            <Button variant='contained' sx={{background: '#FF2625', marginY: {lg: 3, xs: 1}, p: {lg: '10px', xs: '2px'}}} href='../components/HealthyRecipeFinder.js'>
                <Link to='/HealthyRecipeFinder' underline='none' color='white' > Healthy Recipe Finder </Link>
            </Button>
        </Box>

        </Stack>
    )
}