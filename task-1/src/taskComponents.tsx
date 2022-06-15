// ФАЙЛ ДЛЯ РЕДАКТИРОВАНИЯ И ТЕСТИРОВАНИЯ КОМПОНЕНТОВ ИЗ ТЕСТОВОГО ЗАДАНИЯ

import React, { Component, PureComponent } from "react";
import { IUser, IProps } from "./interface";

const First = ({ name, age }: IUser) => {
  console.log("FirstComponent has been updated");

  return (
    <div>
      my name is {name}, my age is {age}
    </div>
  );
};
export const FirstComponent = React.memo(First)



const Second = ({name, age}) => {
  console.log("SecondComponent has been updated");
  return (
    <div>
      my name is {name}, my age is {age}
    </div>
  );
}
const MemoComponent = React.memo(Second)
export const SecondComponent = ({ user: { name, age } }: IProps) => {
  return <MemoComponent name={name} age={age} />
}


export class ThirdComponent extends PureComponent<IUser> {
  render() {
    console.log("ThirdComponent has been updated");

    return (
      <div>
        my name is {this.props.name}, my age is {this.props.age}
      </div>
    );
  }
}

export class FourthComponent extends Component<IProps> {
  
  shouldComponentUpdate(prevProps) {
    
    if (this.props.user.name === prevProps.user.name 
      && this.props.user.age === prevProps.user.age) {
        return false
        }
      }  

  render() {
    console.log("FourthComponent has been updated");
    return (
      <div>
        my name is {this.props.user.name}, my age is {this.props.user.age}
      </div>
    );
  }
}
