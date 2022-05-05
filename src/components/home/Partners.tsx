import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles'; //vs mui/styles
import { colors } from '@style/theme';
import React, { FunctionComponent } from 'react';

const PartnersContainer = styled(Box)(({theme}) => ({

}))

const Partners: FunctionComponent<{}> = () => {
  return (
    <PartnersContainer>
      <Typography variant="h2" color={colors.neutralsBlack}>Partners</Typography>
      <Grid
        container
        rowSpacing={5}
        columnSpacing={{ xs: 4, lg: 10 }}
      >
        <Grid item xs={12} lg={6}>
          <Box>
            <Typography component="p">
              Mobile toolbox has a web Partners for researchers and a mobile app
              Partners for study participants. You don't have to have a software
              engineering team to create your own custom app.
            </Typography>
            <Typography component="p">
              Sign up is easy! Simply register for a Sage Bionetworks account to
              begin exploring today.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box>
            <Typography component="p">
              Try out the assessments yourself with our demo app or start
              designing your own custom study through our Researcher web. You
              can customize your study schedule, assessments, and the look and
              feel of the app. Preview your study before you release it live for
              participants.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </PartnersContainer>
  )
}

export default Partners