import PropTypes from 'prop-types'
import React from 'react'
import JSONData from '../content/mycontent.json'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo backdrop-blur">
      <img
        src={JSONData.MainImage}
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          display: 'block',
          borderRadius: '50%',
        }}
      ></img>
    </div>
    <div className="content backdrop-blur">
      <div className="inner backdrop-blur">
        <h1
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: '600',
            color: '#ff04b4',
          }}
        >
          {JSONData.Name}
        </h1>
        ____
        <p>
          {JSONData.Description.map(item => {
            return (
              <div
                style={{
                  fontFamily: 'Fira Mono, monospace',
                  fontWeight: '100',
                  fontSize: 'small',
                  letterSpacing: '1px',
                }}
              >
                {item}
              </div>
            )
          })}
        </p>


      </div>
    </div>



    <nav
      className="backdrop-blur"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
      }}
    >

      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
            style={{
              fontFamily: 'Fira Mono, monospace',
              fontWeight: '200',
            }}
          >
            What is Punk Hunt?
          </button>
        </li>


        </ul>

        <div>

              <div
                style={{
                  fontFamily: 'Fira Mono, monospace',
                  fontWeight: '100',
                  fontSize: 'small',
                  letterSpacing: '1px',
                  'max-width': '600px',
                  'margin-top': '1em',
                }}
              >
              <p>CryptoPunks are taking over the billboards of Miami. Here's your chance to get involved.</p>
                <p>Find them and win a prize. To win, post the most selfies on Twitter with you and Cryptopunks on billboards and bus stops across the City. Use both hashtags #punkhunt and #cryptopunks. Good luck.</p>
              </div>


        </div>
          <br/>

        <ul>


        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
            style={{
              fontFamily: 'Fira Mono, monospace',
              fontWeight: '200',
            }}
          >
            Challenge Details
          </button>
        </li>

      </ul>
    </nav>





  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
