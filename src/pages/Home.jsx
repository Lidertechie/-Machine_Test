
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries, loadMore, setRegion } from '../features/countries/countriesSlice';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import CountryCard from '../components/Home/CountryCard';
import Filter from '../components/Home/Filter';
import Slider from '../components/Home/Slider';
import { logout } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import './Home.css'

const Home = () => {
  const dispatch = useDispatch();
  const { filteredCountries, visibleCount, status, selectedRegion } = useSelector((state) => state.countries);

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
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
<Container fluid className="p-4 px-3 px-md-5 px-lg-6">
      <Row className="align-items-center justify-content-between py-3">
        <Col><h5 className="fw-bold">Countries</h5></Col>
        <Col className="d-flex justify-content-end">
          <Filter selected={selectedRegion} onChange={handleRegionChange} />
        </Col>
      </Row>
      <div className="welcome-line-wrapper text-center my-5">
        <div className="welcome-line-container d-flex align-items-center justify-content-center">
          <div className="left-line"></div>
          <h4 className="mx-3 fw-bold welcome-text">WELCOME</h4>
          <div className="right-line"></div>
        </div>
      </div>



      <Row className="my-4">
        <Col md={8}><Slider /></Col>
        <Col md={4}><div className="border p-3 text-center">Frame</div></Col>
      </Row>


      <Filter selected={selectedRegion} onChange={handleRegionChange} />

      {status === 'loading' ? (
        <div className="text-center my-5">
          <Spinner animation="border" />
        </div>
      ) : (
        <>
          <Row className="mt-4">
            {visibleCountries.map((country, idx) => (
              <Col key={idx} xs={12} md={6} lg={4} className="mb-4">
                <CountryCard country={country} />
              </Col>
            ))}
          </Row>

          {visibleCount < filteredCountries.length && (
            <div className="text-center my-4">
              <Button onClick={handleLoadMore} variant="dark">Load more</Button>
            </div>
          )}
        </>
      )}
    </Container>
  );
};

export default Home;
