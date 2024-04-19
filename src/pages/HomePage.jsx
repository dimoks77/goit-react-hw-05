import css from "./HomePage.module.css";
import { getTrends } from "../Util/API";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function HomePage() {
  const location = useLocation();

  const [error, setError] = useState(false);
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        const fetchTrends = await getTrends({
          abortController: controller,
        });
        setTrends(fetchTrends);
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
          setError(true);
        }
      }
    }
    fetchData();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <h2 className={css.title}>Trending today</h2>
      {error && <p>API Error!</p>}
      
      {trends.length > 0 && (
        <ul className={css.list}>
          {trends.length > 0 &&
            trends.map((trend) => (
              <li key={trend.id}>
                <Link to={`/movies/${trend.id}`} state={{ from: location }}>
                  {trend.original_title}
                </Link>
              </li>
            ))}
        </ul>
      )}
    </>
  );
}
