import Layout from "@/components/layout";
import Aboutme from "../../components/section/Homepage_section/Aboutme";
import Circles from "@/components/circles";
import Portfolio from "@/components/section/Homepage_section/Portfolio";

const Homepage = () => {
  return (
    <>
      <Layout>
        <section>
          <Circles />
        </section>
        <section>
            <Aboutme />
        </section>
        <section>
          <Portfolio/>
        </section>
      </Layout>
    </>
  );
};
export default Homepage;
