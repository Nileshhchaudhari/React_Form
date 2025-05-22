import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#2c3e50',
      color: '#ecf0f1',
      padding: '40px 20px',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
      }}>
        {/* Company Description */}
        <div style={{
          flex: 1,
          minWidth: '250px',
          marginBottom: '20px'
        }}>
          <h3 style={{
            fontSize: '24px',
            marginBottom: '15px'
          }}>
            Wanderlust Adventures
          </h3>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.5'
          }}>
            Explore the world with us! Discover breathtaking destinations, plan your dream vacation, and make unforgettable memories with Wanderlust Adventures.
          </p>
        </div>

        {/* Navigation Links */}
        <div style={{
          flex: 1,
          minWidth: '200px',
          marginBottom: '20px'
        }}>
          <h4 style={{
            fontSize: '20px',
            marginBottom: '15px'
          }}>
            Quick Links
          </h4>
          <ul style={{
            listStyle: 'none',
            padding: 0
          }}>
            <li style={{ marginBottom: '10px' }}>
              <a href="/about" style={{
                color: '#ecf0f1',
                textDecoration: 'none',
                fontSize: '16px',
                transition: 'color 0.3s'
              }}
              onMouseOver={(e) => e.target.style.color = '#3498db'}
              onMouseOut={(e) => e.target.style.color = '#ecf0f1'}>
                About Us
              </a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="/destinations" style={{
                color: '#ecf0f1',
                textDecoration: 'none',
                fontSize: '16px',
                transition: 'color 0.3s'
              }}
              onMouseOver={(e) => e.target.style.color = '#3498db'}
              onMouseOut={(e) => e.target.style.color = '#ecf0f1'}>
                Destinations
              </a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="/tours" style={{
                color: '#ecf0f1',
                textDecoration: 'none',
                fontSize: '16px',
                transition: 'color 0.3s'
              }}
              onMouseOver={(e) => e.target.style.color = '#3498db'}
              onMouseOut={(e) => e.target.style.color = '#ecf0f1'}>
                Tours
              </a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="/contact" style={{
                color: '#ecf0f1',
                textDecoration: 'none',
                fontSize: '16px',
                transition: 'color 0.3s'
              }}
              onMouseOver={(e) => e.target.style.color = '#3498db'}
              onMouseOut={(e) => e.target.style.color = '#ecf0f1'}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div style={{
          flex: 1,
          minWidth: '200px',
          marginBottom: '20px'
        }}>
          <h4 style={{
            fontSize: '20px',
            marginBottom: '15px'
          }}>
            Follow Us
          </h4>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '15px'
          }}>
            <a href="https://facebook.com" style={{
              color: '#ecf0f1',
              fontSize: '24px',
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}
            onMouseOver={(e) => e.target.style.color = '#3498db'}
            onMouseOut={(e) => e.target.style.color = '#ecf0f1'}>
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" style={{
              color: '#ecf0f1',
              fontSize: '24px',
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}
            onMouseOver={(e) => e.target.style.color = '#3498db'}
            onMouseOut={(e) => e.target.style.color = '#ecf0f1'}>
              <FaTwitter />
            </a>
            <a href="https://instagram.com" style={{
              color: '#ecf0f1',
              fontSize: '24px',
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}
            onMouseOver={(e) => e.target.style.color = '#3498db'}
            onMouseOut={(e) => e.target.style.color = '#ecf0f1'}>
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div style={{
        borderTop: '1px solid #ecf0f1',
        paddingTop: '20px',
        marginTop: '20px',
        fontSize: '14px'
      }}>
        © 2025 Wanderlust Adventures. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;