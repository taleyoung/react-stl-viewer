import React, { Component } from 'react';
import STLViewer from '../../src/STLViewer';
// two kinds of colorArr
const colorArr1 = [
  '#018006',
  '#e7282e',
  '#8d7a3a',
  '#28bfe5',
  '#447c76',
  '#0400bf',
  '#c77acb',
  '#c77acb',
  '#ffff00',
  '#ffff00',
  '#f89090',
  '#ef149a'
];
const colorArr2 = [
  '#018006',
  '#28bfe5',
  '#c77acb',
  '#ef149a',
  '#447c76',
  '#0400bf',
  '#c77acb',
  '#f89090',
  '#ffff00',
  '#ffff00',
  '#e7282e',
  '#8d7a3a'
];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: colorArr1,
      model: []
    };

    this.clickBlue = this.clickBlue.bind(this);
    this.clickRed = this.clickRed.bind(this);
  }

  clickBlue(e) {
    e.preventDefault();
    this.setState({ color: colorArr2 });
  }

  clickRed(e) {
    e.preventDefault();
    this.setState({ color: colorArr1 });
  }

  onChange = ({ target }) => {
    const { files } = target;
    // console.log('files', files);
    let model = [];
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.readAsArrayBuffer(files[i]);
      reader.onload = () => {
        model.push(reader.result);
      };
    }
    this.setState({ model });
  };

  render() {
    return (
      <div>
        <input id="image-file" type="file" multiple onChange={this.onChange} />
        <STLViewer
          modelColor={this.state.color}
          lights={[[0.5, 1, -1], [1, 1, 1]]}
          rotate={true}
          model={this.state.model}
        />
        <button onClick={this.clickRed}>red</button>
        <button onClick={this.clickBlue}>blue</button>
      </div>
    );
  }
}
export default App;
