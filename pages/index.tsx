import type { NextPage } from 'next';
import Header from '../components/layout/header/Header';
import Main from '../components/layout/main/Main';
import Nav from '../components/layout/nav/Nav';
import About from '../components/sections/about/About';
import Contact from '../components/sections/contact/Contact';
import Experience from '../components/sections/experiences/Experience';
import Testimonials from '../components/sections/testimonials/Testimonials';

interface Props {
  name: string;
}

export function getServerSideProps() {
  return {
    props: {
      name: 'Amaury Lapaque'
    }
  };
}

const Home: NextPage<Props> = (props: { name: string }) => {
  return (
    <>
      <Header />
      <Nav />
      <Main>
        <About />
        <Contact />
        <Experience />
        <Testimonials />
      </Main>
    </>
  );
};

export default Home;
