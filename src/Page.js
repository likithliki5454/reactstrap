import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import {

  Card,

  CardHeader,

  CardBody,

  CardFooter,

  Button,

  CardTitle,

  CardText,

  Container,

  CardImg,

} from "reactstrap";

import "./Page.css";


export const Page = () => {

  return (

    <div>

      <Card className="card">

        <CardHeader>

          <CardTitle tag="h2" id="lst">

            Choose Your Menu

          </CardTitle>

          <CardText id="lst">

            Create your own menu or let us do it for you!

          </CardText>


          <Container className="hh">

            <Container className="hh1">

              <CardImg className="hat" src="./hat.png" />

              <CardText className="hat1">Chefis choice</CardText>

            </Container>

            <Container className="hh2">

              <CardImg className="hat" src="./choose.png" />

              <CardText className="hat2">I'll Choose</CardText>

            </Container>

          </Container>

          <Button className="bb">Continue</Button>

        </CardHeader>

        <CardBody>

          <CardTitle tag="h2" >

            What's the Difference?

          </CardTitle>


          <CardTitle tag="h3" >

            Chef's choice

          </CardTitle>

          <ul>

            <li>

              <CardText className="lii">

                We choose the meals from our bestsellers

              </CardText>

            </li>

            <li>

              <CardText className="lii">

                Save time now & customize future orders

              </CardText>

            </li>

            <li>

              <CardText tag="h4" className="lii">

                Best for your first order!

              </CardText>

            </li>

          </ul>

          <CardTitle tag="h3" >

            I'll Choose

          </CardTitle>

          <ul>

            <li>

              <CardText className="lii">

                I'll select my meals during checkout

              </CardText>

            </li>

            <li>

              <CardText className="lii">

                We'll prefill your menu to save your time & you can make changes

                as you'd like!

              </CardText>

            </li>

          </ul>

        </CardBody>

        <CardFooter>

          <CardTitle tag="h2" id="lst">

            A Taste of Our Menu

          </CardTitle>

          <Container className="hh">

            <Container className="ff1">

              <Container className="ff21">

                <CardImg className="fi" src="./fii.jpeg" />

              </Container>

              <CardText className="ft1" tag="h3">

                Chicken with Lemon <br /> Sauce

              </CardText>

            </Container>

            <Container className="ff2">

              <Container className="ff21">

                <CardImg className="fi" src="./foodd.jpeg" />

              </Container>


              <CardText className="ft1" tag="h3">

                Chicken with Lemon <br /> Sauce

              </CardText>

            </Container>

          </Container>

        </CardFooter>

      </Card>

    </div>

  );

};
