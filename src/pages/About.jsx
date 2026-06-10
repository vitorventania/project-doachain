import React from 'react'
import { FaHeart, FaUsers, FaChartLine, FaLightbulb } from 'react-icons/fa'

export default function About() {
  return (
    <div className="about-page">
      <div className="page-header">
        <h1 className="page-title">Sobre o Projeto</h1>
        <p className="page-subtitle">Desenvolvimento de uma Ferramenta Tecnológica para Apoio a Instituições Carentes</p>
      </div>

      <div className="authors-section">
        <div className="authors-card">
          <h3 className="authors-title">Autores</h3>
          <ul className="authors-list">
            <li>Matheus Ransati Pereira</li>
            <li>Paulo Ricardo Rinaldi da Silva</li>
            <li>Vitor Gabriel Oliveira Ventania</li>
          </ul>
        </div>
      </div>

      <div className="about-content">
        <section className="about-section">
          <div className="section-header">
            <FaHeart className="section-icon" />
            <h2 className="section-title">Introdução</h2>
          </div>
          <div className="section-text">
            <p>
              A desigualdade social é algo evidente na sociedade brasileira atual, assim, há instituições dedicadas a ajudar as famílias carentes, mas cada vez mais a dificuldade ao acesso de canais confiáveis de doação ainda representa ser um grande problema na conexão entre doadores e instituições que necessitam de apoio. Diante deste cenário, de acordo com a ODS 10, apresenta-se a proposta de uma solução que integra diversas instituições em um único ambiente, garantindo segurança e transparência para os doadores e visibilidade para as instituições.
            </p>
          </div>
        </section>

        <section className="about-section">
          <div className="section-header">
            <FaUsers className="section-icon" />
            <h2 className="section-title">Objetivo</h2>
          </div>
          <div className="section-text">
            <p>
              A iniciativa busca facilitar a comunicação das necessidades reais dessas entidades, ao mesmo tempo em que oferece aos usuários uma experiência segura e transparente, incentivando a solidariedade e ampliando o impacto social positivo. Desse modo, conectar diversas instituições a fim de centralizá-las em um único sistema, permitindo a divulgação das mesmas e permitindo que as doações aconteçam de forma segura e confiável às instituições necessitadas.
            </p>
          </div>
        </section>

        <section className="about-section">
          <div className="section-header">
            <FaChartLine className="section-icon" />
            <h2 className="section-title">Resultados Esperados/Obtidos</h2>
          </div>
          <div className="section-text">
            <p>
              Espera-se que esta solução web centralize as instituições de doação, facilitando o acesso dos doadores a elas, além de divulgar as instituições interessadas. Os resultados esperados incluem a apresentação de um desenvolvimento web, tendo um acesso simples, com uma interface de fácil navegação para os usuários, sendo integrado com serviços blockchain de pagamento, trazendo segurança e rastreabilidade das doações, proporcionando conexão direta e facilitada entre as instituições até doadores além do Brasil, disponibilizando os recursos necessários para as instituições promoverem seu trabalho. Além disso, a busca pela escalabilidade e conexão remota faz parte de softwares bem sucedidos, por exemplo, os serviços da própria Google.
            </p>
          </div>
        </section>

        <section className="about-section">
          <div className="section-header">
            <FaLightbulb className="section-icon" />
            <h2 className="section-title">Método</h2>
          </div>
          <div className="section-text">
            <p>
              O desenvolvimento da aplicação é especificado em pesquisas bibliográficas sobre o uso de tecnologias digitais para ajudar as pessoas a realizarem doações de uma maneira rastreável, rápida e ambientada. De acordo com Bovério e Silva (2018), tecnologias digitais como blockchain vão além da criptomoeda, podendo contribuir para aumentar a segurança e confiabilidade em transações. Com base nesses estudos, foi possível compreender a importância da transparência e da facilidade na criação de uma plataforma de doações, direcionando o desenvolvimento para a criação de uma plataforma única de doação onde o usuário poderá escolher, com a utilização de gerenciadores de pagamento baseados em blockchain.
            </p>
          </div>
        </section>

        <section className="about-section">
          <div className="section-header">
            <FaHeart className="section-icon" />
            <h2 className="section-title">Considerações Finais</h2>
          </div>
          <div className="section-text">
            <p>
              O desenvolvimento de soluções tecnológicas alinhadas à ODS 10 ajuda as doações para instituições carentes e é uma oportunidade para estudantes da área de tecnologia aplicarem seus conhecimentos em benefício da sociedade. No entanto, é fundamental que essas ferramentas sejam pensadas para serem acessíveis, intuitivas e eficazes, garantindo impacto positivo e duradouro. A tecnologia, quando aliada à solidariedade, tem o poder de transformar realidades e contribuir para uma distribuição mais justa de recursos e valores, tornando a sociedade mais inclusiva e humana.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
