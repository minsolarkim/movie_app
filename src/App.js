import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

//State (동적 데이터 처리)
class App extends React.Component{ //필수!!!
  state = {
    isLoading: true,
    movies: [] //배열해놓고 나중에 추가할 거임--미래를 위한 거임!! 나중에 추가해도 되긴 함 
  };
  getMovies = async () => {
  const {
      data: {
          data: { movies }
      }
  }
= await axios.get( "https://yts-proxy.now.sh/list_movies.json?sort_by=rating");  //axios 오래걸릴 수 있기 떄문에 async 붙여준다
    //await : axios가 끝날 때까지 기다렸다가 계속해 
    //async 써야 await 쓸 수 있다
    // this.setState({movies:movies}) //state에 있는 movies : axios에 있는 movies
    this.setState({movies, isLoading: false}); //원래 movies:movies인데 이렇게 해도 알아먹는다
  }
  componentDidMount() { 
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    // return <div>{this.state.isLoading ? "Loading" : "We are ready"}</div>
      return (
              <section className="container">
                {isLoading ? ( 
                  <div className="loader">
                    <span className="loader__text">"Loading..."</span>
                  </div>
              ) : ( 
                  <div className="movies">
                    {movies.map(movie => (
                      <Movie
                        key={movie.id}
                        id={movie.id}
                        year={movie.year}
                        title={movie.title}
                        summary={movie.summary}
                        poster={movie.medium_cover_image} 
                        genres={movie.genres}
                      />
                    ))}
                  </div>
             )}
             </section>
            );
          }  
} //return을 안 가지고 있다!!(function이 아니기 때문에)


export default App;
