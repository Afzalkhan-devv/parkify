import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";



const Myhome = ()=>{
    
    useEffect(() => {
        getfare();
      }, []);
      const navigate = useNavigate();
    
      const [fare, setfare] = useState([]);
      const [fareCard, setfarecard] = useState([]);
    
    const getfare = () => {
        axios
          .get("http://localhost:9095/parkifyAdmin/getFareDetails")
          .then((response) => {
            const result = response.data;
            console.log(result.data);
            const {twowheeler,fourwheeler}=response.data
    
            sessionStorage['twowheeler'] = twowheeler
            sessionStorage['fourwheeler'] = fourwheeler
    
            setfarecard(result.data);
          });
      };
    return (
    <div style={styles.container}>
         <div style={{ textAlign: "center" }}>
          <table style={styles.table}>
            <thead>
              <tr>
                
              </tr>
            </thead>
            <tbody>
              {fareCard.map((fares) => {
                return (
                  <tr>
                    <td>{fares.vehicleType}</td>
                    <td>{fares.fare}Rs.</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      <h1 style={styles.h1}>Book your slot</h1>
      <button
        style={styles.button}
        className="btn btn-primary"
        onClick={() => {
          navigate("/userhome");
        }}
      >
        Book Slot
      </button>

      <h1 style={styles.h1}>My Bookings</h1>
      <button
        style={styles.button}
        className="btn btn-primary"
        onClick={() => {
          navigate("/mybookings");
        }}
      >
        Click Here
      </button>

      
      

      <br></br>
      <br></br>
      <br></br>
      <button
        style={styles.button}
        className="btn btn-primary"
        onClick={() => {
          navigate("/signin");
        }}
      >
        Logout
      </button>
    </div>
  );
};
const styles = {
  h1: {
    textAlign: "center",
    margin: 20,
    color: "white",
  },
  button: {
    align: "center",
    width: 400,
    marginLeft: 100,
  },

  container: {
    color: "white",
    width: 600,
    height: 400,
    padding: 0,
    position: "relative",
    top: 100,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
    borderColor: "yellow",
    borderRadius: 10,
    broderWidth: 1,
    borderStyle: "solid",
    boxShadow: "1px 1px 20px 5px #C9C9C9",
  },
};


export default Myhome