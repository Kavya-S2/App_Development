import React from 'react';

export default function Newsletter() {
  const styles = {
    container: {
      marginTop: '5rem',
      animation: 'fadeIn 1s ease-in-out'
    },
    row: {
      display: 'flex',
      justifyContent: 'center'
    },
    col: {
      maxWidth: '800px',
      width: '100%',
      border: '2px solid #ddd',
      borderRadius: '10px',
      padding: '1rem'
    },
    innerBorder: {
      border: '2px solid #ddd',
      borderRadius: '10px',
      padding: '1rem'
    },
    bgWhite: {
      backgroundColor: 'white',
      padding: '3rem',
      borderRadius: '10px',
      textAlign: 'center'
    },
    title: {
      marginBottom: '1.5rem'
    },
    titlePrimary: {
      color: '#007bff'
    },
    titleUppercase: {
      textTransform: 'uppercase'
    },
    formControl: {
      width: '100%',
      padding: '0.75rem 1rem',
      border: '1px solid #ddd',
      borderRadius: '5px',
      marginBottom: '1rem'
    },
    positionRelative: {
      position: 'relative',
      maxWidth: '400px',
      margin: '0 auto'
    },
    btnPrimary: {
      backgroundColor: '#ffa700', // Chrome yellow
      border: 'none',
      padding: '0.5rem 1rem',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      marginTop: '0.5rem',
      color: '#000', // Black text
      marginRight: '0.5rem'
    },
    btnPrimaryHover: {
      backgroundColor: '#e6b800'
    },
    fadeIn: {
      animation: 'fadeIn 1s ease-in-out'
    }
  };

  return (
    <div className="container newsletter mt-5 wow fadeIn" style={styles.container} data-wow-delay="0.1s">
      <div className="row justify-content-center" style={styles.row}>
        <div className="col-lg-10 border rounded p-1" style={styles.col}>
          <div className="border rounded text-center p-1" style={styles.innerBorder}>
            <div className="bg-white rounded text-center p-5" style={styles.bgWhite}>
              <h4 className="mb-4" style={styles.title}>
                Subscribe Our
                <span className="text-primary text-uppercase" style={{ ...styles.titlePrimary, ...styles.titleUppercase }}>
                  Newsletter
                </span>
              </h4>
              <div className="position-relative mx-auto" style={styles.positionRelative}>
                <input className="form-control w-100 py-3 ps-4 pe-5" type="text" placeholder="Enter your email" style={styles.formControl} />
                <button
                  type="button"
                  className="btn btn-primary py-2 px-3 mt-2 me-2"
                  style={styles.btnPrimary}
                  onMouseOver={(e) => e.target.style.backgroundColor = styles.btnPrimaryHover.backgroundColor}
                  onMouseOut={(e) => e.target.style.backgroundColor = styles.btnPrimary.backgroundColor}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
