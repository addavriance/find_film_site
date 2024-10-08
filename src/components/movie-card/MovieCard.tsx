import React from 'react';
import './MovieCard.css';

export interface Movie {
    id: number;
    name: string;
    alternativeName: string;
    year: number;
    ageRating: number;
    countries: [
        {
            "name": string;
        }
    ];
    movieLength: number;
    totalSeriesLength: number;
    seriesLength: number;
    poster: {
        url: string;
    };
    rating: {
        kp: number;
    };
    description: string;
    shortDescription: string;
}

interface MovieCardProps {
    movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    const ratingColor = movie.rating.kp === 0 ? 'gray' : movie.rating.kp < 4 ? 'red' : movie.rating.kp < 6 ? 'darkorange' : 'green';

    const posterURL = movie.poster.url || "https://kinopoisk-ru.clstorage.net/30O43lI15/f21dd1iPt-lV/yVrhIG1SSUi-Gzz4kX3USOEqX8I1rrdelRA33bU1m-cYgAfmdYyVTgvzHHp0k_yNK07zlfAWna6ZAeAorqaZFA3axRENM4z5r5u8_CEddcxQTk_TtF4kXGfytM7zFthVmvOmx-S8hc5rwz2KYNP9edsvMFL0hN0YmaIgK14GOxTM7WSTvzMZGB7KnN3gnccs0A05wER9V08kkBTfUoWbVcsThWfka0buyAE-e_Mzvu1ZTkPwkKV-mtlDY_ksZIsWfD51sv3DGPhuSb6_cr10DVNPyBGmbiXtx0LFzJHHSKdosQUE1ZoHTmqjf_sQc78Muu_jwhCkDUt48nPInpYpZZ4OlND_cgqYf_icDADv9x0Ab9vh960UL9WCls9hJJilyBPVZFeopw3IQwwrEiLc3fg80OFglO74moOwKk_nmAQ8zyfhL9EbCLwJTW6zfyecgn5pwdetNL9WonafYLRqNrrTFuSluHdOiQG-ukFBrl-rHSLhIfQfeSmAUsqv5bkVja5kc32CSRkNGD5eUU60nWMca8MED9dtppO0f4L0ave40hSHloiXr6gSnhqCIc9NWTzSI6DGr2sY4FJ67kRYhl-8RRCNMHmYf0tvrRLdJjyhf3tzFH_VH8ail8-zFKqUSkFWFkRLVU6JY32Ig3PvPDh8oUPQRc-KCTIw-v2nKEZ-zHbBHaNoy5_4vpzQzfYdIFzqkpYfx_zFIfQdQwSrlyojtWR2mAUdagOcSdMRT537fiCSQxb9mjhwIkk81fg0Pm70gO5DKrheOdwvUV7mfkIOahLlvxf9RKLEHYLG2ETIUQf3FQo2XHnjHYgw4C_9irwCkWA1zJpIQuDofAU6Zmy9F-Bfkfpqf5otX-P_V-2yjjkQRQ917LTwNd_itJvlyWLHdPeKF7_bQU2aMXPt_qg9crIx5R1oCuKxim_1CMTvrUVhnEELma9K7f6gzJccUI8JwDVcNJyFkpefUxfqlasBJsbkmAUfa2N-eKCz7M2bnnHxI9R_6ArAkApOhppEHF104u2wG0vM2UwdULyWjOCtyeA3_Ba-1kH2zBNVuiUpQHc05qlFLHnDbYmQwc9uGP4BQTGXHQracoHqnqe6Nc4uZ5J8YeqYvyjtzmNPZ22CTcuwl67E_yUhhXwgt1gm2oFkJsUpJc1bcX-ZohOM7luussACBszry0LhyZ9Uu0S9b1TBrTGpqbxY_8_hXZV80i-6YwZcFY9HYhffMOR713hzNcQn-OT9-FNN2tIyD-9qTePQMPT-mkkQMIuMpjlkLC1FYGwS-NieG91Mov02PICuW2IEXqe89TB0XFK3WvUowlbHt9pUXOnT_9mQki_vCn4RAkAUf7pIwtH6H7Qa57_fttFvwfoo_MoPnBPv9h9xvcviNn0nXwXD5-0S5No3KgOG1ASJF1xboe7YwGGfbCufEXHg9N0oCiBgWB1kuVa_r2UhX_L6ez-5Tb9A_sftcI27kMeMFP91UYSvgwdrpriBV4Q2aTc-aVLOe-ARXx2rf0PyMtRuyzuDw4tuN6jm387Eo7-hOxssWx9M0--0DxKO-rP0voUvtGJHnZEFy-cLckWUFUjVzKqDjyrREa8cO0xSACEVLssKsUC4HdZqZV6_dKFOMmmrjktvvBE_Re8THUtyxG70_aewZ71h9JvVCoBUthbKxQ5p0k3JsyNer4rscAIQtQy7OEHAix_HKvdf_CbzzcO62fwa_5yjDRetEm0IcJV8x7y1k6W9wrV4VcgAF4TVqgcPyTG9qcCRr5wovNCDcObeqRqRUPpeljpmjf9W0W-DmJj-2x-OAj1XTyF-SUGHLMaspZJEfiNny_VLICb394nlrIkCz9ogwC2t6l7jkcJGb4j7c_AobaaJxc5tVQGNYwl77-kNXID-p_wjL_uiBaykPVeDpo1S54hVmnIkNZZJRi9aMm640oGenQsNw1IAdq17yDLie56litfvnYaj7_FpmS4I_j0z_WR-8L2YcFZu9_4UgJVtkweqhzth11f2iQYeeKL8-FHirm3IfwEAUrXteSgyohivhlqW33z3Es8hGrveWx4-8T3WjNG8yaMnLnTehQAXrkDGaCUKsiQmZsoG7nnDbpoRAg6em07wA9P1X3rrQIF7H8WZFs49RSD_8tmZPWmMbgHtt88iL6vjp95n_BSBJpwxZZqnCsN3F-UJ9m9pA05KQtPvbSof4cIS9r2LyIASmh1n2Abd_4UBTCGJCH5ajP0DLrRfAR-JwZW8ZK4HkgV_gJS7tbkiN4Y3GKfO61BtKHJS3J2ZLyLQYRZ_WVlwY8gfdtllzfxlgJzDu1puC76-wD2UfyAv-aKVHLTPVtOX_ILW6HSLEbSm55kkfGtR_CvzECyPuP8xEWGkLrkKINIoHeRa5oxsN_J9Uwi7_Btev1HtZzyy78sgBhy1XwaThM4g5bnXWlPHZ-Rp55wJQ94IQjP9LeuME8Ki9U05WpIj6r1WCJYcTwcjTDEays5bTC3QzOe9QZw54yW-hX_ngYTMo8a4pbgThVTn-hQeaoEdCcAz7R3pbqCCEhfOqwgT8ptcZ_kkjXzFMT8S2TkveL7eM_6nLpG9uyB3v2b91mE17lE365brUxamxer07DoxTHmAYv19eB4yIzHUPcgK8JFajNc6JC1sNEGMMblLzljtXkKsFI2CnOmR5Azl7jTw1E4Rx0vVKJGkl_VJBn36of2YgzFvXapvUMCitA16-XGz6Z4We0YOLHTinZEKi_073L0g_haO4U2Lw-atBxy30LduM7doV6tj5iY2ylZd-dO-aGFQ7WyoTBPzU8S_KylhwMruVMi2bM6kQU1Ti5r8eL_c4r2l_xBO-QJXLxW8xsOn7EGnyhfL4Gc25YiXjAsC_Hiz0GxP6HzhcdOmbViIIqHoTlS5JazehLL80Sgab9iMfFNuhe0inbvyRKwV7ySy5HyhF8gVi0AHJ7UaF9w4sy4bsBKc_9rcUOHClSy4s"

    return (
        <div className="movie-card">
            <div className="movie-header">
                <div className="movie-poster-section">
                    <img src={posterURL} alt={movie.name} className="movie-poster"/>
                    <a href={`https://www.kinopoisk.ru/film/${movie.id}`} target="_blank" rel="noopener noreferrer">
                        <button className="movie-button">Смотреть на Кинопоиске</button>
                    </a>
                </div>
                <div className="movie-details">
                    <div className="movie-title-section">
                        <span className="movie-title">
                            {movie.name}
                            <div className="movie-subtitle">
                                <p className="alternative-name">{movie.alternativeName || movie.name}</p>
                                <p>|</p>
                                <p className="country">{movie.countries[0].name}</p>
                                <p className="duration">{movie.movieLength || movie.totalSeriesLength || movie.seriesLength} минут</p>
                                { movie.ageRating && <p className="age-rating">{movie.ageRating}+</p> }
                            </div>
                        </span>
                        <div className="rating" style={{color: ratingColor}}>{(movie.rating.kp && movie.rating.kp.toFixed(1)) || "–"}</div>
                    </div>
                    <div className="desc-section">
                        {movie.description}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
