import React from "react";
import styles from '../styles/Home.module.css'

const About: React.FC = () => {
  return (
    <div>
      <h1>Sobre mim</h1>
      <p>
        Olá, agradeço por visitar meu portifólio e por se interessar em saber
        mais sobre mim.
      </p>
      <p>Vamos lá, </p>
      <p>
        Sou brasileira, nascida e criada na cidade de Campo Largo, Paraná,
        região metropolitana de Curitiba. Atualmente com 26 anos, sem filhos,
        apenas de 4 patas, e prestes a me casar com meu namorado desde os 16
        anos. Cresci com 6 dos meus 9 irmãos e fui uma criança e adolescente
        timida, porém muito estudiosa e dedicada o que me ajudou a vencer a
        timidez. Crescer com tantos irmãos me ensinou muita coisa,
        principalmente o trabalho em equipe, o que levo comigo até hoje. Aprendi
        a dividir, respeitar e ter garra, com eles. Cada um escolheu seu caminho
        e eu que gosto de desafios, segui para a TI, mas minha trajetória foi um
        tanto diferente segue o fio:
        <ul className={styles.list_experience}>
          <li className={styles.teste}>
            <h3>Técnica em Saúde Bucal</h3>
            <h6>06/2013 a 02/2021</h6>
            Meu primeiro vestibular foi para a graduação de Ciência da
            Computação. Na época eu não sabia bem o que queria, mas trabalhava
            em uma radiologia odontológica em contato direto com um programador
            que desenvolvia os sistemas que utilizavamos, porém não segui na
            área já de inicio, quis explorar mais. Fiz curso profissionalizante
            na área de saúde, pois já atuava na área realizando as atividades:
            <ol type="a">
              <li>Realização de documentações ortodônticas;</li>
              <li>
                Treinamento de novos funcionários quanto ao funcionamento das
                ferramentas de software na execução de exames;
              </li>
              <li></li>
              <li>
                Atendimento telefônico e presencial (pacientes e fornecedores);
              </li>
              <li>Controle da agenda e marcação de exames;</li>
              <li>Liberação de exames em todas os convênios odontológicos;</li>
              <li>
                Treinamento de novos funcionários quanto a liberação de exames e
                funcionamento das ferramentas de software
              </li>
              <li>
                Resultados: otimização do tempo na liberação de exames e
                diminuição no tempo de atendimento por paciente, aumentando a
                capacidade de atendimentos diários.
              </li>
            </ol>
            mas por mais que gostasse de atuar na área não era o que me fazia
            brilhar os olhos. Gostava de design, planejamento, análises,
            criatividade, arte. Cogitei fazer arquitetura mas não pensava em
            projetar casas e design de interiores também não me trouxe gama. Fiz
            minha primeira graduação em Gestão Pública. Porque? Fiz testes
            vocacionais e era uma das áreas que batia com o que eu gostava e me
            atraia: tecnologia da informação, contabilidade, transparência de
            dados e planejamento.
          </li>
          <li className={styles.teste}>
            <h3>Analista de Testes de Desenvolvimento de Sistemas</h3>
            <h6>03/2021 a 06/2022</h6>
            Comecei atuar na área logo após minha formação, numa empresa que
            cria soluçoes SAAS de contabilidade pública para portais da
            transparência de prefeituras. Ali, com meu conhecimento na área, eu
            contribui como analista de testes de desenvolvimento de sistemas,
            com as seguintes atividades:
            <ol type="a">
              <li>
                Criação e execução de cenários de testes em ferramentas de
                usabilidade e regras de negócio nos relatórios da LRF do Portal
                da Transparência em diferentes municípios e câmaras;
              </li>
              <li>
                Relatórios de testes com identificação de melhorias e correções;
              </li>
              <li>
                Restauro de bases de dados para testes em PostgreSQL e Oracle;
              </li>
              <li>Consulta de dados no banco PostgreSQL e Oracle;</li>
              <li>Atualização de bases com build no servidor Jenkins;</li>
              <li>
                Criação de manuais para os clientes sobre as novas ferramentas
                desenvolvidas;
              </li>
              <li>
                Aplicação de metodologias ágeis utilizando ferramentas como Jira
                e Kanbanize;
              </li>
              <li>
                Resultados: aumento na porcentagem de entregas de melhorias no
                ano de 2021 no Portal da Transparência.{" "}
              </li>
            </ol>
            Durante essa experiência, percebi mais a facibilidade e gosto que tenho
            em entender o funcionamento de ferramentas de softwares, análise de
            dados e em como melhorar a experiência do usuário. Iniciei meu
            estudos em testes automatizados para melhorar minha performance mas
            acabei entrando no universo da programação, me identificando tanto
            que decidi iniciar minha transição de carreira.
            <p>
              Consegui uma bolsa de estudos num programa para inserção de
              profissionais da Ti no mercado. A duração era de 9 meses e durante o
              curso alguns alunos são contratatos pelas empresas parceiras e foi
              a partir disto que tive minha primeira oportunidade de experiência profissional
              como programadora.
            </p>
          </li>
          <li className={styles.teste}></li>
        </ul>
      </p>
    </div>
  );
};

export default About;
