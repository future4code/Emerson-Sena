import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AtmIcon from '@material-ui/icons/Atm';
import CommentIcon from '@material-ui/icons/Comment';
import { CssBaseline } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MinhaAppBar(props) {
  const classes = useStyles();

  const mudancaPagina = () => {
    if(props.janelaRend === "Perfis"){
      return <CommentIcon
      onClick={props.onClickMatches}
    />
    }else return <FavoriteIcon
      onClick={props.onClickPerfis}
    />
  }

  return (
    <div className={classes.root}>
      <AppBar position="relative">
        <CssBaseline/>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <AtmIcon
                style={{ fontSize: 80, color: "white" }}
            />
          </Typography>
          {mudancaPagina()}
        </Toolbar>
      </AppBar>
    </div>
  );
}