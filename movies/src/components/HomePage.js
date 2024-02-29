import { Box,Button,Typography } from "@mui/material";
import React,{ useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllMovies } from "../api-helpers/api-helpers";
import Movieitem from "./Movies/Movieitem";


const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data.movies))
      .catch((err) => console.log(err));
  }, []);
  
  return( 
  <Box  width={"100%"}  height={"100%"}  margin={"auto"} marginTop={2} >
    <Box margin={"auto"}  width={"60%"} height={"50vh"} padding={2}>
   <img src="https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/07/oppenheimer-full-movie-in-hd-leaked-online-christopher-nolans-biographical-thriller-faces-wrath-of-piracy-is-available-to-download-illegally.jpg" 
   alt="Oppenheimer"
          width={"100%"}
          height={"110%"}
        /> 
    </Box>
    <Box padding={5} margin={"auto"}>
        <Typography variant="h4" textAlign={"center"}> Latest Release
        </Typography>
    </Box>
    <Box 
    margin={"auto"}
    display="flex"  
    width={"80%"} 
    justifyContent={"center"} 
    alignItems={"center"}
    flexWrap={"wrap"}
    >
        
        {movies &&
          movies.slice().map((movie, index) => (
              <Movieitem
                id={movie.id}
                title={movie.title}
                posterUrl={movie.posterUrl}
                releaseDate={movie.releaseDate}
                key={index}
              />
            ))}
      </Box>

    <Box display="flex" padding={5} margin="auto">
        <Button
          LinkComponent={Link}
          to="/movies"
          variant="outlined"
          sx={{ margin: "auto", color: "#2b2d42" }}
        >
          View All Movies
        </Button>
      </Box>
  </Box>
  );
};

export default HomePage;