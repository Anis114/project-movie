import React, { Component } from 'react'
import CardList from './CardList'
import { movies } from "./data"
import NameFilter from './NameFilter.js'
import RatingFilter from './RatingFilter'
import Modal from './Modal'
import IsLoading from'../HOC/IsLoading'
class CardContainer extends Component {
  state = {
    movies,
    nameFilter: '',
    minRatingFilter: 0,

  }

  
  addNewMovie=(name,img,star,year)=>{
    this.setState({
  movies: this.state.movies.concat({name,img,star,year})

    })
  }
handleSearch = (input) => {
  this.setState({
    nameFilter:input
  })
}

  render() {
  
    const filtered = this.state.movies.filter(el => el.star >= this.state.minRatingFilter &&
      el.name.toLowerCase().includes(this.state.nameFilter.toLowerCase()))
    return (
      <div className="cardContainer">
        <div className="header">
          <NameFilter
            handleSearch={this.handleSearch}
            b={this.searchMovies} />
          <Modal add={this.addNewMovie} />
          <RatingFilter
            count={this.state.minRatingFilter}
            onChange={(newRating) => {
              this.setState({
                minRatingFilter: newRating
              })
            }} />
        </div>
        <CardList users={filtered} />

      </div>
    )
  }
};

export default IsLoading(CardContainer);