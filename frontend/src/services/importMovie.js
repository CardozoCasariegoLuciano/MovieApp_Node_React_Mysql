import axios from "axios";

const importURL = "http://localhost:3050/api/import";

export async function importCSVfile(data) {
    try {     
  
      const allMovies = await axios.post(importURL, data);
      return allMovies;
      
    } catch (error) {
      console.log(error);
    }
  }