import { useNavigate } from "react-router";
const Admin = () => {
  const navigate = useNavigate();
  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>Get All User Details</h1>
      <button
        style={styles.button}
        className="btn btn-primary"
        onClick={() => {
          navigate("/getUser");
        }}
      >
        GetUser
      </button>

      <h1 style={styles.h1}>Get All staff Details</h1>
      <button
        style={styles.button}
        className="btn btn-primary"
        onClick={() => {
          navigate("/getStaff");
        }}
      >
        Getstaff
      </button>

      <h1 style={styles.h1}>view collection by date</h1>
      <button
        style={styles.button}
        className="btn btn-primary"
        onClick={() => {
          navigate("/getCollection");
        }}
      >
        view
      </button>

      <h1 style={styles.h1}>Update Fare</h1>
      <button
        style={styles.button}
        className="btn btn-primary"
        onClick={() => {
          navigate("/updateFare");
        }}
      >
        Update Fare
      </button>

      <h1 style={styles.h1}>Add new Parking Area</h1>
      <button
        style={styles.button}
        className="btn btn-primary"
        onClick={() => {
          navigate("/addnewParking");
        }}
      >
        ADD
      </button>
    </div>
  );
};
const styles = {
  h1: {
    textAlign: "center",
    margin: 20,
    color: "black",
  },
  button: {
    align: "center",
    width: 400,
    marginLeft: 100,
  },

  container: {
    color: "black",
    backgroundColor: "grey",
    width: 600,
    height: 700,
    padding: 0,
    position: "relative",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
    borderColor: "black",
    borderRadius: 10,
    broderWidth: 1,
    borderStyle: "solid",
    boxShadow: "1px 1px 20px 5px #C9C9C9",
  },
};
export default Admin;
