import Head from 'next/head' 
import Layout from '../../components/Layout'
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Footer from '../../components/Footer';
import Gallery from './gallery';
import Resources from './eduresources';

const bannerData = {
  title: "School Education",
  des1: "Education is an effective tool to share knowledge on the issues of plastic waste and its impact on the environment.",
  des2: "We are working with both schools and universities where we introduce the issues with plastic waste and give workshops and activities to reduce waste. The aim is to inform and assist in positive behavior change in children and youth so they make sustainable choices and help the country in reducing its waste.",
  des3: "In local and rural areas, schools can be a very effective entry point in introducing solid waste management as they are fast learners and also can help influence their parents and family into changing behavior to reduce and manage waste effectively.",
  img : '/images/banner1.jpeg'
}

const resourceLists = [
  {
    img: '/images/edu-resource1.png',
    title: 'Curriculum',
    des: 'Education is an effective tool to share knowledge on the issues of plastic waste and its impact on the environment. We are working with both schools and universities where we introduce the issues with plastic waste and give workshops and activities to reduce waste.',
    download: true,
    size: '735 MB',
    date: '2022-10-23T08:25:19.094Z',
    links: []
  },
  {
    img: '/images/edu-resource2.png',
    title: 'Application',
    des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    download: true,
    size: '735 MB',
    date: '2022-10-23T08:25:19.094Z',
    links: []
  },
  {
    img: '/images/edu-resource3.png',
    title: 'Song / Poet',
    des: 'There are many ways to educate children about plastic awareness, but it should also be interesting and easy to understand for school children and kindergarten children. Check out our video below to learn more about it! To keep up to date with our future education plans, please visit our page and follow us.',
    download: false,
    size: '',
    date: '2022-10-23T08:25:19.094Z',
    links: ["https://www.youtube.com/watch?v=j8l1YL9Vw60", "https://www.youtube.com/watch?v=j8l1YL9Vw60"]
  },
  {
    img: '/images/edu-resource4.png',
    title: 'Handbook',
    des: ' Thant Myanmar conducted research to find out about what the schools in Yangon are teaching in the areas of Plastic Pollution and Climate Change. We also tested some of our teaching activities. In this video, we show an example of what we did at the Aung Zayyar Min Monastic School together with Wisdom for Life. We are now looking to expand our education team. If you are interested in teaching environmental education, please contact Nitika at nitika@thantmyanmar.com for more information. Minimum Requirements: Fluent in English and Burmese language + more than 1 year full-time working experience in teaching/training.',
    download: false,
    size: '',
    date: '2022-10-23T08:25:19.094Z',
    links: ["https://www.youtube.com/watch?v=j8l1YL9Vw60"]
  },
  {
    img: '/images/edu-resource5.png',
    title: 'Story',
    des: 'There are many ways to educate children about plastic awareness, but it should also be interesting and easy to understand for school children and kindergarten children. Check out our video below to learn more about it! To keep up to date with our future education plans, please visit our page and follow us.',
    download: false,
    size: '',
    date: '2022-10-23T08:25:19.094Z',
    links: ["https://www.youtube.com/watch?v=j8l1YL9Vw60", "https://www.youtube.com/watch?v=j8l1YL9Vw60"]
  },
  {
    img: '/images/edu-resource6.png',
    title: 'Waste Management in schools',
    des: 'There are many ways to educate children about plastic awareness, but it should also be interesting and easy to understand for school children and kindergarten children. Check out our video below to learn more about it! To keep up to date with our future education plans, please visit our page and follow us.',
    download: false,
    size: '',
    date: '2022-10-23T08:25:19.094Z',
    links: ["https://www.youtube.com/watch?v=j8l1YL9Vw60"]
  }
]

export default function Education() {
  return (
    <Layout> 
      <Head>
        <title>Education</title> 
      </Head>  
      <Header />
      <Banner data={bannerData}/>
      <Gallery />
      <Resources data={resourceLists}/>
      <Footer />
    </Layout>
  );
}