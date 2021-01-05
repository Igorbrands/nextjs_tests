import Head from 'next/head';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Igor Cantelmo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Bem vindo ao meu site!</h1>

        <Image src="/me.webp" alt="it's me, Igor!" width={200} height={200} />

        <p className="description">
          Um simples site onde posso mostrar um pouquinho dos meus estudos e
          projetos.
        </p>

        <p>Aqui estão alguns desenvolvidos recentemente:</p>
        <div className="grid">
          <a href="https://desafio-reactjs-mw.vercel.app/" className="card">
            <h3>Github explorer &rarr;</h3>
            <p>
              Aplicação React para pesquisa de usuários e seus respectivos
              repositórios.
            </p>
          </a>

          <a href="https://babygil.vercel.app/" className="card">
            <h3>Baby tea &rarr;</h3>
            <p>
              Formulário integrado com a API do Mailchimp, para o Chá de bebê do
              meu filho.
            </p>
          </a>

          <a href="https://musicfansmvp.vercel.app/" className="card">
            <h3>Music fans &rarr;</h3>
            <p>MVP de um projeto em desenvolvimento, feito com React.</p>
          </a>

          <a
            href="https://megahack-desafio-renner.vercel.app/"
            className="card"
          >
            <h3>Desafio Renner &rarr;</h3>
            <p>
              Projeto incompleto desenvolvido em equipe durante o Hackaton
              MegaHack.
            </p>
          </a>
        </div>
        <Image src="/me2.webp" alt="it's me, Igor!" width={200} height={200} />
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </main>

      <footer>
        <a
          href="https://github.com/Igorbrands"
          target="_blank"
          rel="noopener noreferrer"
        >
          Em construção por Igorbrands
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 60px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 1rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          background-color: #383a59;
          color: #fff;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
