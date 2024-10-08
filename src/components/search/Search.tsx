import React, {useState} from 'react';
import axios from 'axios';
import './Search.css';
import { SearchIcon } from "../.micro/SearchIcon";
import { TailSpin as Spin } from "react-loading-icons"
import MovieCard, { Movie } from "../movie-card/MovieCard"

const Search: React.FC = () => {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<Movie | null>(null);


    const handleSearch = async (event: React.FormEvent) => {
        event.preventDefault();

        if (query.length > 250) return;

        setLoading(true);
        setResult(null);

        try {
            const country = await getCountry();
            const response = await axios.post(`http://${document.location.host.split(":")[0]}:8000/api/search`, { query }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Country': country,
                },
            });
            setResult(response.data);
        } catch (error) {
            console.error('Error fetching search results:', error);
        } finally {
            setLoading(false);
        }
    };

    const getCountry = async () => {
        const response = await axios.get('https://ipapi.co/json/');
        return response.data.country;
    };

    const setMockMovie = async () => {
        const data: Movie = {
                    "id": 1274284,
                    "name": "Илон Маск: Настоящий железный человек",
                    "alternativeName": "Elon Musk: The real iron man",
                    "year": 2018,
                    "description": "История жизни и достижений одного из самых ярких людей нынешнего столетия – изобретателя, предпринимателя, филантропа и безудержного мечтателя. Родившийся в Южной Африке в семье простого инженера и фотомодели, Илон Маск за свои 48 лет успел основать около десятка успешных инновационных компаний, с нуля заработать на своих идеях несколько десятков миллиардов долларов, трижды жениться, стать отцом пятерых детей… И он не сомневается, что его SpaceX совершит пилотируемый полет на Марс не позднее 2025 года.",
                    "shortDescription": "Гений, миллиардер, плейбой, филантроп. Документальная ода главному американскому мечтателю и его достижениям",
                    "movieLength": 74,
                    "totalSeriesLength": 0,
                    "seriesLength": 0,
                    "ageRating": 12,
                    "poster": {
                        "url": "https://image.openmoviedb.com/kinopoisk-images/1629390/02d7e5a4-ec8f-40b2-9bd1-7cdf1826269e/orig",
                    },
                    "rating": {
                        "kp": 7.433,
                    },
                    "countries": [
                        {
                            "name": "Великобритания"
                        }
                    ],
                }
        setResult(data);
    }

    return (

        <div className="search-container">
            {/*<button onClick={setMockMovie}>SetMockMovie</button>*/}
            <form className="search-form" onSubmit={handleSearch}>
                <div className="container">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder=""
                        maxLength={250}
                        className="input"
                        required
                    />
                    <label className="label">Find movie about...</label>
                </div>
                <button type="submit" className="search-button">
                    <SearchIcon></SearchIcon>
                </button>
            </form>
            {loading && <Spin className="loading"></Spin>}
            {result && <MovieCard movie={result}/>}
        </div>
    );
};

export default Search;
