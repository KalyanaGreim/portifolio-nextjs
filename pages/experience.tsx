import React from "react";
import styles from "../styles/Home.module.css";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ArrowBack, ChevronLeft } from "@mui/icons-material";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const About: React.FC = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <div className={styles.title_pages}>
      <IconButton aria-label="back" href="/" style={{background: 'rgb(144, 202, 249)', margin: '0px 0px 10px 0px'}}>
          <ChevronLeft />
        </IconButton> 
      <p>Experiência profissional</p>
      </div>
      <div className={styles.about_me}>
        <p>
          Olá, agradeço por visitar meu portifólio e por se interessar em saber
          mais sobre mim.
        </p>
        <p>
          Sou brasileira, nascida e criada na cidade de Campo Largo, Paraná,
          região metropolitana de Curitiba. Atualmente com 26 anos, sem filhos,
          apenas de 4 patas, e prestes a me casar com meu namorado desde os 16
          anos. Cresci com 6 dos meus 9 irmãos e fui uma criança e adolescente
          timida, porém muito estudiosa e dedicada o que me ajudou a vencer a
          timidez. Crescer com tantos irmãos me ensinou muita coisa,
          principalmente o trabalho em equipe, o que levo comigo até hoje.
          Aprendi a dividir, respeitar e ter garra, com eles. Cada um escolheu
          seu caminho e eu que gosto de desafios, segui para a TI, mas minha
          trajetória foi um tanto diferente segue o fio:
        </p>
      </div>
      <div className={styles.list_cards}>
        <Card
          sx={{ width: 500, marginRight: "10px" }}
        >
          <CardHeader
            avatar={<Avatar aria-label="recipe" sx={{ bgcolor: blue[200] }}>1</Avatar>}
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Técnica em Saúde Bucal"
            subheader="06/2013 a 02/2021 - Radiologia Campo Largo"
          />
          <CardMedia
            component="img"
            height="194"
            image="/radiologia.jpg"
            alt="Paella dish"
            style={{borderTop: '4px solid rgb(144, 202, 249)'}}
          />
          <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ textAlign: "justify" }}
            >
              Meu primeiro vestibular foi para a graduação de Ciência da
              Computação. Na época eu não sabia bem o que queria, mas trabalhava
              em uma radiologia odontológica em contato direto com um
              programador que desenvolvia os sistemas que utilizavamos, porém
              não segui na área já de inicio, quis explorar mais. Fiz curso
              profissionalizante na área de saúde, pois já atuava na área
              realizando as atividades:
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent style={{ textAlign: "justify" }}>
              <Typography paragraph>
                - Realização de documentações ortodônticas; <br />
                - Atendimento telefônico e presencial; <br />
                - Controle da agenda e marcação de exames;
                <br />
                - Liberação de exames em todas os convênios odontológicos;
                <br />- Treinamento de novos funcionários quanto a liberação de
                exames e funcionamento das ferramentas de software;
              </Typography>
              <Typography paragraph>
                Resultados: otimização do tempo na liberação de exames e
                diminuição no tempo de atendimento por paciente, aumentando a
                capacidade de atendimentos diários.{" "}
              </Typography>
              <Typography paragraph>
                Mas por mais que gostasse de atuar na área não era o que me
                fazia brilhar os olhos. Gostava de design, planejamento,
                análises, criatividade, arte. Cogitei fazer arquitetura mas não
                pensava em projetar casas e design de interiores também não me
                trouxe gama. Fiz minha primeira graduação em Gestão Pública.
                Porque? Fiz testes vocacionais e era uma das áreas que batia com
                o que eu gostava e me atraia: tecnologia da informação,
                contabilidade, transparência de dados e planejamento.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        <Card
          sx={{ width: 500, marginRight: "10px" }}
        >
          <CardHeader
            avatar={<Avatar aria-label="recipe" sx={{ bgcolor: blue[200] }}>2</Avatar>}
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Analista de Testes de Softwares"
            subheader="03/2021 a 06/2022 - Equiplano Sistemas"
          />
          <CardMedia
            component="img"
            height="194"
            image="/testes.jpg"
            alt="Paella dish"
            style={{borderTop: '4px solid rgb(144, 202, 249)'}}
          />
          <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ textAlign: "justify" }}
            >
              Comecei atuar na área logo após minha formação, numa empresa que
              cria soluçoes SAAS de contabilidade pública para portais da
              transparência de prefeituras. Ali, com meu conhecimento na área,
              eu contribui como analista de testes de desenvolvimento de
              sistemas, com as seguintes atividades:
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent style={{ textAlign: "justify" }}>
              <Typography paragraph>
                - Criação e execução de cenários de testes em ferramentas de
                usabilidade e regras de negócio nos relatórios da LRF do Portal
                da Transparência em diferentes municípios e câmaras; <br />
                - Relatórios de testes com identificação de melhorias e
                correções;
                <br />
                Restauro e consulta nas bases de dados para testes em PostgreSQL
                e Oracle;
                <br />
                - Atualização de bases com build no servidor Jenkins;
                <br />
                - Criação de manuais para os clientes sobre as novas ferramentas
                desenvolvidas;
                <br />- Aplicação de metodologias ágeis utilizando ferramentas
                como Jira e Kanbanize;
              </Typography>
              <Typography paragraph>
                Resultados: aumento na porcentagem de entregas de melhorias no
                ano de 2021 no Portal da Transparência.
              </Typography>
              <Typography paragraph>
                Durante essa experiência, percebi mais a facibilidade e gosto
                que tenho em entender o funcionamento de ferramentas de
                softwares, análise de dados e em como melhorar a experiência do
                usuário. Iniciei meu estudos em testes automatizados para
                melhorar minha performance mas acabei entrando no universo da
                programação, me identificando tanto que decidi iniciar minha
                transição de carreira.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        <Card sx={{ width: 500 }}>
          <CardHeader
            avatar={<Avatar aria-label="recipe" sx={{ bgcolor: blue[200] }}>3</Avatar>}
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Associate Developer II"
            subheader="07/2022 a 12/2022 - Involves Tecnologias"
          />
          <CardMedia
            component="img"
            height="194"
            image="/programadora.jpg"
            alt="Paella dish"
            style={{borderTop: '4px solid rgb(144, 202, 249)'}}
          />
          <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ textAlign: "justify" }}
            >
              Consegui uma bolsa de estudos num programa para inserção de
              profissionais da Ti no mercado. A duração era de 9 meses e durante
              o curso alguns alunos são contratatos pelas empresas parceiras e
              foi a partir disto que tive minha primeira oportunidade de
              experiência profissional como programadora. Minhas tarefas
              consistiam em:
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent style={{ textAlign: "justify" }}>
              <Typography paragraph>
                - Desenvolvimento Front-end em Javascript/Typescript utilizando
                React Js: desenvolvimento de componentes e páginas seguindo o
                design system, aplicações de regras de negócio, instalação de
                bibliotecas npm, integração com APIs; <br />
                - Desenvolvimento Backend em Java 11 + Spring: criação de
                endpoints, implementação com AWS para armazenamento de arquivos,
                regras de negócio, testes unitários, persistência de dados com
                Hibernate e JPA para obter conexões com bases de dados e
                operação com entidades. <br />
                - Criação de scripts e consulta no banco de dados MySQL; <br />{" "}
                - Criação de imagem Docker; <br />
                - Contato diário com git, criação de PR's e realização de Code
                Review; <br />
                - Implementação de trackeamento das interações do usuário (data
                analytics); <br />- Metodologias ágeis: Criação, refinamento e
                desenvolvimento de tasks com Kanban.
              </Typography>
              <Typography paragraph>
                Resultados: Desenvolvimento de um novo microsserviço, em que
                tive a oportunidade de contribuir desde o incio, entregando uma
                solução robusta e de qualidade.
              </Typography>
              <Typography paragraph>
                Nesta experiência pude sentir o gostinho do que quero daqui pra
                frente.
              </Typography>
              <Typography>Ser desenvolvedora!</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </div>
  );
};

export default About;
