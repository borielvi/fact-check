import React, { useState } from 'react';
import Claims from '../components/Claims';
import Header from '../components/Header'
//import { Link } from 'react-router-dom';

const Home = () => {
    const [search, setSearch] = useState('iphone');

    function closeClaimForm() {
        const pop_up_form = document.getElementById('pop-up');
        pop_up_form.style.visibility = 'hidden';
    }

    function submitSearch() {
        const inputSearch = document.getElementById('searchInput');
        setSearch(inputSearch.nodeValue);
        console.log(inputSearch);
    }

    return (
        <div id="Dashboard">
            <Header />
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-12 center m-4 search">
                            <label htmlFor="search"></label>
                            <input type="text" className="search-bar" placeholder="search for a claim" name="search" id='searchInput'/>
                            <button className="search-bar search-btn" onClick={submitSearch}>
                                <span>
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                                        <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                                    </svg>
                                </span>
                            </button>
                        </div>
                        <div className="col-12">
                            Trending Claims:
                        </div>
                        <Claims search={search}/>
                        {/*
                        <div className="col-sm">
                            <div className="loaded-data">
                                <div className="center-head">
                                    Groundnut causes pimples
                                </div>
                                <div className="contain-data">
                                    Claimant: Viral social media claim
                                </div>
                                <div className="contain-data">
                                    ClaimDate: September 30th, 2020
                                </div>
                                <div className="review-Btn">
                                    <button className="rev-btn">Review</button>
                                </div>
                            </div>
                            <div className="loaded-data">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ex voluptatibus adipisci labore necessitatibus, quos quas voluptatum molestias, excepturi unde corporis exercitationem, illo mollitia! Ab expedita similique reprehenderit dignissimos ratione!
                            </div>
                            <div className="loaded-data">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure in voluptatem, unde asperiores at veniam fugiat. Debitis, labore quaerat eaque adipisci quo quisquam id iure natus, cupiditate dolores corrupti accusamus!
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="loaded-data">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ipsa maiores ab odio minus dicta laborum inventore minima nihil quidem! Deleniti voluptate doloribus id obcaecati nesciunt sequi rem odio commodi.
                            </div>
                            <div className="loaded-data">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ex voluptatibus adipisci labore necessitatibus, quos quas voluptatum molestias, excepturi unde corporis exercitationem, illo mollitia! Ab expedita similique reprehenderit dignissimos ratione!
                            </div>
                            <div className="loaded-data">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure in voluptatem, unde asperiores at veniam fugiat. Debitis, labore quaerat eaque adipisci quo quisquam id iure natus, cupiditate dolores corrupti accusamus!
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="loaded-data">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ipsa maiores ab odio minus dicta laborum inventore minima nihil quidem! Deleniti voluptate doloribus id obcaecati nesciunt sequi rem odio commodi.
                            </div>
                            <div className="loaded-data">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ex voluptatibus adipisci labore necessitatibus, quos quas voluptatum molestias, excepturi unde corporis exercitationem, illo mollitia! Ab expedita similique reprehenderit dignissimos ratione!
                            </div>
                            <div className="loaded-data">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure in voluptatem, unde asperiores at veniam fugiat. Debitis, labore quaerat eaque adipisci quo quisquam id iure natus, cupiditate dolores corrupti accusamus!
                            </div>
                        </div>
                        */}
                    </div>
                </div>
                <div className="form-popup" id="pop-up">
                    <form className="form-container">
                        <h1>Write a claim</h1>
                    
                        <label htmlFor="claim"><b>Claim: </b></label>
                        <input className="claim_input" type="text" placeholder="Enter Claim" name="claim" />
                        
                        <button type="submit" className="btn post">Post</button>
                        <button className="btn cancel" onClick={ closeClaimForm }>Close</button>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default Home;