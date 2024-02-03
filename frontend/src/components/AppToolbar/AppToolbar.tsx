import { AppBar, Toolbar, Typography, Link } from '@mui/material';

const AppToolbar = () => {
  return (
    <AppBar  sx={{mb:2}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
          <Link href="#" underline="none" color="inherit">News</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppToolbar;