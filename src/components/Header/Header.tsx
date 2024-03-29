import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { BoxStyled } from "./styles";
import { Link } from "react-router-dom";
import { ROUTES } from "routes/constants";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  {id: 1, name: "HOME", path: ROUTES.HOME},
  {id: 2, name: "POPULAR", path: ROUTES.POPULAR},
  {id: 3, name: "TOP RATED", path: ROUTES.TOP_RATED},
  {id: 4, name: "NOW PLAYING", path: ROUTES.NOW_PLAYING},
  {id: 5, name: "MY FAVORITES", path: ROUTES.MY_FAVORITES}
];

export default function Header(props: Props) {
  
  // The 'window' property from 'props' is extracted from the 'props' object
  // using *destructuring assignment* and assigned to a variable of the same name.
  const { window } = props;
  
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    // setMobileOpen is a state updater function from React Hooks 'useState' hook
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        FlickPicks
      </Typography>
      <Divider />
      <List sx={{textDecorationStyle: "none"}}>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: "center", textDecoration: "none"}}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // If window is not 'undefined', the code assigns a function to 'container'
  // using the arrow function syntax '() => window().document.body'
  // This function is invoked when 'container' is called.
  // It accesses the 'document' property of the 'window' (representing the DOM of the currently loaded web page)
  // object and retrieves the 'body element'. 
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <BoxStyled>
      <CssBaseline />

      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MOVIES DB 3000
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link key={item.id} to={item.path}>
                <Button sx={{ color: "#fff" }}>
                  {item.name}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Box component="main" sx={{ p: 0 }}>
        <Toolbar />
      </Box>

    </BoxStyled>
  );
}
