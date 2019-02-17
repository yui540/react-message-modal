import React, { Component } from 'react'
import PropTypes from 'proptypes'
import { Container, Title } from './styles'

export default class MessageModal extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { title } = this.props

    return (
      <Container>
        <Title>{title}</Title>
      </Container>
    )
  }
}

MessageModal.propTypes = {
  title: PropTypes.string,
}
