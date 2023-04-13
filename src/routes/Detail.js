import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../components/Detail.module.css";
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
    <div>
      <img className={styles.bg} src={val.background_image_original} alt='' />
      <div className={styles.show}>
        <img className={styles.img} src={val.medium_cover_image} />
        <div className={styles.textbox}>
          <h1 className={styles.title}>
            <a href={val.url} target="_blank">
              {val.title_long}
            </a>
          </h1>
          <ul>
            <li>Rating {val.rating}</li>
            <li>Runtime {val.runtime}</li>
            <li>Download {val.download_count}</li>
            <li>
              Genres
              <ul>
                {val.genres && val.genres.map((genre) => (
                  <li>{genre}</li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Detail;
