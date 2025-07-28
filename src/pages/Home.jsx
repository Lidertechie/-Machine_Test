import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCountries,
  loadMore,
  setRegion,
} from "../features/countries/countriesSlice";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import CountryCard from "../components/Home/CountryCard";
import Filter from "../components/Home/Filter";
import Slider from "../components/Home/Slider";
import { logout } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import FrameBox from "../components/Home/Frame";
import Footer from "../components/Home/Footer";

const Home = () => {
  const dispatch = useDispatch();
  const { filteredCountries, visibleCount, status, selectedRegion } =
    useSelector((state) => state.countries);

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(loadMore());
  };

  const handleRegionChange = (region) => {
    dispatch(setRegion(region));
  };

  const visibleCountries = filteredCountries.slice(0, visibleCount);

  return (
   <Container fluid className="p-4 px-3 px-md-5 centered-container">

      <Row className="align-items-center justify-content-between py-3">
        <Col>
          <h5 className="fw-bold">Countries</h5>
        </Col>
        <Col className="d-flex justify-content-end">
          <Filter selected={selectedRegion} onChange={handleRegionChange} />
        </Col>
      </Row>
      <div className="welcome-line-wrapper text-center my-5">
        <div className="welcome-line-container d-flex align-items-center justify-content-center">
          <div className="left-line"></div>
          <h4 className="mx-3 welcome-text">WELCOME</h4>
          <div className="right-line"></div>
        </div>
      </div>

      <Row className="my-4 align-items-stretch">
        <Col xs={12} md={4} className="order-1 order-md-2 mb-4 mb-md-0">
          <FrameBox />
        </Col>

               <Col xs={12} md={8} className="order-2 order-md-1 mb-4 mb-md-0">
          <div className="slider-box h-100">
            <Slider />
          </div>
        </Col>
      </Row>

      {status === "loading" ? (
        <div className="text-center my-5">
          <Spinner animation="border" />
        </div>
      ) : (
        <>
        <Row className="mt-4">
  {visibleCountries.map((country, idx) => (
    <Col key={idx} xs={12} md={6} lg={6} className="mb-4">
      <div 
        className="country-card" 
        style={{ 
          width: '100%', 
          height: '130px', 
          opacity: 1,
          margin: '0 auto'
        }}
      >
        <div 
          className="flag-container" 
          style={{ 
            width: '127px', 
            height: '96px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}
        >
          <img 
            src={country.flag} 
            alt={`${country.name} flag`} 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover' 
            }}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/127x96?text=Flag+Missing';
            }}
          />
        </div>
        <div className="country-info">
          <h5>{country.name}</h5>
          <p>{country.region}</p>
        </div>
      </div>
    </Col>
  ))}
</Row>


       {visibleCount < filteredCountries.length && (
  <div className="load-more-container">
    <button onClick={handleLoadMore} className="load-more-button">
      Load more
    </button>
  </div>
)}

        </>
      )}

      <Footer/>
    </Container>
  );
};

export default Home;