import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Upskill Logo/PNG/Logo Full Color.png';
function Logo() {
  return (
    <Link to="/" className="navbar-logo">
      <img src={logo} alt="upskill-fund-logo" />
      {/* <svg
        width="52"
        height="80"
        viewBox="0 0 259 248"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M63 1L2 51L47 46C27.7561 115.577 30.9926 150.27 47 209C56.9862 220.7 64.5199 225.466 79 233C93.9703 241.028 101.67 242.985 115 245C131.073 249.941 141.029 242.491 155 245L193 233C211.293 224.163 217.211 211.806 228.096 192.904C237.447 179.73 235.027 172.112 235 151C235.064 131.656 234.242 120.585 222 98L175 64C167.701 41.705 196.229 25.3423 214 33L251 46L258 21C239.326 5.12601 200 1 200 1C200 1 142.383 8.42829 139.096 33L133 64L146 98L180 122L193 151.904C189.38 171.298 192.681 180.824 180 192.904C170.833 196.155 165.475 199.17 155 203C144.999 207.548 125 209 125 209C107.195 204.108 81.2037 187.114 79 186C64.6617 133.934 63.9726 103.406 79 46L133 51L63 1Z"
          fill="#3498DB"
          stroke="#3498DB"
        />
      </svg> */}
    </Link>
  );
}

export default Logo;
