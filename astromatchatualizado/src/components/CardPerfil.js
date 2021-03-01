import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const CardImagem = styled.div`
    min-height: 50px;
    min-width: 50px;
  img {
    height: 300px;
    width: 350px;
  }
`


export default function CardPerfil(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardImagem>
            <img src={props.imagemPerfil} alt="Imagem do Perfil"></img>
        </CardImagem>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {`${props.nomePerfil}, ${props.idadePerfil}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.bioPerfil}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}