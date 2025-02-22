import React from "react";

function Home() {
  const backgroundStyle = {
    backgroundImage: "url('https://i.postimg.cc/50dWXJns/fondo-final.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    padding: "20px",
  };

  return (
    <div style={backgroundStyle}>
      <h1>Bienvenido a #SoyReal</h1>
      <p>Un espacio para promover la autoestima y la autoaceptación.</p>
      <a href="https://drive.google.com/drive/folders/1l12zJYch3312E1tzOQEFi2dwV3cWM66K?usp=drive_link" target="_blank" rel="noopener noreferrer">
        <button>Sonrisa</button>
      </a>
    </div>
  );
}

export default Home;
