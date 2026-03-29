import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'O blogu | AI Blog',
  description: 'Saznajte vise o nasem blogu posvecem edukaciji o vestackoj inteligenciji na srpskom jeziku.',
};

export default function AboutPage() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>O blogu</h1>
        <p className={styles.lead}>
          Misija ovog bloga je da ucini vestacku inteligenciju razumljivom za sve.
        </p>
      </section>

      <section className={styles.content}>
        <h2>Zasto ovaj blog?</h2>
        <p>
          Vestacka inteligencija menja nacin na koji radimo, ucimo i komuniciramo.
          Ipak, vecina kvalitetnih resursa o AI dostupna je samo na engleskom jeziku.
          Ovaj blog nastao je iz zelje da tu prazninu popuni — pruzajuci jasne,
          pristupacne i prakticne tekstove o AI na srpskom jeziku.
        </p>

        <h2>Za koga je ovaj blog?</h2>
        <p>
          Blog je namenjen svima koji zele da razumeju vestacku inteligenciju,
          bez obzira na prethodno iskustvo:
        </p>
        <ul>
          <li>Programerima koji zele da primene AI u svojim projektima</li>
          <li>Studentima koji uce o masinskom ucenju i dubokom ucenju</li>
          <li>Profesionalcima koji zele da koriste AI alate u svakodnevnom radu</li>
          <li>Svima koji su radoznali o tome kako AI funkcionise</li>
        </ul>

        <h2>Koje teme pokrivamo?</h2>
        <ul>
          <li><strong>Generativni AI</strong> — ChatGPT, Claude, Midjourney i drugi alati koji stvaraju sadrzaj</li>
          <li><strong>Osnove masinskog ucenja</strong> — koncepti, algoritmi i primene na razumljiv nacin</li>
          <li><strong>AI alati za produktivnost</strong> — prakticni vodici za alate koji vam stede vreme</li>
          <li><strong>Etika i buducnost AI</strong> — pitanja privatnosti, predrasuda i odgovornog koriscenja</li>
        </ul>

        <h2>Kako mozete doprineti?</h2>
        <p>
          Ako imate predloge za teme, pitanja ili zelite da napisete gostujuci post,
          slobodno nas kontaktirajte preko drustvenih mreza navedenih u podnozju stranice.
          Svi su dobrodosli u nasu zajednicu.
        </p>
      </section>
    </main>
  );
}
