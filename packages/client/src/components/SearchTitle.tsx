import React from 'react'
import styled from 'styled-components/macro'

interface Props {
  text?: React.ReactNode
}

const StyledTitle = styled.span`
  font-size: 30px;
  display: block;
`

const SearchTitle: React.SFC<Props> = ({ text }) => {
  return <StyledTitle>{text}</StyledTitle>
}

SearchTitle.defaultProps = {
  text: '',
}

export default SearchTitle
