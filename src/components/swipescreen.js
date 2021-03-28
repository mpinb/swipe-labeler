import React from "react";
import "../styles.css";
import TinderCard from "react-tinder-card";
import Timer from "./timer";
import { Button, ProgressBar } from "@blueprintjs/core";
import "normalize.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import LoadingImg from "../loading.gif";
import Loading from "./loading";
class SwipeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      batchTotal: this.props.batch_size,
    };

    //bind functions
    this.decideCountText = this.decideCountText.bind(this);
    this.onSwipe = this.onSwipe.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }
  componenetDidMount() {
    //feed the total batch size to state on mount
    this.setState({
      batchTotal: this.props.batch_size,
    });
  }
  componentWillMount() {
    // Listens for the keyboard key press events. (Uses "keyup" so the button is only pressed once per choice.)
    document.addEventListener("keyup", this.onKeyPress, false);
  }

  componentWillUnmount() {
    // Removes the key press event listener if this component is replaced by another component or view.
    // (Currently there are no other components to replace this view, however.)
    document.removeEventListener("keyup", this.onKeyPress);
  }

  onSwipe = (direction) => {
    // From TinderCard
    this.setState({
      loading: true,
    });
    if (direction === "right") {
      this.props.onAcceptClick();
    } else if (direction === "left") {
      this.props.onRejectClick();
    } else if (direction === "down") {
      this.props.onSkipClick();
    }
  };

  onKeyPress = (event) => {
    // Key press alternatives
    if (event.key === "ArrowRight") {
      this.props.onAcceptClick();
    } else if (event.key === "ArrowLeft") {
      this.props.onRejectClick();
    } else if (event.key === "ArrowDown") {
      this.props.onSkipClick();
    }
  };

  decideCountText() {
    //Helper function to render progress of correct width on the progress bar
    let text = "";
    let y = this.props.batchStop - this.props.noOfSwipes - 1;
    // let x = this.props.total_batch_size - this.props.batch_size;
    // if (y == 0) text = "Last Image!";
    if (y !== 1) text = y + " Images Left!";
    // else if (y == 0) text = "Last Image!";
    else text = y + " Image Left!";
    return [text, this.props.noOfSwipes / this.props.batchStop];
  }

  detectMob() {
    const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i,
    ];

    return toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
    });
  }

  decideImgRender() {
    let obj;
    // this.props.undoHappened
    //   ? (img = this.props.imgUrls[this.props.index])
    //   : (img = this.props.img);
    if (this.detectMob()) {
      obj = (
        <TinderCard
          onSwipe={this.onSwipe}
          preventSwipe={["right", "left", "down", "up"]}
        >
          <img src={this.props.image} alt="" />
          {/* <img src={img} alt="" /> */}
        </TinderCard>
      );
    } else {
      // if (this.state.loading) {
      //   obj = <Loading img={LoadingImg} />;
      //   return obj;
      // }
      obj = (
        <TinderCard
          onSwipe={this.onSwipe}
          preventSwipe={["right", "left", "down", "up"]}
          // preventSwipe={["up"]}
        >
          <TransformWrapper
            options={{ centerContent: true }}
            defaultPositionX={50}
          >
            <TransformComponent>
              {/* {let {tinderImage} = {this.props.imgUrls}} */}
              <img src={this.props.image} alt="" />
              {/* <img src={img} alt="" /> */}
              {/* <img src={this.props.image.url} alt="" /> */}
              {/* <div
                style={{ backgroundImage: "url(" + this.props.image + ")" }}
                className="image"
              ></div> */}
            </TransformComponent>
          </TransformWrapper>
        </TinderCard>
      );
    }
    return obj;
  }

  render() {
    let [count_text, x] = this.decideCountText();
    let obj = this.decideImgRender();
    return (
      <>
        {console.log("swipscreen props= ", this.props)}
        <div className="header">
          <div className="count">
            <div className="timer">
              <Timer />
            </div>
            <div className="ct-grp">
              {/* <span>Dataset Total: {this.props.batch_size + 1}</span> */}
              <span>
                {/* Dataset Total: {this.props.batch_size + this.props.noOfSwipes} */}
                Dataset Total: {this.state.batchTotal}
              </span>
              <br></br>
              <span>{count_text}</span>
              {console.log("x= ", x)}
              <br></br>
            </div>
          </div>
        </div>
        <div id="#SwipeScreen" className="Content">
          <div className="Image_wrapper">
            <div className="prog-bar">
              <ProgressBar intent="success" value={x}></ProgressBar>
            </div>
            {obj}
          </div>
          <div className="footer">
            <Button
              icon="small-cross"
              className="AcceptRejectButton"
              intent="primary"
              onClick={this.props.onRejectClick}
            >
              Reject
            </Button>
            <Button
              icon="remove"
              className="AcceptRejectButton"
              intent="danger"
              onClick={this.props.onSkipClick}
            >
              Skip
            </Button>
            <Button
              icon="tick"
              className="AcceptRejectButton"
              intent="success"
              onClick={this.props.onAcceptClick}
            >
              Accept
            </Button>
            <Button
              icon="undo"
              disabled={this.props.undoHappened}
              className="BackButton"
              onClick={this.props.onBackClick}
            >
              Undo
            </Button>
          </div>
        </div>
      </>
    );
  }
}

export { SwipeScreen };
