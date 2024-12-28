import React from "react";
import "../App.css"; // Adjust the path if App.css is not in the same folder

const Home = () => {
  return (
    <section
      id="home"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/back1.jpg)`, // Accessing images from the 'public' folder
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "50px 20px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          color: "#000",
          marginBottom: "20px",
        }}
      >
        Welcome to Purrfect Adoption
      </h2>
      <p
        style={{
          fontSize: "24px",
          fontWeight: "500",
          color: "#000",
          maxWidth: "800px",
          lineHeight: "1.5",
        }}
      >
        We are dedicated to finding loving homes for cats in need. Join us in our
        mission to help feline friends find their forever homes.
      </p>
    </section>
  );
};

export default Home;
