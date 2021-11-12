import React from 'react'
import { SearchBar } from 'react-native-elements'

export default class Searches extends React.Component {
  state = {
    search: ''
  }

  updateSearch = search => {
    this.setState({ search })
  }

  render() {
    const { search } = this.state

    return (
      <SearchBar
        placeholder='Search Here...'
        onChangeText={this.updateSearch}
        value={search}
      />
    )
  }
}