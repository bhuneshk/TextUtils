import React,{useState} from 'react'
import PropTypes from 'prop-types'
// import TextForm from './TextForm'
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
    const [searchin,setSearch]=useState('Search in the Text-Box ');
    const handleonchange=(event)=>{
             setSearch(event.target.value)
    }
    const handletosearch=()=>{
            //  if({TextForm text}.search(searchin)>=0){
            //     setSearch('Yes')
            //  }
            //  else{
            //     setSearch('No')
            //  }
    }
  return (
    <nav className={`navbar navbar-expand-lg  bg-${props.mode} navbar-${props.mode}`}>
    <div className="container-fluid">
      {/* <Link className="navbar-brand" to="/">TextUtils</Link> */}
      <a className="navbar-brand" href="#">TextUtils</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            {/* <Link className="nav-link active" aria-current="page" to="/home">Home</Link> */}
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/about">About</Link>
            <a className="nav-link active" aria-current="page" href="/about">About</a>
          </li> */}
          
        </ul>
      </div>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`} >
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={props.toggleMode}/>
  <label htmlForfor="flexSwitchCheckDefault" className={'form-check-label'}>{`${props.mode==='light'?'Enable Dark Mode':'Enable Light Mode'}`}</label>
</div>
    </div>
  </nav>
  )
}
Navbar.propTypes={
    title: PropTypes.string,
    aboutText: PropTypes.string,
}

Navbar.defaultProps={
    title: "TextUtlis",
    aboutText: "About"
}

