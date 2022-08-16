import React, { Component } from 'react'
import { Categories } from '../../components/Categories/Categories'
import {Header} from '../../components/Header/Header'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Categories/>
      </div>
    )
  }
}
