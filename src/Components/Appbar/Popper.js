import React from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import {NavLink, Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  linkText: {
    color: "white",
    textDecoration: "none",
  },
}));

export default function MenuListComposition() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [jurusan, setJurusan] = React.useState([]);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open], ()=>{
    fetch("http://kampustelkom.herokuapp.com/api/jurusan")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            jurusan: result.content
          });
        },
        (error) => {
          console.log(error)
        }
      )
  });

  return (
    <div className={classes.root}>
      
      <div>
        <Link
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          className={classes.linkText}
        >
          Akademik
        </Link>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem><Typography><Link to="/akademik">Teknik Elektro</Link></Typography></MenuItem>
                    <MenuItem><Link to="/komunikasibisnis"></Link>Komunikasi & Bisnis</MenuItem>
                    <MenuItem><Link to="/ilmuterapan"></Link>Ilmu Terapan</MenuItem>
                    <MenuItem><Link to="/ekonomibisnis"></Link>Ekonomi & Bisnis</MenuItem>
                    <MenuItem><Link to="/informatika"></Link>Informatika</MenuItem>
                    <MenuItem><Link to="/industrikreatif"></Link>Industri Kreatif</MenuItem>
                    <MenuItem><Link to="/teknikindustri"></Link>Teknik Industri</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
