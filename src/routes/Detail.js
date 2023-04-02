import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [val, setVal] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setVal(json.data.movie);
    console.log(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      <div>{val.title}</div>
      <div>      
        <img src={val.background_image_original} ></img>
        <div>UPLOADED: {val.date_uploaded}</div>
        <div>★ {val.rating}/10</div>


      </div>
    </>
  );
}

export default Detail;
