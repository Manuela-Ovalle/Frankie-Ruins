import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Nav() {
  // const [color, setColor] = useState('#FFB7D2')
  // const backgroundChange = (color) => {
  //   setColor(color)
  // }

  // useEffect(() => {
  //   document.body.style.backgroundColor = color
  // }, [color])

  return (
    <>
      <header>
        <div className="nav-bar">
          <h3 className="header-logo">
            <Link
              to="/"
              className="nav-a"
              // onClick={() => {
              //   setColor('#FFB7D2')
              // }}
            >
              FRANKIE RUINS
            </Link>
          </h3>
          <nav>
            <ul>
              {/* <li>
                <Link
                  to="/previouswork"
                  className="nav-a"
                  // onClick={() => {
                  //   setColor('#FFF4F8')
                  // }}
                >
                  Previous Work
                </Link>
              </li> */}
              <li>
                <Link
                  to="/about"
                  className="nav-a"
                  // onClick={() => {
                  //   setColor('#FFF4F8')
                  // }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.instagram.com/direct/t/101046727959506"
                  className="nav-a"
                  target="_blank"
                  // onClick={() => {
                  //   setColor('#FFF4F8')
                  // }}
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/frankie_ruins/"
                  target="_blank"
                >
                  <button className="ig-button">@frankie_ruins</button>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
