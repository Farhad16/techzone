import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import React, { useEffect } from "react";
import useScrollSectionById from "../../../hooks/useScrollById";
import { Link } from "react-router-dom";

import { css, tw } from "twind/css";

const pages = [
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Review", id: "review" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function NavSection() {
  const [anchorElNav, setAnchorElNav] = React.useState<any>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<any>(null);
  const [scroll, setScroll] = React.useState<any>(false);
  const { scroll: scrollSection } = useScrollSectionById();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  return (
    <AppBar
      position="sticky"
      className={tw(
        css({
          "&.MuiAppBar-root": {
            background: !scroll ? "rgba(0, 0, 0, .1)" : "rgba(0, 0, 0, .9)",
            boxShadow: scroll ? "rgba(255, 255, 255, 0.5) 0px 3px 8px" : "none",
            position: "fixed",
            minHeight: "65px",
            transition: "all 0.6s ease;",
          },
        }),
        `${scroll ? "py-0" : "py-4"} `
      )}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => scrollSection("home")}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
              cursor: "pointer",
            }}
            className=" flex flex-row items-center font-bold"
          >
            <span className="pb-1 text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] to-[#ffc3cf] text-[40px]">
              T
            </span>
            <div className="text-[24px] pt-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] to-[#ff6680]">
                ECH
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6680] to-[#ff2247]">
                ZONE
              </span>
            </div>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={() => {
                    handleCloseNavMenu();
                    scrollSection(page.id);
                  }}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
            className=" flex flex-row items-center font-bold"
          >
            <span className="pb-1 text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] to-[#ffc3cf] text-[40px]">
              T
            </span>
            <div className="text-[24px] pt-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] to-[#ff6680]">
                ECH
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6680] to-[#ff2247]">
                ZONE
              </span>
            </div>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <p
                key={page.name}
                className="px-4 text-base hover:text-transparent hover:text-base bg-clip-text bg-gradient-to-r from-[#18c8fd] to-purple-600 font-medium transition duration-300 ease-in-out cursor-pointer"
                onClick={() => {
                  handleCloseNavMenu();
                  scrollSection(page.id);
                }}
              >
                {page.name}
              </p>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavSection;
