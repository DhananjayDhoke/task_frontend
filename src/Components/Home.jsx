import { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
const Home = () => {

    const [companyData, setCompanyData] = useState({})
  
    console.log(companyData)
    useEffect(()=>{
        try {
            axios.get("http://localhost:3000/comdata").then((res)=>setCompanyData(res.data[0]))
        } catch (error) {
            console.log(error.message)
        }
    },[])
  return (
    <div>
      <div className="home-main-div">
        <div className="home-header-div">
          <div className="home-header-logo-div">
            <img src="/images/Pro-Legal-Serve-Logo 1.png" alt="" />
          </div>
          <div className="home-header-profile-div">
            <div className="home-img-div same-img">
              <img src="/images/Group 4.svg" alt="" />
            </div>
            <div className="same-img">
              <img  className="img-div" src="/images/Ellipse 1.png" alt="" />
            </div>
            <div className="home-img-text-div">
              <p className="person-name">John deo</p>
              <p className="person-role">server</p>
            </div>
          </div>
        </div>
        <div className="home-footer-div">
          <div className="home-left-div">
            <div className="home-left-div-text">company details</div>
          </div>
          <div className="home-right-div">
            <div className="home-right-container">
              <div className="home-right-div-heading">Company Information</div>
              <div className="home-right-div-text">
                <div className="home-com-inf-div">
                  <p className="home-p1 same-text">Operating company</p>
                  <p className="home-p2 same-text">Company type</p>
                  <p className="home-p3 same-text">Law firm or buisness name</p>
                </div>
                 {companyData ?  <div className="home-com-inf-div">
                  <p className="home-pro-p1 same-pro-text">{companyData.Operatingcompany}</p>
                  <p className="home-pro-p2 same-pro-text">{companyData.Companytype}</p>
                  <p className="home-pro-p3 same-pro-text">{companyData.buisnessname}</p>
                </div> :""}
                <p className="same-text add1">Address 1</p>
                <p className="com-add same-pro-text">Company Address</p>

                <div className="home-com-inf-div">
                  <p className="home-main-p1 same-text">State</p>
                  <p className="home-main-p2 same-text">City</p>
                  <p className="home-main-p3 same-text">County</p>
                </div>
               {companyData ? <div className="home-com-inf-div">
                  <p className="home-main-pro-p1 same-pro-text">{companyData.state}</p>
                  <p className="home-main-pro-p2 same-pro-text">{companyData.city}</p>
                  <p className="home-main-pro-p3 same-pro-text">{companyData.country}</p>
                </div> :""}

                <div className="home-com-inf-div">
                  <p className="home-main1-p1 same-text">Zip code</p>
                  <p className="home-main1-p2 same-text">Phone number</p>
                  
                </div>
               {companyData ? <div className="home-com-inf-div">
                  <p className="home-main1-pro-p1 same-pro-text">{companyData.zipcode}</p>
                  <p className="home-main1-pro-p2 same-pro-text">{companyData.phoneNumber}</p>
                  
                </div> :""}
                <hr className="hr-line" />
                {/* 2nd row */}
                <div className="home-right-div-heading hed-margin">Law firm information</div>
                
                <div className="home-com-inf-div">
                  <p className="home-p1 same-text">Firm speciality</p>
                  <p className="home-p2 same-text">Case managment</p>
                  
                </div>
                <div className="home-com-inf-div">
                  <p className="home-pro-p1 same-pro-text">Family Law</p>
                  <p className="home-pro-p2 same-pro-text">Server Manager</p>
                 
                </div>
                <p className="same-text add1">Account manager</p>
                <p className="com-add same-pro-text">Account manager</p>
                <hr className="hr-line" />
                {/* 3rd row */}

                <div className="home-right-div-heading hed-margin">Company notification settings</div>
                
                <div className="home-com-inf-div">
                  <p className="home-p1 same-text">New user invited</p>
                  <p className="home-p2 same-text">New user added</p>
                  <p className="home-p3 same-text">Payment method changed</p>
                </div>
                <div className="home-com-inf-div">
                  <p className="home-main2-pro-p1 same-pro-text">Email</p>
                  <p className="home-main2-pro-p2 same-pro-text">Email</p>
                  <p className="home-main2-pro-p3 same-pro-text">Email</p>

                 
                </div>
             

                <hr className="hr-line" />

                <button className="but">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
