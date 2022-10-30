import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Feature from '../components/Feature';
import Service from '../components/Service';
import Resources from '../components/Resources';
import Footer from '../components/Footer';
import Partners from "../components/Partners";

const Index = () => {
  return (
    <Layout pageTitle="Thant Myanmar">
      <Header />
      <Hero />
      <Feature/>
      {/* <Service /> */}
      <Resources />
      <Partners />
      <Footer />
    </Layout>
  )
}

export default Index;
