// ФАЙЛ ДЛЯ РЕДАКТИРОВАНИЯ И ТЕСТИРОВАНИЯ КОМПОНЕНТОВ ИЗ ТЕСТОВОГО ЗАДАНИЯ

import { Component, createRef, forwardRef } from "react";

export class MainComponent extends Component {
  myRef = createRef(); // create simple ref

  toggleChildVisibility = () => this.myRef.current.toggleButton(); // method to hide or show child component

  render() {
    return (
      <>
        <button
          className="btn btn-info btn-lg"
          onClick={this.toggleChildVisibility}
        >
          toggle ChildComponent visibility
        </button>

        {/* set ref to controll child component */}
        <ChildComponent ref={this.myRef} />
      </>
    );
  }
}
const ChildComponent = forwardRef((props, ref) => {
  console.log(ref)
  class Child extends Component {
    state = { isActive: true };
  
    toggleButton = () => this.setState({ isActive: !this.state.isActive });
  
    render() {
      return this.state.isActive ? <div>child component</div> : null;
    }
  }
  return <Child ref={ref} />
})

