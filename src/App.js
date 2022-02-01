
import "./App.css";
import {
  Breadcrumb,
  Button,
  Card,
  CardBody,
  CardGroup,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

function App() {
  return (
    <div className="App">
      <CardGroup>
        <Card>
          <CardBody>
            <CardTitle className="fr" tag="h1">
              Would you like to add fat-burning <br />
              shakes to your plan?
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Special Offer:50% OFF
            </CardSubtitle>
          </CardBody>

          <CardBody id="main">
            <CardBody className="fst">
              <Button className="btn1">Orange</Button>
              <Breadcrumb></Breadcrumb>

              <Button className="btns">Chocolate </Button>
              <Breadcrumb></Breadcrumb>

              <Button className="btns">Vanilla</Button>
            </CardBody>

            <CardBody id="send">
              <CardImg id="juc" src="./juice-png-39493.png"></CardImg>
            </CardBody>
          </CardBody>

          <CardBody body className="text-center">
            <CardTitle tag="h1">
              $39.99 <span id="sp"> Regularly:$77.98</span>
            </CardTitle>
          </CardBody>

          <CardBody body className="text-center" >
           
            <Button id="btn2" >
              <CardSubtitle className="sp2">$ 14-DAY </CardSubtitle> 
              <CardSubtitle className="sp2">MONEY  BACK GUARANTEE</CardSubtitle>
            </Button>
        
          </CardBody>

          <CardBody body className="text-center">
         
            <Button id="btn3" className="text-center">
              Continue to Checkout
            </Button>
          </CardBody>


<CardBody body className="text-center">or <span id="span11">continue without shakes</span> </CardBody>

<CardTitle></CardTitle>

 <CardTitle className="my" tag='h2'> Burn fat & Help Shrink Your Belly</CardTitle>
<CardSubtitle className="my">28 delicious Shakes with protein and </CardSubtitle>
  <CardSubtitle className="my">probiotics to help support your immune </CardSubtitle>
 <CardSubtitle className="my"> system and fight hunger!*</CardSubtitle>



<ul id="ull">
  <li><CardText className="ctt"> 15g protein</CardText></li>
  <li><CardText className="ctt">6g dietry fiber</CardText></li>
  <li><CardText className="ctt">21 vitamens & minerals</CardText></li>
  <li><CardText tag='h3' className="ct2">FREE SHAKER BOTTLE!</CardText></li>
</ul>

<CardBody>  
  <CardSubtitle className="ft"> As part of a healthy diet and exercise program. </CardSubtitle>
              
       <CardSubtitle className="ft">Discount included with  first shipment only with </CardSubtitle>       
             <CardSubtitle className="ft"> auto delivery you are automatically changed and shipped</CardSubtitle>
             <CardSubtitle className="ft">shaked once every 4 weeks until you cancel free shaker bottle</CardSubtitle>
             <CardSubtitle className="ft">on first delivery only</CardSubtitle>
              </CardBody>


        </Card>
      </CardGroup>
    </div>
  );
}

export default App;
