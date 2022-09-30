import { Box, Typography } from '@mui/material'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import { useContext } from 'react'

import RightArrowIcon from '../assets/icons/right-arrow.png'
import LeftArrowIcon from '../assets/icons/left-arrow.png'
import BodyPart from './BodyPart'
import ExerciseCard from './ExerciseCard'

function LeftArrow() {
    const { scrollPrev } = useContext(VisibilityContext);

    return(
        <Typography onClick={() => scrollPrev()} className='left-arrow'>
            <img src={LeftArrowIcon} alt='left-arrow' />
        </Typography>
    )
}

function RightArrow() {
    const { scrollNext } = useContext(VisibilityContext)

    return(
        <Typography onClick={() => scrollNext()} className='rigth-arrow'>
            <img src={RightArrowIcon} alt='right-arrow'/>
        </Typography>
    )
}

export default function HorizontalScrollbar(props) {
    return(
        <ScrollMenu RightArrow={RightArrow} LeftArrow={LeftArrow}>
        {props.data.map(item => (
            <Box
                key={item.id || item}
                itemId={item.id || item}
                title={item.id || item}
                m='0 40px'
            >
                {props.isBodyParts ? 
                <BodyPart item={item} bodyPart={props.bodyPart} setBodyPart={props.setBodyPart}/>
                : <ExerciseCard exercise={item} />}
            </Box>
        )
        )}
        </ScrollMenu>
    )
}