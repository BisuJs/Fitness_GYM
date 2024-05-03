import React from 'react'
import { CardActions,CardContent,Card,CardHeader,CardMedia } from '@mui/material'
const CardComp = ({sx,children}) => (
    <Card sx={sx}>
    {children}
  </Card>

)
   
const CardHead=({title,...rest})=>{
    return(
        <CardHeader
        title={title}
        {...rest}
      />
    )
}
const CardImage=({component,height,image,alt,...rest})=>{
    return(
        <CardMedia component={component} height={height} image={image} alt={alt}{...rest}/>
    )
}
const CardContents=({children,...rest})=>{
    return(
        <CardContent {...rest}>
            {children}
        </CardContent>
    )
}
const CardAction=({children,...rest})=>{
    return(
        <CardActions {...rest}>
            {children}
        </CardActions>
    )
}
export default Object.assign(CardComp,{
Header:CardHead,    
Media:CardImage,
Content:CardContents,
Action:CardAction
})