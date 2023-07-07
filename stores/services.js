// const { defineStore } = require("pinia");
// import useAssets from "@/composables/imageAssets"

import coding_aegir from '@/assets/images/services/coding_aegir.jpg'
import location_intelligence from '@/assets/images/services/location_intelligence.jpg'
import geo_data from '@/assets/images/services/geo_data.jpg'
import equipment_aegir from '@/assets/images/services/equipment_aegir.jpg'
import sys_integration from '@/assets/images/services/sys_integration.jpg'
import geo_services from '@/assets/images/services/geo_services.jpg'
import hardware_equipment from '@/assets/images/services/hardware_equipment.jpg'
import loc_intelligence from '@/assets/images/services/loc_intelligence.jpg'
import sys_dev from '@/assets/images/services/sys_dev.jpg'
import system_integration from '@/assets/images/services/system_integration.jpg'

export const useServicesStore = defineStore('service', {
  state: () => ({
    // imageAssets: useAssets(),
    services: [
      {
        slug: 'enterprise-system-development',
        title: 'Enterprise System Development',
        image: coding_aegir,
        coverImg: sys_dev,
        description:
          'We excel in Enterprise System Development, a core pillar of our service offerings. Our expertise lies in harnessing the power of leading technology partners such as Microsoft, ESRI, and IBM to create robust, scalable, and tailor-made solutions that streamline and elevate your organization\'s operations.',
        whatIs: 'Enterprise System Development refers to the process of creating and implementing comprehensive software applications that cater to the complex needs of modern businesses. These systems serve as a centralized hub, seamlessly integrating various departments and functions to optimize efficiency and decision-making.',
        approach: [
          {
            title: 'In-Depth Analysis',
            details: 'We believe that understanding your business is paramount to creating an effective enterprise system. Our team of skilled analysts will work closely with you to assess your organization\'s unique requirements, challenges, and objectives.'
          },
          {
            title: 'Tailored Solutions',
            details: 'One size does not fit all. Our approach is highly customized, ensuring that the solutions we create are precisely aligned with your specific business needs. Whether you require enterprise geoportals (EGIS), content management system (CMS), customer relationship management (CRM), integrated fleet management system (iFMS), or any other system, we\'ve got you covered.'
          },
          {
            title: 'Seamless Integration',
            details: 'The success of an enterprise system lies in its ability to integrate seamlessly with existing infrastructure. Our experts ensure a smooth integration process, minimizing disruptions and downtime.'
          },
          {
            title: 'User-Centric Design',
            details: 'User experience is a top priority for us. We develop intuitive interfaces that make navigating the system a breeze for all employees, regardless of technical expertise.'
          },
          {
            title: 'Sclability and Flexibility',
            details: 'We build systems that can evolve with your business. As your organization grows, our solutions are designed to scale effortlessly, accommodating increasing data volumes and user demands.'
          },
        ],
        whyChooseUs: [
          {
            title: 'Expertise',
            description: 'Our team consists of highly skilled developers and engineers with extensive experience in enterprise system development. Their expertise, coupled with our strong partnerships with industry giants, ensures you receive cutting-edge solutions.'
          },
          {
            title: 'Industry Experience',
            description: 'We have a proven track record of successfully implementing enterprise systems across various industries in the Sub-Saharan region. This deep industry knowledge allows us to understand your challenges better and offer targeted solutions.'
          },
          {
            title: 'Customer-Centric Approach',
            description: 'At Aegir Consult, our clients come first. We prioritize your satisfaction and work collaboratively to address your unique needs, creating solutions that drive tangible results.'
          },
          {
            title: 'Ongoing Support',
            description: 'Our commitment to your success doesn\'t end with implementation.We provide continuous support and maintenance to ensure your enterprise system performs optimally and stays up-to-date with the latest advancements.'
          },
        ],
        extra: 'Embrace the power of Enterprise System Development with Aegir Consult. Let us help you transform your business processes, enhance collaboration, and unlock new opportunities for growth. Together, we\'ll pave the way for a more efficient, agile, and digitally empowered organization.'
      },
      {
        slug: 'location-intelligence-services',
        title: 'Location Intelligence Services',
        image: location_intelligence,
        coverImg: loc_intelligence,
        description:
          'At Aegir Consult, we specialize in providing cutting-edge Location Intelligence Services, leveraging the power of geospatial data to help organizations make informed decisions, gain competitive advantages, and unlock hidden insights. With our expertise in geo-informatics and state-of-the-art technology, we empower businesses in Kenya and across the Sub-Saharan region to harness the potential of location-based data for smarter and more strategic operations.',
        whatIs: 'Location Intelligence (LI) is the process of analyzing and interpreting geospatial data to gain valuable insights into business operations, customer behavior, market trends, and more. By visualizing data on interactive maps, businesses can derive meaningful patterns and correlations, enabling them to make well-informed decisions.',
        approach: [
          {
            title: 'Data Collection and Integration',
            details: 'We help you collect and integrate geospatial data from various sources, including GPS, satellite imagery, social media, and IoT devices. Combining this data with your existing datasets provides a holistic view of your business landscape.'
          },
          {
            title: 'Customized Mapping Solutions',
            details: 'Our team of geospatial experts designs tailor-made mapping solutions that cater to your specific industry and business needs. From interactive dashboards to advanced analytical tools, we ensure that your location-based data is easily accessible and actionable.'
          },
          {
            title: 'Spatial Analysis and Visualization',
            details: 'Through advanced spatial analysis techniques, we unearth valuable patterns and trends hidden within your data. We translate these insights into visually engaging and informative maps and charts, simplifying complex information for better decision-making.'
          },
          {
            title: 'Real-time Monitoring',
            details: 'Stay ahead of the curve with real-time location monitoring. Our solutions enable you to track assets, monitor field operations, and respond quickly to changing conditions, fostering agility and efficiency.'
          },
          {
            title: 'Predictive Analysis',
            details: 'Leverage the power of predictive modeling to anticipate future trends and outcomes based on spatial data. This forward-looking approach allows you to proactively address challenges and seize emerging opportunities.'
          },
        ],
        whyChooseUs: [
          {
            title: 'Expert Geospatial Team',
            description: 'Our team comprises skilled GIS professionals and spatial analysts with extensive experience in location intelligence. Their expertise ensures the accuracy and reliability of your location-based insights.'
          },
          {
            title: 'Industry Versatility',
            description: 'We have successfully implemented location intelligence solutions across diverse industries, including logistics, retail, agriculture, healthcare, and urban planning. This versatility enables us to tailor our services to your specific sector.'
          },
          {
            title: 'Data Security and Compliance',
            description: 'We prioritize the security and confidentiality of your data. Our adherence to industry best practices and data protection regulations ensures that your information is safe with us.'
          },
          {
            title: 'Enhanced Decision-making',
            description: 'Our location intelligence services empower you to make data-driven decisions, enabling your organization to operate more efficiently and gain a competitive edge in your market.'
          }
        ],
        extra: 'Transform your business with the power of Location Intelligence Services from Aegir Consult. Embrace data-driven decision-making and discover the potential of your geospatial data to drive success in the dynamic and ever-evolving Sub-Saharan landscape. Let us be your guide to a more location-aware future.'
      },
      {
        slug: 'geodata-services',
        title: 'Geodata Services',
        image: geo_data,
        coverImg: geo_services,
        description:
          'At Aegir Consult, we are at the forefront of providing comprehensive Geodata Services that unlock the potential of spatial information for businesses and organizations across the Sub-Saharan region. Our geospatial expertise combined with advanced technologies empowers you to harness the value of geodata, enabling better decision-making, enhanced operational efficiency, and a deeper understanding of your environment.',
        whatIs: 'Geodata, also known as spatial data or geographic data, refers to any information linked to specific locations on the Earth\'s surface.This data can encompass a wide range of attributes, including coordinates, addresses, boundaries, and physical characteristics.Geodata is invaluable for analyzing patterns, relationships, and trends across various domains.',
        approach: [
          {
            title: 'Geodata Collection and Management',
            details: 'We assist you in collecting diverse geospatial data from multiple sources, ensuring its accuracy, integrity, and relevance. Our geodata management services streamline the organization and storage of this data for easy access and analysis.'
          },
          {
            title: 'Geospatial Analysis',
            details: 'Our team of skilled GIS analysts and experts employs state-of-the-art geospatial analysis techniques to derive meaningful insights from your geodata. We identify spatial patterns, perform geostatistical analysis, and conduct spatial modeling to uncover actionable information.'
          },
          {
            title: 'Customized Geospatial Solutions',
            details: 'Every business has unique requirements. We develop tailor-made geospatial solutions that align precisely with your industry needs, whether it\'s location- based marketing, asset tracking, urban planning, or environmental monitoring.'
          },
          {
            title: 'Geospatial Data Visualization',
            details: 'We believe in making complex geodata understandable and visually engaging. Our data visualization expertise allows us to present geospatial information through interactive maps, charts, and dashboards, simplifying decision-making processes.'
          },
          {
            title: 'Integration with Existing Systems',
            details: 'We ensure seamless integration of geodata services with your existing enterprise systems and workflows, ensuring that you can leverage location information to augment your existing business processes.'
          },
        ],
        whyChooseUs: [
          {
            title: 'Deep Geospatial Expertise',
            description: 'Our team boasts extensive experience in handling geospatial data and employing industry-leading tools and technologies. With a strong focus on accuracy and precision, we guarantee reliable geodata services.'
          },
          {
            title: 'Industry-Agnostic Solutions',
            description: 'We cater our geodata services to a wide array of industries, ranging from agriculture and logistics to utilities and government. Our versatility allows us to address unique challenges in different sectors effectively.'
          },
          {
            title: 'Scalable Solutions',
            description: 'Our geospatial solutions are designed to grow alongside your organization. Whether you\'re a small startup or an established enterprise, our services adapt to your evolving needs.'
          },
          {
            title: 'Collaborative Approach',
            description: 'We value open communication and collaboration. We work closely with your team to understand your goals and challenges, ensuring that our geodata services align perfectly with your strategic vision.'
          },
        ],
        extra: 'Harness the full potential of Geodata Services with Aegir Consult. Explore the power of location-based insights and make informed decisions that drive success and growth. Let us help you navigate the geospatial landscape and elevate your organization to new heights.'
      },
      {
        slug: 'hardware-and-equipment-supply',
        title: 'Hardware and Equipment Supply',
        image: equipment_aegir,
        coverImg: hardware_equipment,
        description:
          'At Aegir Consult, we take pride in being your trusted partner for Geospatial Hardware Equipment Supply, offering a diverse range of cutting-edge technologies from industry leaders like Trimble and Teltonika. We understand the critical role that reliable and high-quality hardware plays in geospatial applications, and our commitment to providing top-of-the-line equipment ensures that your projects operate with precision and efficiency.',
        whatIs: '',
        approach: [
          {
            title: 'Drones',
            details: 'Unmanned Aerial Vehicles (UAVs) or drones have revolutionized geospatial data collection. We offer a wide selection of drones with varying capabilities, including fixed-wing and multi-rotor options, equipped with advanced sensors to capture aerial imagery, LiDAR data, and more.'
          },
          {
            title: 'Handheld GPS Devices',
            details: 'Achieve centimeter-level accuracy in your field data collection with our handheld GPS devices. Whether you\'re surveying, mapping, or conducting asset management tasks, these rugged and user- friendly devices deliver dependable results.'
          },
          {
            title: 'Ground Penetrating Radar (GPR)',
            details: 'Uncover subsurface features with our high-frequency GPR systems. Ideal for archaeological surveys, utility detection, and geotechnical investigations, our GPR equipment empowers you to see beyond the surface.'
          },
          {
            title: 'Tablets and Mobile Devices',
            details: 'Stay connected and productive in the field with our range of robust tablets and mobile devices. Featuring high-performance processors and rugged designs, these devices ensure seamless data access and real-time collaboration.'
          },
          {
            title: 'IoT Devices',
            details: 'Our Internet of Things (IoT) devices enhance data collection and monitoring capabilities. From weather stations to environmental sensors, our IoT solutions expand your geospatial insights to new horizons.'
          }
        ],
        whyChooseUs: [
          {
            title: 'Trusted Partnerships',
            description: 'As authorized resellers of industry-leading products, we offer genuine and fully supported hardware, backed by manufacturer warranties.'
          },
          {
            title: 'Technical Expertise',
            description: 'Our team consists of skilled professionals who understand geospatial hardware inside out. We provide valuable insights and assistance in selecting the right equipment for your specific needs.'
          },
          {
            title: 'Comprehensive Solutions',
            description: 'Whether you\'re a surveyor, environmental consultant, or infrastructure planner, our geospatial hardware solutions cater to a wide range of applications, empowering you to excel in your field.'
          },
          {
            title: 'Customer Support',
            description: 'Your success is our priority. We offer dedicated customer support to ensure smooth equipment setup, training, and ongoing maintenance, guaranteeing your hardware performs optimally throughout its lifespan.'
          },
          {
            title: 'Competitive Pricing',
            description: 'We understand the importance of cost-efficiency. Our competitive pricing ensures that you get the best value for your investment without compromising on quality.'
          },
        ],
        extra: 'Equip your geospatial endeavors with the best-in-class hardware from Aegir Consult. From drones that soar above to handheld devices that anchor your fieldwork, we\'ve got the tools you need to take your projects to new heights.Let us be your reliable source for Geospatial Hardware Equipment Supply, and together, we\'ll achieve remarkable results in the ever-evolving world of geospatial technology.'
      },
      {
        slug: 'enterprise-system-integration',
        title: 'Enterprise System Integration',
        image: sys_integration,
        coverImg: system_integration,
        description:
          'At Aegir Consult, we stand out as experts in Enterprise Systems Integration, a core differentiator that sets us apart from other tech companies. Our unparalleled proficiency in seamlessly connecting and harmonizing diverse software and hardware systems enables organizations in Sub-Saharan region to achieve unmatched operational efficiency, data visibility, and streamlined workflows.',
        whatIs: 'Enterprise Systems Integration involves the unification of various standalone software applications, databases, and hardware components within an organization\'s IT infrastructure.By establishing smooth communication and data exchange between these systems, businesses can break down information silos, improve collaboration, and enhance the overall functionality of their technology ecosystem.',
        approach: [
          {
            title: 'Comprehensive Analysis',
            details: 'Before embarking on any integration project, we conduct a thorough analysis of your existing systems, business processes, and IT infrastructure. Understanding your unique requirements and pain points is crucial to crafting an integration strategy that aligns precisely with your objectives.'
          },
          {
            title: 'Tailored Integration Solutions',
            details: 'We understand that no two organizations are the same. Our approach is highly customized, ensuring that the integration solutions we propose are tailored to your specific needs, whether it\'s integrating a CMS with an ERP, connecting geospatial data to enterprise applications, or linking IoT devices to central monitoring systems.'
          },
          {
            title: 'Data Security Compliance',
            details: 'Data security is a top priority for us. We implement robust security measures and adhere to industry standards and compliance regulations throughout the integration process, safeguarding your sensitive information.'
          },
          {
            title: 'Scalability and Future-Readiness',
            details: 'Our integration solutions are designed with scalability in mind. As your business grows or technology evolves, our integrations can adapt seamlessly to accommodate new requirements and emerging technologies.'
          },
          {
            title: 'Minimal Distruption',
            details: 'We understand that any disruption to your operations can be costly. Our team of experienced integration specialists ensures that the integration process is smooth and minimally disruptive, avoiding downtime and maintaining business continuity.'
          }
        ],
        whyChooseUs: [
          {
            title: 'Expert Integration Team',
            description: 'Our team comprises highly skilled professionals with extensive experience in enterprise systems integration. They possess the expertise to tackle even the most complex integration challenges.'
          },
          {
            title: 'Versatility Across Industries',
            description: 'Our proven track record of successful integration projects spans various industries in the Sub-Saharan region. Our diverse experience allows us to comprehend your specific industry needs and offer tailored solutions.'
          },
          {
            title: 'Technology Partnerships',
            description: 'As a technology firm, we boast strong partnerships with leading tech giants like Microsoft, ESRI, and IBM. These partnerships provide us access to cutting-edge tools and resources, enhancing the effectiveness of our integration services.'
          },
          {
            title: 'Client-Centric Approach',
            description: 'We prioritize your satisfaction and work collaboratively to ensure that the integrated systems deliver tangible benefits, enhancing your organization\'s performance and competitiveness.'
          }
        ],
        extra: 'Empower your organization with the seamless cohesion of Enterprise Systems Integration from Aegir Consult. Unleash the full potential of your technology ecosystem and witness unparalleled efficiency and collaboration. Let us be the catalyst for your digital transformation, taking your business to new heights in the realm of connected enterprise solutions.'
      },
    ],
    service: []
  }),
  getters: {
  },
  actions: {
    async getOneService(slug) {
      try {
        // const singleService = this.services.find((item) => {
        //   item.product._id === product._id
        // })

        let filteredService = await this.services.find((item) =>
          item.slug === slug
        )

        if (filteredService) {
          this.service.push(filteredService)
          // this.service = filteredService
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
})