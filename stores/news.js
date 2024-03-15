import one from '../assets/images/news/CIO_100_2021.jpg'
import two from '../assets/images/news/3d_mapping_2.jpg'
import three from '../assets/images/news/ketraco_ilis_3.jpg'
import four from '../assets/images/news/ketraco_4.jpg'
import five from '../assets/images/news/CIO_20Awards_5.jpg'
import six from '../assets/images/news/CIO_20Awards_6.jpg'
import seven from '../assets/images/news/Poster_7.jpg'
import eight from '../assets/images/news/CIO100_8.jpg'
import nine from '../assets/images/news/GIS Day_9.jpg'
import ten from '../assets/images/news/gis4R&D_10.jpg'
import eleven from '../assets/images/news/esri_partner_group.png'
import twelve from '../assets/images/news/twelve.jpeg'
import cloudmania from '../assets/images/news/cloudmania.png'
import fiberOptic from '../assets/images/news/fiber_optic.png'
import greenGrowth from '../assets/images/news/green_growth.png'
import tatuCity from '../assets/images/news/tatu_city.png'
import trimbleDays from '../assets/images/news/trimble_days.png'
import uon from '../assets/images/news/uon.png'
import esri_award_24 from '../assets/images/news/esri_award_2024.png'
import pdf from '../assets/images/news/pdf-logo.jpg'
import esri_logo from '../assets/images/news/esri-logo.jpg'

export const useNewsStore = defineStore('news', {
  state: () => ({
    activities: [
      {
        id: 'press-release-03-2024',
        title: 'Aegir Consult Receives Esri\'s New Markets Award at Esri Partner Conference for Exceptional Achievement',
        fileType: 'pdf',
        description: '<p>Nairobi, Kenya - March 11, 2024 - Aegir Consult received the New Markets Award at the 2024 Esri Partner Conference(EPC) held on March 10–11, 2024, in Palm Springs, California.This award was presented to Aegir Consult for exciting wins through leveraging ArcGIS for new markets and new customers.</p>',
        image: pdf,
        date: 'March, 2024',
        year: 2024
      },
      {
        id: 'esri-recognition-03-2024',
        title: 'Esri Recognizes Partners for Innovation and Excellence',
        // fileType: 'pdf',
        description: '<p class="py-5">Awards Granted for Exceptional Achievement Using GIS at Esri Partner Conference </p><p>REDLANDS, Calif.—March 11, 2024—Esri, the global leader in geographic information system (GIS) technology and location intelligence, honored select partners for their outstanding application of GIS at the Esri Partner Conference (EPC) held at the Palm Springs Convention Center in Palm Springs, CA. The award-winning companies are organizations in the Esri Partner Network and are recognized for their innovation and excellence in helping customers succeed with ArcGIS software.</p> <p class="py-5"><span class="font-bold text-lg">Read More: </span> <a href="https://www.esri.com/about/newsroom/announcements/esri-recognizes-partners-for-innovation-and-excellence-4/" class= "font-bold text-blue-400 underline hover:text-blue-600" > Awards Granted for Exceptional Achievement Using GIS at Esri Partner Conference </a></p>',
        image: esri_logo,
        date: 'March, 2024',
        year: 2024
      },
      {
        id: '2gzc7j12032024',
        title: 'Aegir Consult Limited Makes History at the Prestigious ESRI EPC Awards 2024',
        description: '<h3 class="font-bold text-gray-800 text-lg py-3">Introduction</h3><p>Aegir Consult Limited is thrilled to announce its outstanding recognition at the 2024 Esri Partner Conference (EPC). At this prestigious event, we were honoured to receive the <b class="text-gray-700 underline font-semibold">New Markets award</b>, marking a significant milestone in our journey within the GeoICT sector. While we celebrate this achievement, we are proud to stand alongside other African companies who have also been recognized for their excellence, showcasing the region\'s growing prominence in the global technology landscape.</p> <h3 class="font-bold text-gray-800 text-lg py-3">A Remarkable Triumph</h3> <p>Winning the New Markets award at the EPC is a testament to Aegir Consult Limited\'s dedication to innovation, collaboration, and excellence.Our efforts in leveraging ArcGIS technology to explore new markets and engage new customers have been acknowledged on a global platform.This achievement highlights the talent and ingenuity of our team and reinforces our commitment to driving impactful solutions and fostering digital transformation.</p><h3 class="font-bold text-gray-800 text-lg py-3">Setting Standards and Driving Progress</h3><p>This achievement underscores our ongoing commitment to excellence and our determination to push boundaries. It reflects the tireless efforts of our team, who continuously strive to deliver value to our clients and partners. This recognition sets a standard for similar African companies and serves as an inspiration for future generations of innovators and entrepreneurs across the continent.</p><h3 class="font-bold text-gray-800 text-lg py-3">Embracing Collaboration</h3><p>At Aegir Consult Limited, we believe in the power of collaboration and partnership. This award would not have been possible without the support of our clients, partners, and stakeholders. We extend our heartfelt gratitude to each and every one of them for their trust, support, and commitment to our shared vision. This award is a testament to the strength of our partnerships and underscores the importance of collaboration in driving success and fostering growth.</p><h3 class="font-bold text-gray-800 text-lg py-3">Looking Forward</h3><p>As we celebrate this momentous achievement, we remain steadfast in our commitment to pushing the boundaries of innovation, driving digital transformation, and making a positive impact in Africa and beyond. This award serves as a catalyst for us to continue striving for excellence, exploring new horizons, and delivering value to our clients and partners. With the support of our dedicated team and the continued trust of our stakeholders, we are confident that the best is yet to come for Aegir Consult Limited.</p><h3 class="font-bold text-gray-800 text-lg py-3">Conclusion</h3><p>The recognition received at the 2024 Esri Partner Conference is a testament to our unwavering dedication, our commitment to excellence, and our ongoing pursuit of innovation. We are incredibly proud of this achievement and excited about the opportunities it brings. We look forward to building on this success, forging new partnerships, and continuing to drive positive change in the GeoICT sector and beyond. Thank you to everyone who has been part of this incredible journey. Together, we will continue to shape the future and make a lasting impact on the world.</p>',
        image: esri_award_24,
        date: 'March, 2024',
        year: 2024
      },
      {
        id: '2gzc7jkjuik',
        title: 'Aegir Empowers Innovation at Inaugural Trimble Days Event in Africa',
        description: '<p>Aegir Consult proudly played a pivotal role in the inaugural Trimble Days event for Africa that ran for a week held in Nairobi.Our collaboration with Trimble and Optron Group showcased the power of technological innovation and collaboration across diverse industries.</p> <h3 class="font-bold text-gray-800 text-lg py-3">Pre-Summit Campaign:</h3><p>As a key partner, Aegir Consult actively participated in a dynamic three-day campaign leading to the Trimble Days summit.Our team collaborated with Trimble to organize workshops, product demonstrations, and expert sessions aimed at providing attendees with a comprehensive understanding of the latest advancements in geospatial technology.The pre- summit campaign set the stage for meaningful discussions, networking, and knowledge exchange among participants from various companies and industries.</p><h3 class="font-bold text-gray-800 text-lg py-3">Supporting Trimble:</h3><p>Aegir played a crucial role in supporting Trimble\'s mission to highlight the transformative impact of geospatial solutions in diverse sectors.Our experts shared insights into the practical applications of Trimble\'s technologies, demonstrating how these solutions can optimize operations, improve decision - making processes, and drive innovation across industries such as agriculture, construction, and surveying.</p><h3 class="font-bold text-gray-800 text-lg py-3">Summit in Nairobi:</h3><p>The culmination of the Trimble Days event was a highly anticipated summit held in Nairobi, bringing together professionals, thought leaders, and experts from across Africa. Participating in the inaugural Trimble Days event for Africa was a testament to Aegir\'s commitment to driving innovation and technological advancement.Our collaboration with Trimble Africa and Optron Group during the pre - summit campaign and active participation in the Nairobi summit underscore our dedication to pushing the boundaries of what is possible with geospatial solutions.As we continue to pioneer advancements in technology, we look forward to further opportunities to collaborate, inspire, and contribute to the transformative journey of geospatial technology in Africa and beyond.</p>',
        image: trimbleDays,
        date: 'January, 2023',
        year: 2023
      },
      {
        id: 'pfpek7yqmk',
        title: 'Aegir Consult Takes Center Stage at CCDA-XI: Advocating Green Growth and Climate Finance Solutions',
        description: '<p>Aegir Consult continues to champion environmental sustainability and technological innovation as it actively participated in the eleventh Conference on Climate Change and Development in Africa(CCDA- XI).Organized as a pre-event and technical segment of the Africa Climate Summit(ACS), the conference, held from September 1 to 3, 2023, in Nairobi, gathered influential stakeholders to deliberate on the crucial theme, \"Green Growth and Climate Finance Solutions for Africa and the World.\"</p><h3 class="font-bold text-gray-800 text-lg py-3">The Significance of CCDA-XI:</h3><p>Hosted by the Climate for Development in Africa initiative partners, including the African Union Commission, the Economic Commission for Africa, the African Development Bank, the Government of Kenya, and the Economic Commission for Africa, CCDA- XI served as a platform for African policymakers, climate change experts, civil society organizations, and stakeholders to engage in meaningful discussions.The conference aimed to provide valuable insights into the subthemes of the ACS and formulate outcome statements to shape recommendations for the ACS declarations.</p><h3 class="font-bold text-gray-800 text-lg py-3">Aegir\'s Involvement:</h3><p>As a leading advocate for technology-driven solutions and environmental sustainability, we actively participated in CCDA- XI.Our representatives engaged in discussions, shared expertise, and contributed insights on leveraging technology to address the challenges posed by climate change.Through our commitment to innovation, we aimed to play a pivotal role in shaping the discourse around green growth and climate finance solutions.</p><h3 class="font-bold text-gray-800 text-lg py-3">Theme: "Green Growth and Climate Finance Solutions for Africa and the World":</h3><p>The conference\'s central theme underscored the urgency of adopting sustainable practices and finding innovative financing solutions to mitigate the impact of climate change.Aegir showcased how technology, particularly Geographic Information Systems(GIS) and other advanced solutions, can play a transformative role in achieving green growth and facilitating the financing needed for sustainable development initiatives.</p><h3 class="font-bold text-gray-800 text-lg py-3">Galvanizing Regional Views:</h3><p>CCDA-XI and the ACS aimed to galvanize views from the African region ahead of the twenty-eighth session of the Conference of the Parties to the United Nations Framework Convention on Climate Change, scheduled for November and December 2023 in Dubai. Aegir recognizes the importance of fostering regional collaboration and aligning efforts to address climate change challenges collectively.</p><p>Aegir is proud to have been a part of CCDA-XI and the subsequent Africa Climate Summit event, contributing to the vital discussions on green growth and climate finance solutions. Our commitment to advancing technology for environmental sustainability aligns with the goals of the conference and the broader ACS initiative. As we move forward, we remain dedicated to leveraging innovative solutions that contribute to a more sustainable and resilient future for Africa and the world.</p>',
        image: greenGrowth,
        date: 'September, 2023',
        year: 2023
      },
      {
        id: 'apgxftqwi3',
        title: 'Aegir Advances Connectivity at the Kenya Fibre Data Summit',
        description: '<p>In a landmark event organized by The African Advanced Level Telecommunications Institute and sponsored by the Mozilla Foundation that brought together industry leaders, government institutions, and technology innovators, Aegir Consult took center stage at the Kenya Fibre Data Summit held on October 5th and 6th, 2023, at the AFRALTI Campus. As pioneers in GIS technology adoption and applied research, our active participation underscored our commitment to advancing connectivity and shaping the discourse on the Open Fibre Data Standard (OFDS) initiative.</p><h3 class="font-bold text-gray-800 text-lg py-3">The Significance of Fibre Optic Networks:</h3><p>Fibre optic networks stand as indispensable infrastructure for a modern economy, forming the backbone of telecommunications. Despite their pivotal role, the telecom sector has faced a challenge – the lack of readily available and usable data on fibre optic infrastructure. Recognizing this gap, the World Bank and the International Telecommunication Union (ITU) collaborated to launch the OFDS initiative. Partnering with Mozilla Corporation, they aimed to develop a data standard that facilitates the publication of precise and comprehensive data on fibre optic broadband infrastructure.</p><h3 class="font-bold text-gray-800 text-lg py-3">Aegir Consult at the Forefront:</h3><p>As industry leaders in GIS technology adoption and applied research technologists, Aegir Consult played a crucial role in the summit\'s success.Our experts actively engaged in sharing findings, creating awareness, and building capacity on the OFDS initiative.By participating in the Kenya Fibre Data Summit, we contributed to setting the stage for discussions on fibre connectivity, data sharing, and innovations related to emerging technologies.</p><p>The Kenya Fibre Data Summit stands as a pivotal moment in advancing the accessibility and usability of data on fibre optic broadband infrastructure. As both industry leaders and applied research technologists, we continue to be at the forefront of technological advancements that drive connectivity and innovation. Our active participation in events such as this reinforces our commitment to collaborative efforts that shape the future of telecommunications in Kenya and beyond. We look forward to further opportunities to contribute to the evolution of connectivity standards and to support initiatives that enhance Internet access for all.</p>',
        image: fiberOptic,
        date: 'October, 2023',
        year: 2023
      },
      {
        id: 'uq4txtwhgtm',
        title: 'Empowering Minds and Nurturing Innovation: Our Success at GIS Day 2023 in Nairobi',
        description: '<p>Aegir Consult, a leading force in the field of Geographic Information Systems (GIS), proudly participated in this year\'s GIS Day with an active presence at both the University of Nairobi Geospatial Engineering Student Association and the Mpesa Foundation Academy in Nairobi.The event, celebrated globally, serves as a platform to promote GIS technology and its applications across various sectors.Our enthusiastic engagement aimed to foster knowledge sharing, showcase innovative solutions, and inspire the next generation of GIS professionals.</p><h3 class="font-bold text-gray-800 text-lg py-3">University of Nairobi Geospatial Engineering Student Association Event:</h3><p>At the University of Nairobi, Aegir took part in an interactive session, providing students and faculty with insights into the latest developments in GIS technology. Our team presented case studies, highlighting the diverse applications of GIS in areas such as urban planning, environmental management, and disaster response. The event also featured hands-on workshops, allowing participants to explore GIS tools and applications firsthand.</p><h3 class="font-bold text-gray-800 text-lg py-3">Mpesa Foundation Academy Event:</h3><p>Our commitment to community engagement led us to the Mpesa Foundation Academy, where we shared our expertise in GIS with a focus on its role in addressing social and environmental challenges. Through engaging presentations and discussions, we demonstrated how GIS can be a powerful tool in fostering sustainable development, enhancing decision-making processes, and contributing to positive social impact. The Mpesa Foundation event provided a unique opportunity to connect with stakeholders dedicated to making a difference in their communities.</p><p class="py-3 font-bold">Key Highlights:</p><ol class="space-y-3 list-decimal"><li class="ml-5"><b>Cutting-Edge Presentations: </b>Aegir delivered dynamic presentations at both events, showcasing the latest advancements in GIS technology and its practical applications.</li><li class="ml-5"><b>Hands-On Workshops:  </b>Through hands-on workshops, attendees gained valuable experience using GIS tools, empowering them with practical skills applicable to real-world scenarios.</li><li class="ml-5"><b>	Networking Opportunities: </b>GIS Day provided a platform for networking, fostering connections between Aegir’s representatives, academia, and professionals from diverse fields.</li><li class="ml-5"><b>Inspiring the Next Generation: </b>By actively engaging with students, we aimed to inspire and mentor the next generation of GIS professionals, emphasizing the impact they can make on society.</li></ol><p class="py-3">Participating in GIS Day 2023 at the University of Nairobi and the Mpesa Foundation Academy was an enriching experience for Aegir Consult. We are committed to driving innovation, sharing knowledge, and collaborating with diverse communities to harness the full potential of GIS technology. Our involvement in these events reflects our dedication to making a positive impact through the application of GIS in various sectors. As we move forward, we remain steadfast in our mission to empower minds, nurture innovation, and contribute to a more sustainable and connected world.</p>',
        image: uon,
        date: 'November, 2023',
        year: 2023
      },
      {
        id: 'd9g4zeu6c0e',
        title: 'Aegir Consult Celebrates as Performance 365 Propels Tatu City to CIO 100 Bronze Award',
        description: '<p>In a triumphant moment for Tatu City Limited, our bespoke employee performance management solution, Performance 365, played a pivotal role in securing the bronze award at this year\'s prestigious CIO 100 event held in Diana, Kwale County.This recognition marks Tatu City\'s first of many IT awards, solidifying its position among the top 100 companies honored by CIO 100. Notably, this achievement is the seventh accolade earned by our clients in the six years since Aegir was established.</p> <h3 class="font-bold text-gray-800 text-lg py-3">Performance 365: Transforming Employee Performance Management</h3><p>Performance 365, Aegir\'s flagship solution for employee performance management, has consistently demonstrated its effectiveness in optimizing workforce productivity, fostering employee development, and driving overall organizational success.Tatu City\'s commitment to excellence in their human resources practices, coupled with the implementation of Performance 365, has earned them well-deserved recognition at the CIO 100 event.</p><h3 class="font-bold text-gray-800 text-lg py-3">CIO 100 Bronze Award: A Milestone for Tatu City Limited</h3><p>The CIO 100 event is a distinguished platform that recognizes organizations for their outstanding use of technology to drive innovation and business growth. Tatu City Limited\'s achievement of the bronze award underscores their commitment to leveraging cutting- edge solutions like Performance 365 to achieve excellence in employee performance management.This recognition also positions Tatu City among the top 100 companies in 2023 from more than 400 nominees, reaffirming their dedication to technological advancements and progressive business practices.</p><h3 class="font-bold text-gray-800 text-lg py-3">Seventh Award in Six Years: A Testament to Excellence</h3><p>The CIO 100 bronze award for Tatu City Limited adds another accolade to the growing list of achievements by Aegir Consult and our clients. With seven awards in just six years of existence, Aegir continues to be at the forefront of delivering innovative solutions that make a tangible impact on our clients\' success.The recognition received by our clients is a testament to the effectiveness and reliability of our bespoke solutions.</p><h3 class="font-bold text-gray-800 text-lg py-3">Looking Ahead: A Future of Innovation and Success</h3><p>As Aegir celebrates this momentous occasion, we remain committed to pushing the boundaries of technological innovation. Our journey continues, fueled by the success stories of our clients and the impact our solutions have on transforming businesses. We look forward to more opportunities to collaborate, innovate, and contribute to the success of our clients in the years to come.</p><p>As we continue to pave the way for excellence in technology solutions, we are proud to celebrate the success of Tatu City and look forward to many more achievements on the horizon.</p>',
        image: tatuCity,
        date: 'November, 2023',
        year: 2023
      },
      {
        id: 'p1tg7zfkayr',
        title: 'Aegir Takes Center Stage at Cloudmania’s “Navigating the ISV Landscape in Africa” Event',
        description: '<p class="pb-3">In a dynamic exploration of the challenges and opportunities within the Independent Software Vendor (ISV) landscape in Africa, Aegir Consult proudly participated in the event titled "Navigating the ISV Landscape in Africa: Challenges and Opportunities." Hosted at the Nairobi Garage on November 29, 2023, the event brought together industry experts, including Aegir’s CEO and Founder, a panelist, to delve into the unique hurdles faced by ISVs and strategies for successful navigation.</p><p class="pb-3">Victor Wahome shared Aegir’s experiences and insights from a Microsoft ISV\'s perspective.He discussed real- world challenges encountered, providing a practical understanding of the issues faced by ISVs in the African software market.</p><p class="font-bold">Key Highlights and Insights:</p><ul class="space-y-3 list-disc"><li class="ml-5">The event provided a comprehensive view of the challenges faced by ISVs in Africa, touching upon issues of infrastructure, market access, and compliance.</li><li class="ml-5">Real-world experiences shared by ISV representatives added a practical perspective to the discussion, allowing attendees to gain insights from the industry\'s forefront.</li><li class="ml-5">The Cloudmania perspective emphasized the significance of partnerships in overcoming challenges and achieving growth within the African software market.</li><li class="ml-5">The interactive panel discussion and Q&A session allowed for audience engagement, encouraging a deeper exploration of the discussed topics.</li></ul><p class="pt-3">Aegir Consult remains at the forefront of navigating challenges within the ISV landscape, contributing to a collective effort to foster growth, collaboration, and innovation within the African software industry.</p>',
        image: cloudmania,
        date: 'November, 2023',
        year: 2023
      },
      {
        id: 'wssow2vvotb',
        title: 'dx100 Symposium and Awards 2022',
        description:
          '<p>Aegir Consult celebrated with Tradewinds Aviation Services on their Ivory Mark Award at the inaugural dx100 Symposium and Awards (formerly CIO100) held at Leisure Lodge Beach & Golf Resort, Diani, Mombasa. We are proud to have designed, development, and deployed their MayFly Flight Tracking System. The Award recognizes adoption of enterprise information technology by modern businesses.</p>',
        image: twelve,
        date: 'November 2022',
        year: 2022
      },
      {
        id: '8jak0c3yqdo',
        title: 'Inaugural ESRI Partner Group Conference & KUGC Sponsors',
        description:
          '<p>Aegir Consult was one of the key partners participating in the Esri Eastern Africa Partner Conference on March 30th at the Mombasa Continental Resort. The primary goal of the conference, was to bring together all the regional partners under one roof to learn, discuss, explore business development strategies, opportunities, and strategic partnerships positioning. Aegir was also a key sponsor of the subsequent ESRI Kenya User Group on March 31st where we interacted, enlightened, and celebrated the positive gains of the Geospatial Industry in Kenya and Eastern Africa.</p>',
        image: eleven,
        date: 'March, 2022',
        year: 2022
      },
      {
        id: 'dy4pz0cok8',
        title: 'CIO 100 Awards 2021',
        description:
          '<p>Aegir Consult celebrated with Dawa Life Sciences on their Ivory Mark Award at the 2021 CIO 100 Awards held at Savora Whitesands, Mombasa. We are proud to have designed, development, and deployed their Performance Appraisal System. \n The award recognizes adoption of enterprise information technology by modern businesses.</p>',
        image: one,
        date: 'November, 2021',
        year: 2021
      },
      {
        id: '6tlsuxk345n',
        title: 'Redefining 3D Mapping',
        description:
          '<p>Aegir Consult is pleased to announce our partnership with Cubic 3D, a local start-up that deals with professional 3D printing services. \n 3D modeling is a key component of location intelligence vital for suitability analysis, situation awareness, urban planning and more. \n Visit our online shop to view and purchase our quality 3D printed products today!</p>',
        image: two,
        date: 'September, 2021',
        year: 2021
      },
      {
        id: 'u59uz3nywzi',
        title: 'KETRACO ILIS Launch',
        description:
          '<p>Aegir Consult celebrated the launch of the Integrated Location Intelligence System with the Kenya Electricity Transmission Company Limited. We are proud to have designed, development, and deployed this enterprise technology solution that automates wayleave acquisition and engineering construction and maintenance operations. \n The theme for the event was Driving Digital Transformation.</p>',
        image: three,
        date: 'August, 2021',
        year: 2021
      },
      {
        id: 'w20cs6qv2b',
        title: 'CIO 100 Symposium & Awards',
        description:
          "<p>Aegir Consult was represented at the CIO 100 EA Symposium & Awards held in Naivasha, Kenya on the 19th and 20th November 2020. Our nomination for automating KETRACO's transmission line route selection was honored under the Infrastructure category where it won the Gold Mark. The solution was in line with the theme of the event: Celebrating IT leadership in an accelerated digital age.</p>",
        image: four,
        date: 'November, 2020',
        year: 2020
      },
      {
        id: '2479vb24pwlh',
        title: 'QGIS Kenya User Group Support',
        description:
          "<p>Aegir's aim is to promote and support the geospatial community to improve geospatial readiness in Kenya and Eastern Africa. We work alongside key development partners and innovators to promote geospatial standards in mapping and spatial analytics. \n We are proud sponsors of the QGIS Kenya User Group where these goals can be articulated.</p>",
        image: five,
        date: 'July, 2020',
        year: 2020
      },
      {
        id: 'd6l7cyqwv4c',
        title: 'CIO 100 Symposium and Awards',
        description:
          "<p>Aegir Consult was represented at the CIO 100 EA Awards held in Naivasha, Kenya. Our nomination for automating KETRACO's transmission line route selection was honored under the Infrastructure category where it won Bronze. The solution was in line with the theme of the event: Harnessing Innovation in the Age of Automation.</p>",
        image: six,
        date: 'November, 2019',
        year: 2019
      },
      {
        id: '5gb3ifm0vcl',
        title: 'Youth Speak Forum',
        description:
          '<p>Aegir Consult Founder, Victor Wahome, was an invited guest speaker at the Accelevate Leads sponsored event whose theme was titled Transforming Education for Youth Employment. \n Aegir supports youth empowerment and the implementation of CBET in order to bridge the existing gap in skills transfer between industry and academic spaces.</p>',
        image: seven,
        date: 'October, 2019',
        year: 2019
      },
      {
        id: 'q3rhiib87p',
        title: 'CIO 100 2018',
        description:
          '<p>Aegir Consult presented the CIO 100 Kenya 2018 Infrastructure Category Gold Award to KETRACO for the Integrated Location intelligence System.\n From left (Mr. Fernandes Barasa, MD KETRACO; Mr. David Thuo, GIS Managing Coordinator; Mr David Kariuki, ICT Manager; Mr. Victor Wahome, CEO Aegir Consult)</p>',
        image: eight,
        date: 'December, 2018',
        year: 2018
      },
      {
        id: '90iovkvv17s',
        title: 'JKUAT GIS Day 2018',
        description:
          '<p>Aegir Consult celebrated the 2018 GIS Day alongside fellow GIS professionals, enthusiasts, students and the larger community at Jomo Kenyatta University of Agriculture and Technology (JKUAT) who hosted the event. \n We embrace spatial technologies as we roll-out our quality Location Intelligence services within Eastern Africa.</p>',
        image: nine,
        date: 'November, 2018',
        year: 2018
      },
      {
        id: 'uhx3piv4om',
        title: 'GIS for Research and Development',
        description:
          '<p>Aegir Consult Founder, Victor Wahome, was the invited guest speaker at Marist Research Center in Karen, Nairobi organized by Botlab. \n His talk was titled A Transformative Approach To Research and Development Using GIS.</p> ',
        image: ten,
        date: 'March, 2019',
        year: 2019
      }
    ],
    yearButtons: [
      { title: 'All Years', value: 'all' },
      { title: '2024', value: '2024' },
      { title: '2023', value: '2023' },
      { title: '2022', value: '2022' },
      { title: '2021', value: '2021' },
      { title: '2020', value: '2020' },
      { title: '2019', value: '2019' },
      { title: '2018', value: '2018' },
    ],
    selectedYearIndex: 0,
    selectedActivities: null,
    activityDetails: null,
    newsModal: false
  }),

  actions: {

    getYearNews(index, year) {
      this.selectedYearIndex = index

      if (year === 'all') {
        this.selectedActivities = this.activities
      } else {
        const yearActivities = this.activities.filter((item) => {
          return item.year == year
        })
        this.selectedActivities = yearActivities
      }
    },

    async getActivityDetails(id) {

      // let selectedActivity = await this.activities.find((item) => {
      //   item.id = id
      // })
      let selectedActivity = await this.activities.find((item) =>
        item.id == id
      )

      if (selectedActivity) {
        this.activityDetails = selectedActivity
      }

      // We will not use modal
      // if (this.activityDetails !== null) {
      //   this.newsModal = true
      // }
    }

  }
})