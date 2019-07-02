import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import KeyboardGenerator from '../works/kbdGenerator/kbdGenerator';

class Keyboard extends React.Component {
  componentDidMount() {
    const kbd = KeyboardGenerator({
      targetElement : this.elem
    });
    kbd._init();
  }
  render() {
    return (
      <React.Fragment>
      <div id="kbd" ref={ref => {this.elem = ref;}}>
      </div>
      <form>
        <div>
          <label><input type="radio" checked/>FULL</label>
        </div>
      </form>
    </React.Fragment>
    )
  }
}

export default Keyboard
