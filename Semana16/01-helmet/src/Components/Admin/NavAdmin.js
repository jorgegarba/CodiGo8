import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';

export default function NavAdmin() {
    return (
        <div>
            <AppBar color="secondary" position="static">
                <Toolbar>
                    <BusinessCenterIcon />
                    <Typography>
                        AdminNav
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
