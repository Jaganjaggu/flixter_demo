import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';
import tmdbAxiosInstance from '../tmdbAxiosInstance';
import { Card, Col, Container,Row } from 'react-bootstrap';


function Banner({ fetchUrl }) {
    const base_url = "https://image.tmdb.org/t/p/original/";
    const [movie, setMovie] = useState([])
    const [randomMovie,setRandomMovie]  = useState({})

    const fetchData = async () => {
        const { data } = await tmdbAxiosInstance.get(fetchUrl)
        setMovie(data.results)
        setRandomMovie(data.results[Math.floor(Math.random()*data.results.length)])
        // console.log(response);
    }
    // console.log(allMovies);
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className=''>
            <Container>
                <Row>
                    <Col sm={8}>
                        <Carousel data-bs-theme="dark">
                            {
                                movie.map(item => (
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={`${base_url}/${item.backdrop_path}`}
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                            <h5 style={{color:'white',fontSize:'50px'}}>
                                                {item.name}
                                            </h5>
                                            <p style={{color:'white',fontSize:'20px'}}>
                                                {item.overview.slice(0, 20)}
                                            </p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                ))
                            }
                        </Carousel>
                    </Col>
                    
                    <Col sm={4}>
                        <h5 style={{ color: 'orange', fontSize: '25px' }}>Next Movies</h5>
                        <div>
                            <div>
                               
                                        <div>
                                            <Card style={{ width: '18rem' }}>
                                                <Card.Img variant="top" src={`${base_url}/${randomMovie?.backdrop_path}`} />
                                                <Card.Body>
                                                    <Card.Title>{randomMovie.name}</Card.Title>
                                                    <Card.Text>
                                                       {randomMovie.overview?.slice(0,800)}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Banner
