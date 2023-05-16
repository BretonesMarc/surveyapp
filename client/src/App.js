import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import Submissions from './components/Submissions/Submissions';
import Form from './components/Form/Form';
import thenextgen from './images/thenextgen.png';
import useStyles from './styles';

const App = () => {
    const classes = useStyles();


    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h2' align='center'>NextGen Survey</Typography>
                <img className={classes.image} src={thenextgen} alt='NexGen Logo' height={60} />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Submissions />

                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                            
                        </Grid>
                    </Grid>
                </Container>

            </Grow>
        </Container>
    )
}

export default App;