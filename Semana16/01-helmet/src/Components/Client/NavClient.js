import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';

export default function NavClient() {
    return (
        <div>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <HomeIcon />
                    <Typography variant="h6">
                        Client
                    </Typography>
                    <Button>
                        Acceder
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}
