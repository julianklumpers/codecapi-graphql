import React from 'react'
import styled from 'styled-components/macro'

interface Props {
  placeholder?: string
  defaultValue?: string
  onEnter(value: string): void
}

const StyledInput = styled.input`
  padding: 10px;
  font-size: 16px;
  /* i know this is not accessability friendly */
  outline: none;
  width: 100%;
  margin-top: 10px;
  ::placeholder {
    color: #b9b9b9;
  }
`

const SearchTitle: React.SFC<Props> = ({ placeholder, onEnter, defaultValue }) => {
  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>): void {
    if (e.keyCode === 13 || e.key === 'Enter') {
      const { value } = e.currentTarget
      if (value) {
        onEnter(e.currentTarget.value)
      }
    }
  }

  return <StyledInput placeholder={placeholder} onKeyDown={handleKeyPress} defaultValue={defaultValue} />
}

SearchTitle.defaultProps = {
  placeholder: 'username...',
  defaultValue: '',
}

export default SearchTitle
