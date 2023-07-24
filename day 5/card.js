import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../src/card.css'

export default function ImgMediaCard() {
  return (
    <>
      <div class="row">
        <div class="column" >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Sofa"
              height="140"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUl02yCQyr30M4m3zo4XYQ_qr_77V8l_rSRA&usqp=CAU"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Sofa
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Our beloved EKTORP seating has a timeless design and wonderfully thick, comfy cushions. The covers are easy to change, so buy an extra cover - or two, and change according to mood or season.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Buy</Button>
              <Button size="small">view more</Button>
            </CardActions>
          </Card>
        </div>
        <div class="column" >
          <Card sx={{ maxWidth: 345 }}>

            <CardMedia
              component="img"
              alt="bed"
              height="140"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIiJpJUv00zqeE16mNLzoR0y0Rv_ZOS3_xjA&usqp=CAU"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Bed
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A sturdy bed frame with soft, profile edges and high legs. A classic shape that will last for many years. Complete with SONGESAND bed storage boxes to store extra bedding without taking up more space.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Buy</Button>
              <Button size="small">view more</Button>
            </CardActions>
          </Card>
        </div>
        <div class="column" >
          <Card sx={{ maxWidth: 345 }}>

            <CardMedia
              component="img"
              alt="chair"
              height="140"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHvgwHVZf1KYGaJ2-bNF7tItAjgV6zcTdO8w&usqp=CAU"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Chair
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Comfy and sturdy chair with a metal frame, a soft seat and a nice backrest with a curved shape. All in a timeless, neat design with a modern twist that takes up little room – and at a price that surprises!
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Buy</Button>
              <Button size="small">view more</Button>
            </CardActions>
          </Card>
        </div>
      </div>
      <br />
      <div class="row">
        <div class="column" >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Shelves"
              height="140"
              image="https://www.ikea.com/in/en/images/products/kallax-shelving-unit-white__1084796_pe859882_s5.jpg?f=s"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Shelves
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Standing or lying – the KALLAX series adapts to taste, space, needs and budget. Smooth surfaces and rounded corners give a feel of quality and you can personalise the shelving unit with inserts and boxes.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Buy</Button>
              <Button size="small">view more</Button>
            </CardActions>
          </Card>
        </div>
        <div class="column" >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Dinning Table"
              height="140"
              image="https://www.ikea.com/in/en/images/products/laneberg-extendable-table-brown__0722957_pe733787_s5.jpg?f=s"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Dinning Table
              </Typography>
              <Typography variant="body2" color="text.secondary">
              The simple design of this dining table will blend seamlessly into your dining area. And the smooth and simple extension lets you extend your dinner invitation without worrying about fitting everyone in.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Buy</Button>
              <Button size="small">view more</Button>
            </CardActions>
          </Card>
        </div>
        <div class="column" >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Tables"
              height="140"
              image="https://www.ikea.com/in/en/images/products/lack-coffee-table-black-brown__0835835_pe601383_s5.jpg?f=s"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Tables
              </Typography>
              <Typography variant="body2" color="text.secondary">
              LACK table in black-brown is easy to match with other furnishings. The honeycomb structured paper filling construction adds strength to the table while keeping it lightweight so it´s easy to move around.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Buy</Button>
              <Button size="small">view more</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
}