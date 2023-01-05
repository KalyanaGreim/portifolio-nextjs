import React from "react";
import styles from "../styles/Home.module.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const Projects: React.FC = () => {
  const data = [
    {
      id: 1,
      image: "/marvel.png",
      title: "Marvel Comics",
      descricao: "",
      frontend: "https://github.com/KalyanaGreim/marvel-comics",
    },
    {
      id: 2,
      image: "/form_multietapas.png",
      title: "Formulário Multi Etapas",
      descricao: "",
      frontend: "https://github.com/KalyanaGreim/Formul-rio-em-etapas",
    },
    {
      id: 3,
      image: "/mmo.png",
      title: "MMO",
      descricao: "",
      frontend: "https://github.com/KalyanaGreim/DEVinMMO",
    },
    {
      id: 4,
      image: "/devin.png",
      title: "DEV in Hortifruti",
      descricao: "",
      frontend:
        "https://github.com/DEVin-Involves-PariPassu/M3P2-DEVinHortifruti-FrontEnd",
      backend:
        "https://github.com/DEVin-Involves-PariPassu/M3P2-DEVinHortifruti-BackEnd",
    },
    {
      id: 5,
      image: "/lepice.png",
      title: "Lepice Bistrô",
      descricao: "",
      frontend: "https://github.com/KalyanaGreim/DevsFood",
    },
    {
      id: 6,
      image: "/",
      title: "Sistema de Vendas",
      descricao: "",
      backend: "https://github.com/KalyanaGreim/sistema-de-vendas",
    },
    {
      id: 7,
      image: "/",
      title: "Jogo RPG",
      descricao: "",
      backend: "https://github.com/KalyanaGreim/GameRPG_Projeto3",
    },
    {
      id: 8,
      image: "/sgi.png",
      title: "SGI",
      descricao: "",
      frontend:
        "https://github.com/KalyanaGreim/FRONTEND_SGI---Sistema-de-Gestao-Integrada",
    },
  ];
  return (
    <section>
      <p className={styles.title_about_me}>My Recent Projects</p>
      <p className={styles.subtitle_projects}>
        Para ver todos os projetos{" "}
        <a
          style={{ fontWeight: "bold" }}
          href="https://github.com/KalyanaGreim"
        >
          clique aqui
        </a>{" "}
      </p>
      <div className={styles.portfolio_container}>
        {data.map(({ id, image, title, frontend, backend, descricao }) => {
          return (
            <Card
              sx={{ width: 500, marginRight: "10px" }}
              key={id}
              className={styles.portfolio_item}
            >
              <CardHeader
                title={title}
                // subheader="06/2013 a 02/2021 - Radiologia Campo Largo"
              />
              <CardMedia
                component="img"
                height="194"
                image={image}
                alt={title}
                style={{ borderTop: "4px solid rgb(144, 202, 249)" }}
              />
              <CardContent>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{ textAlign: "justify" }}
                >
                  {descricao}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                {frontend && (
                  <a
                    href={frontend}
                    className="btn"
                    target="noopener noreferrer"
                  >
                    <Button variant="outlined" style={{ marginRight: "4px" }}>
                      Front-end
                    </Button>
                  </a>
                )}
                {backend && (
                  <a
                    href={backend}
                    className="btn btn-primary"
                    target="noopener noreferrer"
                  >
                    <Button variant="contained">Back-end</Button>
                  </a>
                )}
              </CardActions>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
