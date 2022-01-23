import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function CharacterCard(props) {
  const { data } = props;
  return (
    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
      {data.map((people, i) => (
        <Grid item lg={4}>
          <Card variant="outlined" sx={{ minWidth: 250, minHeight: 100, bgcolor: 'grey.900' }}>
            <CardContent key={i}>
              <Typography sx={{ fontSize: 16, color: 'white' }} color="text.secondary" gutterBottom>
                {people.name}
              </Typography>
              <Typography variant="body2" sx={{ color: 'error.dark' }}>
                {people.birth_year}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="medium" variant='text' sx={{ bgcolor: 'warning.dark', color: 'white' }}>
                More Info
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))
      }
    </Grid >
  )
}

export { CharacterCard };

