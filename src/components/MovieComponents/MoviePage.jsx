import { useState } from "react";
import axios from "axios";
const apiKey = import.meta.env.VITE_RAPIDAPI_KEY;
const hostKey = import.meta.env.VITE_RAPIDAPI_HOST

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    if (!searchTerm.trim()) return;

    setLoading(true);

    const options = {
      method: "GET",
      url: "https://imdb8.p.rapidapi.com/v2/search",
      params: {
        searchTerm: searchTerm,
        type: "NAME",
        first: "20",
        country: "US",
        language: "en-US",
      },
      headers: {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": hostKey,
      },
    };

    try {
      const response = await axios.request(options);

      // ✅ Clean the nested response
      const cleanedData =
          response.data?.data?.mainSearch?.edges?.map(
              (item) => item.node.entity
          ) || [];

      setMovies(cleanedData);
      setSearchTerm("");
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Movie Search</h1>

        <div className="mb-4">
          <input
              className="text-black bg-amber-300 p-2 mr-2 w-2/5"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Enter actor name (e.g. Tom Cruise)"
          />

          <button
              onClick={fetchData}
              className="bg-blue-500 text-white px-4 py-2"
          >
            Search
          </button>
        </div>

        {loading && <p>Loading...</p>}

        {!loading && movies.length === 0 && (
            <p>No results found</p>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {movies.map((movie) => (
              <div
                  key={movie.id}
                  className="border p-2 rounded shadow"
              >
                <h2 className="font-semibold mb-2">
                  {movie.nameText?.text}
                </h2>

                <img
                    src={movie.primaryImage?.url || "https://via.placeholder.com/150"}
                    alt={movie.nameText?.text}
                    className="w-full h-auto bg-cover "
                />

                {movie.knownFor?.edges?.[0]?.node?.title && (
                    <p className="mt-2 text-sm">
                      Known for:{" "}
                      {
                        movie.knownFor.edges[0].node.title.titleText
                            .text
                      }
                    </p>
                )}
              </div>
          ))}
        </div>
      </div>
  );
};

export default MoviePage;