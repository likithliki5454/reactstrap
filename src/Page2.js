import React from "react";
import "./Page2.css";
import { Button, Card,CardSubtitle, CardBody, CardGroup,CardImg, CardTitle} from "reactstrap";
import {FaHammer} from  "react-icons/fa"
import {FaRegSnowflake} from  "react-icons/fa"
function Page2() {
  return (
    <div>
      <CardGroup>
        <Card id="bg">
          <CardBody>
            <CardTitle className="ct">Uniquely Your Max</CardTitle>
          </CardBody>



          <CardBody id="cardbod">
            <CardBody id="span1">
              <Button id="btn4" body className="text-center">
                <CardSubtitle className="span2">
                  STARTING AT /PER DAY
                </CardSubtitle>
                <CardSubtitle className="span3">$10.71</CardSubtitle>{" "}
              </Button>
            </CardBody>




            <CardBody id="imgee">  <CardImg  id='im' src='./food-g35e023f06_1280.png'></CardImg></CardBody>
          </CardBody>



<CardBody id="spac">
    <span id="s1">150+</span> 
    <span id="s2"> food </span> <span id="s0">choices </span> 
    <span id="s3">   4</span>
    <span id="s4">  week plan</span>
    <span id="s5">
        <FaRegSnowflake></FaRegSnowflake>
    </span>
<span id="s6"> frozen  included</span>
<span id="s7">
<FaHammer></FaHammer>
</span>
<span id="s8" > built for you</span>
</CardBody>

        </Card>
      </CardGroup>
    </div>
  );
}

export default Page2;
