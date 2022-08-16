import React from 'react'
import './Categories.css'

export const Categories = () => {
    return (
        <section>
            <div className="container">
                <div className="row justify_content_between">
                    <div className="col_6">
                        <div className="card_categories">
                            <img src="/img/smartwatch.webp" alt="smartwatch" />
                            <div className="card_categories_info">
                                <h3>
                                    Smart Watch For <br />
                                    Your Hand
                                </h3>
                                <div className="card_categories_arrow row align_items_center justify_content_between">
                                    <p>From $29.00</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col_6 categories_col">
                        <div className="col_12">
                            <div className="card_categories bottom">
                                <img src="/img/airpods.webp" alt="smartwatch" />
                                <div className="card_categories_info bottom_arrow">
                                    <h3>
                                        Headphones
                                    </h3>
                                    <div className="card_categories_arrow row f_column">
                                        <p>From $95.00</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col_12">
                            <div className="card_categories bottom">
                                <img src="/img/smartphone.webp" alt="smartwatch" />
                                <div className="card_categories_info bottom_arrow">
                                    <h3>
                                        Smartphone
                                    </h3>
                                    <div className="card_categories_arrow row f_column">
                                        <p>From $69.00</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
