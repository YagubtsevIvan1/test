import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
         <SayFullName name="Иван" surname="Ягубцев" link="https://vk.com/number.one.ivan" />
         <SayFullName name="Назар" surname="Логинов" link="https://vk.com/id442432757" />
         <SayFullName name="Женя" surname="Бочков" link="https://vk.com/qquixx" />
       </div>
    );
  }
}

function Hello() {
  let w = 'World';
  return(
    <h1> Hello, {w} </h1>
  )
}

function SayFullName(props) {
  return(
    <div>
      <h1> Моё имя {props.name}, фамилия - {props.surname} </h1>
      <a href={props.link}> Ссылка на мой профиль </a>
    </div>
  )
}

function MeetAll() {
  return(
    <div>
      <SayFullName name="Иван" surname="Ягубцев" link="https://vk.com/number.one.ivan" />
      <SayFullName name="Назар" surname="Логинов" link="https://vk.com/id442432757" />
      <SayFullName name="Женя" surname="Бочков" link="https://vk.com/qquixx" />
    </div>
  )
}

export default App;
