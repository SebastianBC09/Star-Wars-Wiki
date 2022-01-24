import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Context } from '../Context'

function CharacterList() {
  const { people } = React.useContext(Context)
  return (
    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
      {people.map((people, index) => (
        <Grid item sm={5} md={4} lg={4} xl={2.4} key={index}>
          <Card variant="outlined" sx={{ minWidth: 250, minHeight: 100, bgcolor: 'grey.900' }}>
            <CardContent>
              <Typography sx={{ fontSize: 18, color: 'white' }} color="text.secondary" align='center' gutterBottom>
                Character Name: {people.name}
              </Typography>
              <Typography variant="body1" sx={{ color: 'error.dark' }}>
                Birth Year: {people.birth_year}
              </Typography>
              <Typography variant="body1" sx={{ color: 'error.dark' }}>
                Height: {people.height}
              </Typography>
              <Typography variant="body1" sx={{ color: 'error.dark' }}>
                Skin Color: {people.skin_color}
              </Typography>
              <Typography variant="body1" sx={{ color: 'error.dark' }}>
                Eye Color: {people.eye_color}
              </Typography>
              <Typography variant="body1" sx={{ color: 'error.dark' }}>
                Gender: {people.gender}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid >
  )
}

export { CharacterList };

