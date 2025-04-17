import React, { useState } from "react";
import boloChc from '../assets/Images/chocolate.jpg';
import boloMo from '../assets/Images/morango.jpg';
import doces from '../assets/Images/doces variados.jpg';
import macaroni from '../assets/Images/macaroni.jpg';
import infantil from '../assets/Images/infantil.jpg';


const bolos = [
  { id: 1, isTexto: true },
  { id: 2, image: boloChc, title: "Bolo de Chocolate", description: "Delicioso bolo de chocolate, feito com os melhores ingredientes e a receita secreta de ganache com chocolate do padre." },
  { id: 3, image: boloMo, title: "Bolo de Morango", description: "Feito com morangos da fazenda e chantilly caseiro melhor sabor impossível!" },
  { id: 4, image: doces, title: "Macaroni", description: "O clássico macaroni francês com um toque de baunilha inesquecível." },
  { id: 5, image: macaroni, title: "Docinhos Diversos", description: "Confira a maior variedade de docinhos caseiros, diversos e saborosos" },
  { id: 6, image: infantil, title: "Pasta Americana", description: "Faça sua festa conosco, docinhos personalizados de pasta americana." },
  //lista de cards
];

const GradeBolos = () => {
  const [virado, setVirado] = useState({});

  const alternarFlip = (id) => {
    setVirado((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div style={styles.caixaTransparente}>
    <div style={styles.grid}>
      {bolos.map((item) =>
        item.isTexto ? (
          <div key={item.id} style={{ ...styles.item, ...styles.introBox }}>
            <h2>Bem-vindo à nossa confeitaria!</h2>
            <p>Grande variedade de deliciosos bolos e doces caseiros e feitos à mão, com amor e os melhores ingredientes.</p>
            <div style={styles.botoes}>
              <button style={styles.botao}>Comprar</button>
              <button style={styles.botao}>Customizar</button>
            </div>
          </div>
        ) : (
          <div
            key={item.id}
            style={styles.cardContainer}
            onClick={() => alternarFlip(item.id)}
          >
            <div
              style={{
                ...styles.card,
                transform: virado[item.id] ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              <div style={styles.front}>
                <img src={item.image} alt={item.title} style={styles.imagem} />
              </div>
              <div style={styles.back}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        )
      )}
    </div>
    </div>
  );
};

const styles = {
    caixaTransparente: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)', // cor branca translúcida
        borderRadius: '20px',
        padding: '2rem',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 0 20px rgba(0,0,0,0.1)',
      },
      
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1.5rem",
    padding: "2rem",
  },
  item: {
    backgroundColor: "#ffe6f0",
    borderRadius: "12px",
    padding: "1.5rem",
    boxShadow: "0 0 15px rgba(0,0,0,0.1)",
  },
  introBox: {
    
    color: "black",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  botoes: {
    marginTop: "1rem",
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
  },
  botao: {
    backgroundColor: "#e49ab0",
    border: "none",
    color: "#fff",
    padding: "0.5rem 1rem",
    borderRadius: "20px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  cardContainer: {
    perspective: "1000px",
  },
  card: {
    color: "black",
    width: "100%",
    height: "300px",
    transition: "transform 0.8s",
    transformStyle: "preserve-3d",
    position: "relative",
    borderRadius: "12px",
    cursor: "pointer",
  },
  front: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    borderRadius: "12px",
    overflow: "hidden",
  },
  back: {
    fontFamily: "'Indie Flower', cursive",
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#fff0f5",
    backfaceVisibility: "hidden",
    transform: "rotateY(180deg)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "12px",
    padding: "1rem",
  },
  imagem: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "12px",
  },
};

export default GradeBolos;
