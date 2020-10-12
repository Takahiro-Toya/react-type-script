import React from 'react';

export const Home = (props: any) => {

    return (
        <section>
            <section id="flight-seach-section">
                <form id="search-form">
                    <label>Departure</label>
                    <input placeholder="Brisbane"></input>
                    <label>Arrive</label>
                    <input placeholder="Taipei"></input>
                    <label>Date</label>
                    <input type="date"></input>
                    <label>Promocode</label>
                    <input placeholder="Promocode"></input>
                    <button>Search flight</button>
                </form>
                <div id="search-image">
                    <img src="https://cdn.pixabay.com/photo/2017/01/18/15/34/singapore-1990090_1280.jpg"></img>
                    <p id="text">Australia ~ Singapore $600 ~</p>
                </div>

            </section>
            <section id="topics">
                <h3>Specials</h3>
                <div className="topic-cards">
                    <div>
                        <h4>Tokyo</h4>
                        <p>Some text goes here with background of tokyo image hahah</p>
                    </div>
                    <div>
                        <h4>Taipei</h4>
                        <p>Some text goes here with background of tokyo image hahah</p>
                    </div>
                    <div>
                        <h4>Hanoi</h4>
                        <p>Some text goes here with background of tokyo image hahah</p>
                    </div>
                    <div>
                        <h4>Singapore</h4>
                        <p>Some text goes here with background of tokyo image hahah</p>
                    </div>
                </div>
            </section>
        </section>
    )

}