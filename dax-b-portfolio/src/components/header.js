import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const Header = () => {
    return (
        <div>
            <div>
                <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                    Welcome!
                </Typography>
                </Toolbar>
                </AppBar>
            </div>
        </div>
    )
}

export default Header