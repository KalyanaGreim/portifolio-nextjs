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
import { ArrowBack, ChevronLeft } from "@mui/icons-material";

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
    "Desenvolvimento Java avan??ado, uso das ferramentas necess??rias ao planejamento, execu????o e integra????o de Back-end para APIs, apps e microsservi??os. Pipeline Back-end - Planos e estruturas - Programa????o Java - Padr??es e algoritmos - Confiabilidade e testes - SQL e bancos de dados - Manuten????o de softwares - Microsservi??os."
  ),
  createData(
    "Desenvolvedor Full Stack",
    "SENAI/ACATE",
    "9 meses",
    "06/2022",
    " Desenvolvedor Fullstack - React e Java - 900h - Frontend React - 300h Fundamentos da programa????o WEB: HTML. CSS. Bootstrap. Javascript. Vari??veis- Estrutura de controle de fluxo. Operadores L??gicos e Aritm??ticos. Fun????es. Manipula????o do DOM. Interval e Timeout. ES6+. Arrow functions, export e import. Classes, promises. Async e await. Rest e spread, XHR, fetch. Framework React: Introdu????o. Renderiza????o. Componentes. Props e Proptypes. Mocks. Router e Cross Origin.Hooks e Redirects.Rotinas DEV: Versionamento. Gitflow.Kanban board. - Backend Java - 300h ??? Java: Introdu????o. Estruturas. Conceitos de POO. Construtores. Modificadores. Encapsulamento. Sobrecarga. Listas. Heran??a. Polimorfismo. Tratamento de exce????es. Servlet ??? Rotinas DEV: Metodologias ??geis. Scrum ??? SQL: Introdu????o. DDL. DML. Spring Data, Hibertnate ou Jooq ??? Spring: Introdu????o. Spring Boot. Spring Core. Spring MVC. Spring Securit. - Fullstack - 300h ??? DevOps: Cloud. Escalabilidade. CI/CD. Containers. Docker ??? Mensageria: Introdu????o. Exchanges. Filas. T??picos. Bidings. RabbitMQ ??? React: Biblioteca Redux ??? Rotinas DEV: T??cnicas de prioriza????o. Gest??o de tempo. ??? Spring: CRUD rest API. Deploy. Logging. Debug ??? Testes: Introdu????o. TDD. Teste unit??rios React (Jest e RTL). Teste unit??rios Java (Junit)."
  ),
  createData(
    "Bootcamp Programador Iniciante",
    "IGTI",
    "3 meses",
    "10/2021",
    "Fundamentos em Programa????o de Software, Java, Python e Fundamentos em Front-End"
  ),
  createData(
    "Tecnologo em Gest??o P??blica",
    "UNINTER",
    "24 meses",
    "12/2020",
    "Conhecimentos te??ricos e pr??ticos sobre a gest??o p??blica, aprimoramento das compet??ncias e s??lida forma????o profissional para a ??rea, bem como as habilidades necess??rias para solucionar os desafios di??rios com ??tica e transpar??ncia."
  ),
];

const Certificates: React.FC = () => {
  return (
    <div>
      <div className={styles.title_pages}>
        <IconButton aria-label="back" href="/" style={{background: 'rgb(144, 202, 249)', margin: '0px 0px 10px 0px'}}>
          <ChevronLeft />
        </IconButton>
        <p>Academic record</p>
      </div>
      <div className={styles.div_container}>
        <TableContainer component={Paper} className={styles.table_container}>
          <Table
            aria-label="collapsible table"
            className={styles.div_certificates}
          >
            <TableHead>
              <TableRow className={styles.table_head}>
                <TableCell>Detalhamento</TableCell>
                <TableCell>Curso</TableCell>
                <TableCell align="right">Institui????o</TableCell>
                <TableCell align="right">Dura????o</TableCell>
                <TableCell align="right">T??rmino</TableCell>
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
