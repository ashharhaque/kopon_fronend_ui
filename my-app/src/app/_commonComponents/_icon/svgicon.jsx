// icon:cross-2 | Radix Icons https://icons.radix-ui.com/ | WorkOS
import * as React from "react";

function IconCross2(props) {
  return (
    <svg
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.782 4.032a.575.575 0 10-.813-.814L7.5 6.687 4.032 3.218a.575.575 0 00-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 00.814.814L7.5 8.313l3.469 3.469a.575.575 0 00.813-.814L8.313 7.5l3.469-3.468z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function MenuIcon({ className }) {
  return (
    <svg
      // className="feather feather-menu"
      className={className}
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="3" x2="21" y1="12" y2="12" />
      <line x1="3" x2="21" y1="6" y2="6" />
      <line x1="3" x2="21" y1="18" y2="18" />
    </svg>
  );
}

function AdressIcon({ className }) {
  return (
    <svg
      fill="#000000"
      className={className}
      width="30"
      height="30"
      viewBox="0 0 32 32"
      // style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
      version="1.1"
      // xml:space="preserve"
      // xmlns="http://www.w3.org/2000/svg"
      // xmlns:serif="http://www.serif.com/"
      // xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g id="Layer1">
        <path d="M16,2c-6.071,0 -11,4.929 -11,11c0,2.778 1.654,6.081 3.699,9.019c2.939,4.224 6.613,7.707 6.613,7.707c0.386,0.365 0.99,0.365 1.376,-0c0,-0 3.674,-3.483 6.613,-7.707c2.045,-2.938 3.699,-6.241 3.699,-9.019c0,-6.071 -4.929,-11 -11,-11Zm0,5.5c-3.036,0 -5.5,2.464 -5.5,5.5c0,3.036 2.464,5.5 5.5,5.5c3.036,-0 5.5,-2.464 5.5,-5.5c0,-3.036 -2.464,-5.5 -5.5,-5.5Zm0,2c1.932,0 3.5,1.568 3.5,3.5c0,1.932 -1.568,3.5 -3.5,3.5c-1.932,-0 -3.5,-1.568 -3.5,-3.5c0,-1.932 1.568,-3.5 3.5,-3.5Z" />
      </g>
    </svg>
  );
}

function CallIcon({ className }) {
  return (
    <svg
      fill="#000000"
      className={className}
      width="30"
      height="30"
      viewBox="0 0 32 32"
      // style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
      // version="1.1"
      // xml:space="preserve"
      // xmlns="http://www.w3.org/2000/svg"
      // xmlns:serif="http://www.serif.com/"
      // xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g id="Layer1">
        <path d="M2.446,12.036l0.212,0.368l8.844,15.318l0.866,0.5c0,0 -0.86,-0.489 -0.86,-0.489l0.213,0.368c0.613,1.063 1.806,1.769 3.367,1.869c1.357,0.087 2.901,-0.3 4.287,-1.1c1.654,-0.955 3.125,-1.804 3.125,-1.804c0.478,-0.276 0.642,-0.888 0.366,-1.366l-2.948,-5.106c-0.276,-0.478 -0.888,-0.642 -1.366,-0.366l-1.69,0.975c0,0 -5.878,-10.182 -5.878,-10.182c-0,0 1.689,-0.975 1.689,-0.975c0.479,-0.276 0.643,-0.888 0.366,-1.366l-2.948,-5.106c-0.276,-0.479 -0.887,-0.643 -1.366,-0.366c0,-0 -1.471,0.849 -3.124,1.804c-1.386,0.8 -2.494,1.944 -3.097,3.162c-0.694,1.403 -0.678,2.789 -0.065,3.851l0.007,0.011Zm13.535,-0.036c2.208,0 4,1.792 4,4c-0,0.552 0.448,1 1,1c0.552,0 1,-0.448 1,-1c-0,-3.311 -2.689,-6 -6,-6c-0.552,0 -1,0.448 -1,1c-0,0.552 0.448,1 1,1Zm-0,-4c4.415,0 8,3.585 8,8c-0,0.552 0.448,1 1,1c0.552,0 1,-0.448 1,-1c-0,-5.519 -4.481,-10 -10,-10c-0.552,0 -1,0.448 -1,1c-0,0.552 0.448,1 1,1Zm-0,-4c6.623,0 12,5.377 12,12c-0,0.552 0.448,1 1,1c0.552,0 1,-0.448 1,-1c-0,-7.727 -6.273,-14 -14,-14c-0.552,0 -1,0.448 -1,1c-0,0.552 0.448,1 1,1Z" />
      </g>
    </svg>
  );
}

function EmailIcon({ className }) {
  return (
    <svg
      fill="#000000"
      className={className}
      width="25"
      height="25"
      viewBox="0 0 32 32"
      // style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
      version="1.1"
      // xml:space="preserve"
      // xmlns="http://www.w3.org/2000/svg"
      // xmlns:serif="http://www.serif.com/"
      // xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g id="Layer1">
        <path d="M2,8.616l-0,15.384c-0,0.552 0.448,1 1,1l26,0c0.552,0 1,-0.448 1,-1l-0,-15.384l-13.479,8.237c-0.32,0.196 -0.722,0.196 -1.042,0l-13.479,-8.237Zm14,6.212l-12.81,-7.828l25.62,-0l-12.81,7.828Z" />
      </g>
    </svg>
  );
}

function FaxMachine({className}) {
  return (
    <svg
      fill="#000000"
      className={className}
      height="30"
      width="30"
      version="1.1"
      id="Capa_1"
      // xmlns="http://www.w3.org/2000/svg"
      // xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 611.999 611.999"
      // xml:space="preserve"
    >
      <g>
        <path
          id="Fax_1_"
          d="M587.02,125.52c-24.98,0-49.959,0-74.939,0c0-22.482,0-44.963,0-67.445c0-13.796-11.183-24.98-24.98-24.98
		c-120.735,0-241.469,0-362.204,0c-13.796,0-24.98,11.183-24.98,24.98c0,22.482,0,44.963,0,67.445c-24.98,0-49.959,0-74.939,0
		C11.183,125.52,0,136.704,0,150.5c0,81.6,0,163.2,0,244.8c0,13.796,11.183,24.98,24.98,24.98c24.98,0,49.959,0,74.939,0
		c0,29.496,0,58.992,0,88.489c0,14.386,0,28.771,0,43.157c0,8.328,1.684,14.541,8.121,20.428c2.998,2.742,6.199,4.52,10.109,5.618
		c3.621,1.015,7.2,0.929,10.86,0.929c58.997,0,117.994,0,176.99,0s117.994,0,176.99,0c3.662,0,7.244,0.086,10.867-0.93
		c3.913-1.099,7.117-2.881,10.114-5.627c6.438-5.895,8.11-12.118,8.11-20.447c0-14.393,0-28.788,0-43.181
		c0-29.478,0-58.957,0-88.435c24.98,0,49.959,0,74.939,0c13.796,0,24.98-11.183,24.98-24.98c0-81.6,0-163.2,0-244.8
		C612,136.705,600.817,125.52,587.02,125.52z M62.449,213.573c-12.071,0-21.857-9.786-21.857-21.857s9.786-21.857,21.857-21.857
		s21.857,9.786,21.857,21.857S74.52,213.573,62.449,213.573z M487.102,553.92H124.898V356.582h362.204V553.92z M487.102,125.52
		c-120.735,0-241.469,0-362.204,0c0-14.155,0-28.311,0-42.465c0-13.796,11.183-24.98,24.98-24.98c104.081,0,208.164,0,312.245,0
		c13.796,0,24.98,11.183,24.98,24.98C487.102,97.211,487.102,111.366,487.102,125.52z"
        />
      </g>
    </svg>
  );
}

export { IconCross2, MenuIcon, AdressIcon, CallIcon, EmailIcon,FaxMachine };
