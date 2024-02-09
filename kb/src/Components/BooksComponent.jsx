import React from 'react'
import axios from 'axios'
import logo from '/src/assets/Logo.png' 
import { useState, useEffect } from 'react'
import '../App.css'
import {Link} from 'react-router-dom'

function BooksComponent() {

  //  Setting States
  const [booksData, setBooksData] = useState([])
  const [searchValue, setSearchValue]  = useState("")
  

  // Fetching Data from the API
  useEffect(()=>{
    axios.get("https://reactnd-books-api.udacity.com/books", {headers:{"Authorization" : "whatever-you-want"}})
    .then((res)=> setBooksData(res.data.books))
    .catch((err)=>console.log("Error Fetching Data from the API"))
  }, [])


  // Filtering out data for search bar functionality
  const filteringBooksData = booksData.filter((booksData)=>{
    if(searchValue === ""){
      return true
    }

    else{
      const title = booksData.title.toLowerCase()
      return title.includes(searchValue.toLowerCase())
    }
  })

  //function for search bar handling
  const handleSearch = (e) => {
    setSearchValue(e.target.value.toLowerCase())
  }

  return (
    <div id="main">
      
      <div className='navBar-Cont'>
          <div className='lcont'>
            <img src={logo} className='klogo'/>
            <span className = "Logo">Kalvium Books</span>
          </div>
          <Link to="/form"><button className='RegisBtn'>Register</button></Link>
      </div>

      <input type="search" id='searchInput' onChange={(e) => handleSearch(e)} className= "searchbar" placeholder='Search Books'/>
      <div className="BookCard">{filteringBooksData.map((book)=>{
        return(
          <div key={book.id} className="card">

            <div>
              <img src={book.imageLinks.smallThumbnail} className='cardimg'/>
            </div>

            <div style={{display:"flex", flexDirection:"column", width:"200px" }}>
              <h3 style={{textAlign:"center", paddingLeft:"1px", paddingRight:"1px" ,paddingBottom:"1px", height:"70px"}}>{book.title}</h3  >
                <div style={{display:"flex", justifyContent:"space-between"}}>
                  <p className='card-p'>{book.authors[0]}</p>
                  <p className='card-p'>{book.averageRating ? book.averageRating:4.4}⭐</p>
                </div>
            </div>

          </div>
        )
      })}
      </div>
      <footer>
        <div>Made by Abhinandan Gupta</div>
        <div>Reactnd Books API</div>
      </footer>
      
    </div>
  )
}

export default BooksComponent