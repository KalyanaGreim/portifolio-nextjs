import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "../styles/Home.module.css";
import { IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Collapse from "@mui/material/Collapse";

function createData(
  curso: string,
  instituicao: string,
  duracao: string,
  formacao: string,
  history: string
) {
  return {
    curso,
    instituicao,
    duracao,
    formacao,
    history,
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.curso}
        </TableCell>
        <TableCell align="right">{row.instituicao}</TableCell>
        <TableCell align="right">{row.duracao}</TableCell>
        <TableCell align="right">{row.formacao}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          style={{
            paddingBottom: 0,
            paddingTop: 0,
            backgroundColor: "rgb(248, 252, 255)",
          }}
          colSpan={6}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <p
              style={{ backgroundColor: "rgb(248, 252, 255)", padding: "10px" }}
            >
              {row.history}
            </p>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData(
    "Especialista Back-End Java",
    "EBAC",
    "12 meses",
    "12/2023",
    "Desenvolvimento Java avançado, uso das ferramentas necessárias ao planejamento, execução e integração de Back-end para APIs, apps e microsserviços. Pipeline Back-end - Planos e estruturas - Programação Java - Padrões e algoritmos - Confiabilidade e testes - SQL e bancos de dados - Manutenção de softwares - Microsserviços."
  ),
  createData(
    "Desenvolvedor Full Stack",
    "SENAI/ACATE",
    "9 meses",
    "06/2022",
    " Desenvolvedor Fullstack - React e Java - 900h - Frontend React - 300h Fundamentos da programação WEB: HTML. CSS. Bootstrap. Javascript. Variáveis- Estrutura de controle de fluxo. Operadores Lógicos e Aritméticos. Funções. Manipulação do DOM. Interval e Timeout. ES6+. Arrow functions, export e import. Classes, promises. Async e await. Rest e spread, XHR, fetch. Framework React: Introdução. Renderização. Componentes. Props e Proptypes. Mocks. Router e Cross Origin.Hooks e Redirects.Rotinas DEV: Versionamento. Gitflow.Kanban board. - Backend Java - 300h • Java: Introdução. Estruturas. Conceitos de POO. Construtores. Modificadores. Encapsulamento. Sobrecarga. Listas. Herança. Polimorfismo. Tratamento de exceções. Servlet • Rotinas DEV: Metodologias Ágeis. Scrum • SQL: Introdução. DDL. DML. Spring Data, Hibertnate ou Jooq • Spring: Introdução. Spring Boot. Spring Core. Spring MVC. Spring Securit. - Fullstack - 300h • DevOps: Cloud. Escalabilidade. CI/CD. Containers. Docker • Mensageria: Introdução. Exchanges. Filas. Tópicos. Bidings. RabbitMQ • React: Biblioteca Redux • Rotinas DEV: Técnicas de priorização. Gestão de tempo. • Spring: CRUD rest API. Deploy. Logging. Debug • Testes: Introdução. TDD. Teste unitários React (Jest e RTL). Teste unitários Java (Junit)."
  ),
  createData(
    "Bootcamp Programador Iniciante",
    "IGTI",
    "3 meses",
    "10/2021",
    "Fundamentos em Programação de Software, Java, Python e Fundamentos em Front-End"
  ),
  createData(
    "Tecnologo em Gestão Pública",
    "UNINTER",
    "24 meses",
    "12/2020",
    "Conhecimentos teóricos e práticos sobre a gestão pública, aprimoramento das competências e sólida formação profissional para a área, bem como as habilidades necessárias para solucionar os desafios diários com ética e transparência."
  ),
];

const Certificates: React.FC = () => {
  return (
    <div>
      <p className={styles.title_about_me}>Academic record</p>
      <div className={styles.div_container}>
      <TableContainer component={Paper} className={styles.table_container}>
        <Table
          aria-label="collapsible table"
          className={styles.div_certificates}
        >
          <TableHead>
            <TableRow className={styles.table_head}>
              <TableCell />
              <TableCell>Curso</TableCell>
              <TableCell align="right">Instituição</TableCell>
              <TableCell align="right">Duração</TableCell>
              <TableCell align="right">Término</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.curso} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    </div>
  );
};

export default Certificates;
