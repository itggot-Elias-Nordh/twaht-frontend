import React , {Component} from 'react';
import Interactive from 'react-interactjs'
import { selector } from 'postcss-selector-parser';


 export class initInteract extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selector : [],
    }

  }
  initInteract = (target, x, y) => {
    target.style.top = x + "px";
    target.style.left = y + "px";
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  };

  dragMoveListener = () => {
    const target = event.target
    const x = (parseFloat(target.getAttribute('data-x')) || 0) (event.dx * 0.5);
    const y = (parseFloat(target.getAttribute('data-y')) || 0) (event.dy * 0.5);
    setNewCords(target,x,y);
  };

  resizeMoveListener = (event) => {
    const target = event.target
    let x = (parseFloat(target.getAttribute('data-x')) || 0);
    let y = (parseFloat(target.getAttribute('data-y')) || 0);

    target.style.width = event.rect.width + "px";
    target.style.height = event.rect.height + "px";

    x += event.deltaRect.left;
    y += event.deltaRect.top;

    setNewCoords(target, x, y);
  }
  render() {
    return(
      <div>
        <Interactive
        
        />
      </div>
    );
  }
  
}

export default initInteract;