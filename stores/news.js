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
import esri_award_24 from '../assets/images/news/epc24-partner.jpg'
import pdf from '../assets/images/news/pdf-logo.jpg'
import esri_logo from '../assets/images/news/esri-logo.jpg'
import africas_talking from "../assets/images/partners/af_talking.png";
import ksa_logo from '../assets/images/news/ksa-logo.webp'
import ksa_expo from '../assets/images/news/ksa-expo.png'
import ksa_image from '../assets/images/news/ksa_image.jpeg'
import copyright_image from '../assets/images/news/news-copyright.jpg'
import dsa_summit from '../assets/images/news/dsa-summit.png'
import amss_study from '../assets/images/news/amss-study.png'
import big_baraza from '../assets/images/news/big-baraza.png'
import fulcrum from '../assets/images/news/fulcrum.png'
import microsoft from '../assets/images/news/ms-partner.png'
import zebra from '../assets/images/news/zebra.png'


export const useNewsStore = defineStore('news', {
  state: () => ({
    activities: [
      // {
      //   id: 'aegir-partners-with-fulcrum',
      //   title: 'Aegir Consult Partners with Fulcrum to Revolutionize Field Mobility in Sub-Saharan Africa',
      //   image: fulcrum,
      //   description: ``,
      //   date: 'November, 2024',
      //   year: 2024
      // },
      {
        id: 'aegir-partners-with-zebra-technologies',
        title: 'Aegir Consult Joins Zebra Technologies as an Official Reseller Partner',
        image: zebra,
        description: `<div class="max-w-4xl mx-auto px-4 py-10 space-y-6 text-gray-800">
  <p class="text-xl font-semibold">
    We are proud to announce that <span class="text-blue-600 font-bold">Aegir Consult</span> has officially joined the <span class="text-blue-600 font-bold">Zebra Technologies PartnerConnect</span> program as a Reseller Partner!
  </p>

  <p>
    <span class="font-semibold">Zebra Technologies</span> is a global leader in enterprise-grade technology solutions, renowned for its innovative products that empower businesses to gain a performance edge. Through this partnership, <span class="font-semibold">AEGIR</span> is now authorized to provide Zebra’s wide range of industry-leading solutions, including rugged mobile computers, barcode scanners, printers, RFID systems, and more.
  </p>

  <p>
    This partnership aligns with our commitment to delivering cutting-edge digital solutions that drive operational efficiency, especially across sectors such as logistics, manufacturing, retail, healthcare, and government services.
  </p>

  <p>
    By joining forces with Zebra Technologies, <span class="font-semibold">AEGIR</span> is positioned to offer enhanced value to our clients — combining our local expertise and custom digital platforms with globally trusted hardware and technology.
  </p>

  <p>
    We look forward to helping organizations across Africa unlock new possibilities through this collaboration.
  </p>

  <p class="text-lg font-semibold text-gray-900">
    Let’s build smarter, more connected operations — together.
  </p>

  <p>
    For partnership inquiries or to learn more about Zebra solutions, contact us at <a href="mailto:info@aegirconsult.systems" class="text-blue-600 underline">info@aegirconsult.systems</a>.
  </p>
</div>
`,
        date: 'April, 2025',
        year: 2025
      },
      {
        id: 'aegir-joins-isv-success-program',
        title: 'Aegir Consult Limited Joins Microsoft ISV Success Program to Drive Next-Generation Digital Transformation Solutions',
        image: microsoft,
        description: `<div class="space-y-6">
        <p class="font-normal">
            Aegir Consult Limited is proud to announce its official enrolment in the Microsoft ISV Success Program, a significant milestone that enhances our ability to deliver innovative, AI-driven, and cloud-powered solutions to businesses across various industries.
        </p>
        
        <p class="font-normal">
            The Microsoft ISV Success Program is designed to support Independent Software Vendors (ISVs) in building, scaling, and commercializing solutions on Microsoft's cloud ecosystem. This achievement underscores Aegir Consult's commitment to leveraging cutting-edge technologies to develop solutions that streamline operations, enhance decision-making, and accelerate digital transformation for our clients.
        </p>
        
        <h2 class="text-xl font-bold mt-8 mb-4">What This Means for Our Clients</h2>
        
        <p class="font-normal">
            With our inclusion in the ISV Success Program, our customers can now expect:
        </p>
        
        <ul class="list-none space-y-3">
            <li class="flex items-start">
                <span class="mr-2">✅</span>
                <span><span class="font-semibold">Enhanced Accessibility</span> – Our solutions are now available on Microsoft AppSource, making it easier for businesses to discover, integrate, and deploy them seamlessly.</span>
            </li>
            <li class="flex items-start">
                <span class="mr-2">✅</span>
                <span><span class="font-semibold">Faster Innovation</span> – Access to Microsoft's AI, cloud, and development resources means we can roll out new features and capabilities faster than ever.</span>
            </li>
            <li class="flex items-start">
                <span class="mr-2">✅</span>
                <span><span class="font-semibold">Greater Security & Scalability</span> – By leveraging Microsoft Azure's enterprise-grade infrastructure, our solutions will be more robust, secure, and scalable to support mission-critical operations.</span>
            </li>
            <li class="flex items-start">
                <span class="mr-2">✅</span>
                <span><span class="font-semibold">Seamless Integration</span> – Our applications are designed to work effortlessly with Microsoft Dynamics 365, Power Platform, and Azure AI, ensuring a smooth digital transformation journey.</span>
            </li>
            <li class="flex items-start">
                <span class="mr-2">✅</span>
                <span><span class="font-semibold">Optimized Cost & Efficiency</span> – With access to exclusive Microsoft resources, we can drive cost efficiencies while maintaining top-tier quality.</span>
            </li>
        </ul>
        
        <h2 class="text-xl font-bold mt-8 mb-4">Game-Changing Solutions on the Horizon</h2>
        
        <p class="font-normal">
            As part of our journey in the ISV Success Program, we are developing and enhancing solutions that will redefine industry standards. Expect AI-driven, GIS-enabled, and cloud-first solutions tailored for real estate management, construction oversight, regulatory compliance, and enterprise automation. These innovations will empower businesses to operate more efficiently, make data-driven decisions, and scale with confidence.
        </p>
        
        <h2 class="text-xl font-bold mt-8 mb-4">A Step Forward in Digital Transformation</h2>
        
        <blockquote class="border-l-4 border-blue-500 pl-4 italic my-4">
            <p class="font-normal">
                "At Aegir Consult, we have always been committed to real innovation, not just buzzwords. By joining Microsoft's ISV Success Program, we are reinforcing our promise to deliver scalable, transformative, and impactful solutions to our customers," said Victor Wahome, CEO of Aegir Consult. "This program allows us to leverage Microsoft's global cloud infrastructure and AI advancements, ensuring that our solutions remain cutting-edge, accessible, and future-ready."
            </p>
        </blockquote>
        
        <h2 class="text-xl font-bold mt-8 mb-4">Explore Our Solutions</h2>
        
        <p class="font-normal">
            We invite businesses to explore our solutions on Microsoft Marketplace and partner with us in their digital transformation journey once we publish.
        </p>
        
        <p class="font-normal">
            Stay tuned for more updates as we continue to innovate and push the boundaries of what's possible.
        </p>
    </div>`,
        date: '19th February, 2025 ',
        year: 2025
      },
      {
        id: 'aegir-partners-with-fulcrum',
        title: 'Aegir Consult Partners with Fulcrum to Revolutionize Field Mobility in Sub-Saharan Africa',
        image: fulcrum,
        description: '<h1 class="text-2xl font-bold text-blue-600">Aegir Consult Announces Strategic Partnership with Fulcrum</h1><p class="mt-4"> Aegir Consult is proud to announce a strategic partnership with Fulcrum, a leading US- based technology firm specializing in field mobility solutions.This collaboration marks a significant milestone as we become Fulcrum’s first partner in Sub - Saharan Africa.Together, we aim to deliver cutting - edge solutions that bridge the gap between field teams and office operations, driving operational efficiency and innovation across various sectors.</p></div><div class="mt-8   rounded-lg p-6"><h2 class="text-xl font-semibold text-blue-600">About Fulcrum</h2><p class="mt-4">Fulcrum is at the forefront of field mobility technology, offering an AI-powered platform designed to empower field teams with seamless geospatial data collection and process management capabilities. Their solutions are transforming workflows by automating data collection, integrating geospatial insights, and streamlining communication between field and office teams. With a strong focus on agility and efficiency, Fulcrum’s platform is a game-changer for industries that rely on accurate, real-time data from the field.</p></div><div class="mt-8   rounded-lg p-6"><h2 class="text-xl font-semibold text-blue-600">Why This Partnership Matters</h2><p class="mt-4">Field operations in Sub-Saharan Africa often face unique challenges, from infrastructure constraints to the need for real-time, actionable insights. By joining forces with Fulcrum, Aegir Consult is positioned to address these challenges head-on. Our partnership enables organizations across the region to:</p><ul class="mt-4 list-disc list-inside text-gray-700"><li><strong>Leverage AI-powered tools:</strong> Automate and optimize field-to-office workflows for faster decision-making.</li><li><strong>Enhance geospatial capabilities:</strong> Seamlessly collect, analyze, and manage geospatial data with precision.</li><li><strong>Boost operational efficiency:</strong> Reduce manual processes, enhance communication, and improve productivity.</li></ul><p class="mt-4">This partnership aligns with our mission to bring world-class technology solutions to the region, empowering businesses to thrive in an increasingly digital landscape.</p></div><div class="mt-8   rounded-lg p-6"><h2 class="text-xl font-semibold text-blue-600">Transforming Industries</h2><p class="mt-4">The potential applications of Fulcrum’s technology are vast, spanning industries such as:</p><ul class="mt-4 list-disc list-inside text-gray-700"><li><strong>Construction:</strong> Monitor project progress, ensure compliance, and manage site inspections.</li><li><strong>Telecommunications:</strong> Optimize network expansions and streamline field surveys.</li><li><strong>Agriculture:</strong> Map and monitor farms, track assets, and automate data collection.</li><li><strong>Utilities:</strong> Conduct inspections, manage assets, and ensure regulatory compliance.</li></ul></div><div class="mt-8   rounded-lg p-6"><h2 class="text-xl font-semibold text-blue-600">Looking Ahead</h2><p class="mt-4">As the first partner to bring Fulcrum’s solutions to Sub-Saharan Africa, Aegir Consult is excited about the transformative impact this technology will have on organizations across the region. Our team is committed to providing tailored support and expertise to ensure our clients maximize the benefits of these innovative solutions.</p><p class="mt-4">Stay tuned for updates, case studies, and success stories as we embark on this exciting journey with Fulcrum.</p></div>',
        date: 'November, 2024',
        year: 2024
      },
      {
        id: 'amss-study-presentation-strath',
        title: 'AMSS Study Presentation at Strathmore University’s Launch of Dynamic Spectrum Access (DSA) E-Learning Programme',
        description: '<div class= "max-w-4xl mx-auto px-4 py-8 text-gray-800"><article class="prose prose-lg max-w-none"><div class="text-lg text-gray-600 mb-8"><p class="font-semibold">Nairobi, Kenya – October 30, 2024</p></div><div class="space-y-6"><p class="text-gray-700">In a groundbreaking initiative to advance Kenya\'s telecommunications education and policy landscape, Strathmore University launched the Dynamic Spectrum Access (DSA) E-Learning Programme at the Transcentury Auditorium on October 30. The event brought together key stakeholders from government, regulatory bodies, telecommunication providers, educational institutions, and other sectors dedicated to enhancing connectivity and digital inclusion across Kenya.</p><p class="text-gray-700">The DSA E-Learning Programme, a collaborative effort by the Dynamic Spectrum Alliance (DSA), Strathmore University, and the UK\'s Foreign Commonwealth and Development Office (FCDO), aims to equip professionals with in-depth knowledge of spectrum sharing and dynamic access methodologies essential for modern telecommunications management. The programme comes at a crucial time, as Kenya positions itself to address the rising demand for broadband and spectrum resources, particularly in underserved areas.</p><h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Event Highlights</h2><p class="text-gray-700">The event commenced with welcome remarks by Leonard Mabele, a researcher with Strathmore University and AFRALTI (African Advanced Level Telecommunications Institute), followed by opening comments from Dr. Julius Butime, Dean of the School of Computing and Engineering Sciences at Strathmore.</p><p class="text-gray-700">Throughout the morning, attendees engaged in discussions on Kenya\'s digital skills landscape, led by Charles Juma, Country Lead for the Digital Access Programme (DAP), who highlighted ongoing initiatives aimed at empowering local communities and expanding digital literacy. This was followed by an address on national radio frequency spectrum strategies by Director Haji on behalf of David Mugonyi, Director General of the Communications Authority of Kenya, who outlined the regulatory authority\'s vision for spectrum allocation and management in line with Kenya\'s long-term connectivity goals.</p><h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Aegir Consult\'s AMSS Report Presentation</h2><p class="text-gray-700">A significant moment of the event was Aegir Consult Ltd\'s presentation on the 8 month long Automated Mid-Band Spectrum Sharing (AMSS) study. Our partners and primary partner, African Advanced Level Telecommunications Institute (AFRALTI) in collaboration with our key sponsor Dynamic Spectrum Allaince (DSA) shared key insights from the study, which investigates spectrum utilization for non-public networks in Kenya. Commissioned as part of the country\'s broader efforts to optimize spectrum resources, the AMSS study emphasizes the potential of spectrum sharing to alleviate congestion and improve network accessibility across various sectors.</p><p class="text-gray-700">The AMSS report provides critical recommendations on the regulatory and technological frameworks needed to enhance spectrum efficiency, enabling both private and public sector entities to better support Kenya\'s growing digital ecosystem.</p><h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Launch of Additional Connectivity Studies</h2><p class="text-gray-700">In tandem with the launch of the DSA programme, several comprehensive reports were released, offering valuable insights into Kenya\'s connectivity infrastructure and market dynamics. The following studies were presented:</p><ol class="list-decimal pl-6 space-y-4 text-gray-700"><li><strong>Assessment of the Wholesale Broadband Access and Fixed Retail Broadband Markets</strong> – A deep dive into Kenya\'s broadband landscape, examining market opportunities and challenges for enhancing broadband accessibility.</li><li><strong>Licensing and Legal Requirements for Wireless Internet Service Providers (WISPs)</strong> – A policy-focused report detailing regulatory requirements for WISPs and Internet Service Providers (ISPs) to establish and operate public Wi-Fi networks.</li><li><strong>Opportunities in Spectrum Sharing for Non-Public Networks</strong> – An analysis that addresses the potential for spectrum sharing to meet demand in sectors like agriculture, healthcare, and rural connectivity, where non-public networks can play a transformative role.</li></ol><p class="text-gray-700">These reports were officially presented by Dr. Martha Suarez, President of the Dynamic Spectrum Alliance, to Communication Authority of Kenya\'s Director Haji and Dr. Julius Butime, reinforcing Strathmore University\'s and DSA\'s commitment to evidence-based policy-making and strategic growth in Kenya\'s digital sector.</p><h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Future Prospects for Kenya\'s Connectivity Ecosystem</h2><p class="text-gray-700">The event closed with remarks from Dr. Vitalis Ozianyi, who extended gratitude to attendees and partners. He expressed optimism that the DSA E-Learning Programme, combined with the insights from these newly released reports, will serve as a catalyst for sustained advancements in Kenya\'s digital infrastructure. "This is more than a programme launch; it\'s a call to action for all stakeholders to collaborate and build a resilient and inclusive digital future for Kenya," Dr. Ozianyi emphasized.</p><p class="text-gray-700">The DSA E-Learning Programme and the newly published connectivity reports reflect a shared commitment by Strathmore University, the DSA, FCDO, and local stakeholders to empower Kenyan professionals, enabling them to meet the evolving demands of the digital age with skills and strategies informed by global best practices and local insights.</p><h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">About Aegir Consult</h2><p class="text-gray-700">Aegir Consult Ltd. is proud to contribute to Kenya\'s telecommunications policy and digital ecosystem development through research and consultancy. Our AMSS report and continued partnership with industry and academia underscore our commitment to fostering innovation, accessibility, and efficiency within the telecommunications sector.</p><p class="text-gray-700 mt-8"><a href="/contact" class="text-blue-600 hover:text-blue-800 underline">For more information, please contact us here.</a></p></div></article></div>',
        image: amss_study,
        date: 'October 30, 2024',
        year: 2024
      },
      {
        id: 'the-big-baraza-2024',
        title: 'Aegir Consult at The Big Baraza 2024: Championing Innovation and Collaboration',
        description: '<section><p class= "text-gray-500 text-sm" > Nairobi, Kenya – October 17, 2024</p><h1 class="text-2xl font-bold mt-2">Aegir Consult’s CEO Joins Corporate Innovation Roundtable</h1><p class="mt-4">Aegir Consult’s CEO, Victor Wahome, joined a select group of business leaders, innovators, and entrepreneurs at the inaugural Corporate Innovation Roundtable, held as part of The Big Baraza 2024. Organized by SNDBX and hosted at the JW Marriott in Nairobi, this event brought together industry visionaries from across Africa to celebrate, discuss, and catalyze innovation. With the overarching theme focused on "Innovation and its Role in Modern Business," the roundtable allowed participants to explore solutions to common challenges and highlight how innovation is transforming the business landscape in Africa.</p></section><section><h2 class="text-xl font-semibold">About The Big Baraza 2024 and SNDBX</h2><p class="mt-4">The Big Baraza is SNDBX’s flagship event, designed to recognize and empower game-changers across industries. SNDBX is a unique business accelerator supporting SMEs and entrepreneurs with the “Village Formula” – a collaborative approach that leverages the expertise of over 30 service providers under one roof. This model provides tailored business solutions and fosters meaningful relationships and professional support networks, helping SMEs expand sustainably and create economic impact locally and globally, with branches across Africa and Atlanta, USA.</p></section><section><h2 class="text-xl font-semibold">The Corporate Innovation Roundtable</h2><p class="mt-4">The invite-only Corporate Innovation Roundtable united around 20 senior leaders from prominent organizations on Day 1 of The Big Baraza, offering a platform for open dialogue on Kenya’s innovation ecosystem and collaborative approaches to corporate innovation.</p><h3 class="font-medium mt-4">The agenda for the day included:</h3><ul class="list-disc list-inside mt-2 space-y-1"><li>An Overview of Kenya’s Innovation Ecosystem presented by SNDBX\'s CEO, emphasizing entrepreneurship as a driver of innovation.</li><li>Panel Discussions on Corporate Innovation in Kenya, with leaders sharing insights on navigating innovation challenges within their organizations.</li><li>Exploring Gaps and Potential Solutions, an interactive session on bridging innovation gaps through partnerships, technology, and customer-focused design.</li><li>Networking Opportunities, fostering connections and collaborations.</li></ul></section><section><h2 class="text-xl font-semibold">Insights from the Roundtable Discussions</h2><p class="mt-4">Participants discussed Kenya’s innovation landscape, emphasizing the need for sustainable, long-term innovation despite challenges. Key points included:</p><ul class="list-disc list-inside mt-2 space-y-1"><li><strong>Human-Centered Design and Customer Obsession:</strong> Solutions should align with customer needs and focus on impact, feasibility, and profitability.</li><li><strong>Inclusion and Awareness:</strong> Creating inclusive innovation spaces, raising awareness, and addressing funding gaps.</li><li><strong>Balancing UX and UI:</strong> Functionality and aesthetics must align to create user-friendly products.</li></ul><p class="mt-4">Victor Wahome’s participation highlighted Aegir Consult’s commitment to driving innovation, with insights to enhance support for clients navigating today\'s digital and strategic challenges.</p></section><section><h2 class="text-xl font-semibold">Impactful Collaborations and Future Initiatives</h2><p class="mt-4">A significant highlight was the consensus on fostering collaboration between corporates and SMEs through hackathons, partnerships, and joint ventures. Leaders emphasized sustaining the Corporate Innovation Roundtable as a recurring forum to share benchmarks and frameworks, building on this inaugural event’s momentum.</p></section><section><h2 class="text-xl font-semibold">Looking Ahead: Aegir Consult’s Vision for Innovation</h2><p class="mt-4">Aegir Consult’s participation reinforced its commitment to pioneering digital transformation solutions. The experience strengthened its partnership with SNDBX, aligning with a shared mission to empower SMEs through collaboration. Aegir Consult plans to integrate the event’s insights to help clients seize future opportunities.</p><p class="mt-4">The Big Baraza 2024 and SNDBX’s Corporate Innovation Roundtable affirm that innovation is a community-driven mindset. Aegir Consult looks forward to future collaborations and roundtables that elevate Africa’s innovation landscape.</p></section><footer class="mt-8"><p>For more information on SNDBX and The Big Baraza, please visit <a href="https://www.bigbaraza.co.ke/#/?lang=en" class="text-blue-500 hover:underline">SNDBX\’s official website</a>.</p></footer>',
        image: big_baraza,
        date: 'October 17, 2024',
        year: 2024
      },
      {
        id: 'copyrights-with-kecobo-and-kipi',
        title: 'Aegir Consult Secures 5 Copyrights with KECOBO and 1 Trademark with KIPI, Strengthening Intellectual Property Portfolio',
        // fileType: 'pdf',
        description: '<div class="max-w-4xl mx-auto px-0 py-12"><p class="mb-4">Aegir Consult Ltd has achieved a major milestone in its journey toward innovation and excellence by securing <strong>5 copyrights</strong> for its flagship software solutions with the Kenya Copyright Board (KECOBO) and obtaining a registered trademark for one of its key systems with the Kenya Industrial Property Institute (KIPI).</p><p class="mb-4">These strategic intellectual property protections underline Aegir Consult\'s dedication to safeguarding its cutting-edge technologies in an increasingly competitive and digitally-driven world.</p><h2 class="text-xl font-semibold text-blue-500 mb-4">The five key copyrighted solutions include:</h2><ul class="list-disc list-inside mb-8 pl-6"><li><strong>SMART-A</strong> - A groundbreaking agri-tech solution that revolutionizes agriculture, specifically crop farming. It streamlines the agricultural value chain, bringing together farmers, suppliers, and manufacturers to improve operational efficiency.</li><li><strong>EBIMS (Enterprise Building Information Management System)</strong> - A GIS-enabled solution designed for the Construction Authorities, offering critical modules for surveillance, identifying, mapping, monitoring construction progress, compliance verification, and even indoor mapping using advanced laser scanning technology.</li><li><strong>ILIS (Infrastructure Location Intelligence System)</strong> - A trademarked solution built for organizations in the utility sector, this system integrates with SAP, Business Central and other business processes to optimize infrastructure management, helping companies maximize their return on investment and operational efficiency.</li><li><strong>PropFusion</strong> - A proprietary Tenancy Management System that automates the management of rental properties, bringing together features for tenant onboarding, lease management, and payments to simplify property administration.</li><li><strong>ELIMS (Enterprise Land Information Management System)</strong> - A comprehensive land management system that supports land administration, property valuation, permits, and licensing, empowering organizations to handle land-related matters efficiently.</li></ul><p class="mb-4">In addition to these five copyrighted solutions, Aegir Consult\'s ILIS has been officially recognized with a registered trademark by KIPI, further solidifying its position as a leader in infrastructure management technologies.</p><h2 class="text-xl font-semibold text-blue-500 mb-4">Safeguarding Innovation in a Digital Age</h2><p class="mb-4">With the rapid rise in copyright infringement and intellectual property theft, the importance of securing proprietary solutions has never been greater. By protecting these key innovations, Aegir Consult ensures that its clients and partners can trust the authenticity and integrity of its award-winning solutions. These legal protections also give the company the competitive edge it needs to continue pushing the boundaries of technology.</p><blockquote class="border-l-4 border-blue-600 pl-4 italic text-gray-700 mb-8">"We are proud to secure copyrights and a trademark for our most innovative products. In today\'s digital age, intellectual property protection is vital to maintaining our edge in the industry and ensuring our clients receive top-tier, legally protected solutions that have been tried, tested, and awarded for their performance."<br><span class="block mt-2 font-bold text-gray-900">- Victor Wahome, CEO and Founder of Aegir Consult Ltd</span></blockquote></div>',
        image: copyright_image,
        date: 'October, 2024',
        year: 2024
      },
      {
        id: 'dsa-2024-global-summit-on-spectrum-management',
        title: 'Aegir Consult CEO, Victor Wahome, Participates in DSA 2024 Global Summit on Spectrum Management',
        // fileType: 'pdf',
        description: '<div class="max-w-4xl mx-auto px-0 py-12"><p class= "text-sm text-gray-500 mb-8" > September 2024, Geneva, Switzerland</p><p class="mb-4">Aegir Consult’s CEO and Founder, <strong>Mr. Victor Wahome</strong>, was honoured to participate in the 12th Annual Dynamic Spectrum Alliance (DSA) Global Summit held in Geneva, Switzerland, from September 23-25, 2024. This prestigious event brought together global regulators, industry experts, and academic leaders to engage in discussions surrounding the theme of <strong>"Spectrum Management with a User-Centric Approach."</strong></p><p class="mb-4">As a key figure in spectrum management advocacy, Mr. Wahome joined thought leaders to discuss the future of dynamic spectrum sharing technologies. The event addressed the evolving needs of users across various sectors, emphasizing the importance of making spectrum resources more efficient and accessible, particularly to foster innovation and connectivity in underserved areas.</p><h2 class="text-xl font-semibold text-blue-500 mb-4">Summit Highlights</h2><p class="mb-4">The summit’s highlights included a regulator-only workshop and public keynote sessions that explored cutting-edge use cases and regulatory advancements. Mr. Wahome\'s participation in the <strong>Regulators Roundtable</strong>, held on the second day, provided an opportunity for deep dives into policy innovations and technical challenges in spectrum management. His insights focused on the need for user-centric spectrum policies that address digital inclusion, especially for Africa and other developing regions.</p><blockquote class="border-l-4 border-blue-600 pl-4 italic text-gray-700 mb-8">"The DSA Global Summit has been a vital platform for shaping the future of spectrum management. By focusing on a user-centric approach, we are advocating for more equitable and efficient access to spectrum, which is essential to driving both innovation and connectivity globally."<br><span class="block mt-2 font-bold text-gray-900">- Victor Wahome, CEO and Founder of Aegir Consult Ltd</span></blockquote><p class="mb-4">Aegir Consult remains committed to working alongside global and regional stakeholders to advocate for dynamic spectrum sharing and support the development of a robust digital economy. The Summit reinforced the company\'s mission to bridge the digital divide by leveraging cutting-edge technologies in spectrum management.</p></div>',
        image: dsa_summit,
        date: 'September, 2024',
        year: 2024
      },
      {
        id: 'space-technologies-ksec-2024',
        title: 'Leveraging Space Technologies for Climate Action: Aegir Consult Shines at KSEC 2024',
        // fileType: 'pdf',
        description: '<div class="space-y-5"><p> We are thrilled to share the highlights of our participation in the Kenya Space Expo and Conference(KSEC) 2024, held from June 18-20 at the Edge Convention Centre in Nairobi.This year\'s theme, "Space Technologies for Societal Benefits," brought together industry leaders, government representatives, academics, and professionals to discuss the transformative potential of space science and technology in improving quality of life and driving socio-economic development.</p> <p>Victor Wahome, our CEO and Founder, had the honor of being a panelist in the session titled "Leveraging Space Technologies for Climate Action." Alongside esteemed colleagues Dr.Benson Kenduiywo(CIAT), Dr.David Gikungu(KMD), Prof.Alexandre Caldes(UNEP), Boniface Akuku(TomorrowNow), and Zachary Misiani(Red Cross), Victor contributed to a vibrant and insightful discussion moderated by Phoebe Odour(NASA Servir).</p> <h2 class="font-bold text-lg">Key Highlights from the Panel Discussion</h2> <h3 class="font-bold text-base">Innovative Solutions for Climate Monitoring</h3><p>Victor highlighted Aegir Consult\'s pioneering work in utilizing Earth Observation (EO) data for climate action. Our projects focus on tracking deforestation, monitoring water resources, and assessing the impacts of climate change on vulnerable ecosystems. By integrating advanced geospatial technologies, we provide actionable insights that empower decision-makers to adopt sustainable environmental management practices.</p> <h3 class="font-bold text-base">Emerging Technologies for Enhanced Climate Action</h3> <p>During the session, Victor discussed several emerging technologies that are poised to revolutionize climate action, including:</p> <ul class="list-disc ml-5"> <li><strong>Nanosatellites (CubeSats):</strong> These small, cost-effective satellites offer continuous Earth monitoring, providing high-resolution imagery crucial for environmental and climate studies.</li> <li><strong>Hyperspectral Imaging:</strong> This technology delivers detailed spectral information, enabling precise monitoring of vegetation health, water quality, and soil conditions.</li> <li><strong>Artificial Intelligence (AI) and Machine Learning (ML):</strong> AI and ML algorithms process vast amounts of satellite data to identify patterns and predict climate trends, enhancing our ability to respond proactively to environmental changes.</li> </ul> <h3 class="font-bold text-base">Collaboration and Capacity Building</h3> <p>Victor emphasized the importance of collaboration between various stakeholders, including governments, private sector, academia, and international organizations. He shared insights from our successful partnerships with ESRI, IBM, and Microsoft, showcasing how such collaborations drive innovation and capacity building in the region.</p> <h3 class="font-bold text-base">Policy Advocacy for Sustainable Development</h3> <p>Aegir Consult advocates for supportive policy frameworks that facilitate the adoption of space technologies for climate action. Victor highlighted our role in engaging with policymakers to promote regulations that enhance the deployment of geospatial and information systems for environmental monitoring and management.</p> <h2 class="font-bold text-lg">A Successful Engagement at KSEC 2024</h2> <p>The Kenya Space Expo and Conference 2024 provided an excellent platform for Aegir Consult to showcase our expertise and commitment to leveraging space technologies for climate action. Our participation underscored the critical role that geospatial and information systems play in addressing climate change and fostering sustainable development.</p> <p>We are grateful for the opportunity to engage with fellow experts and stakeholders, exchange ideas, and explore new avenues for collaboration. The insights gained and connections made at KSEC 2024 will undoubtedly drive our future initiatives and strengthen our efforts to create a sustainable and resilient future for the East African region.</p> <h2 class="font-bold text-lg">Looking Forward</h2> <p>At Aegir Consult, we remain dedicated to pushing the boundaries of technology to solve real-world challenges. As we continue to innovate and collaborate, we look forward to contributing to the global effort to combat climate change and promote sustainable development.</p> <p>Stay tuned to our website for more updates on our projects and initiatives. Together, we can leverage the power of space technologies to build a better world.</p></div>',
        image: ksa_image,
        date: 'June, 2024',
        year: 2024
      },

      {
        id: 'africas-talking-partnership-06-24',
        title: 'Announcing Our Strategic Partnership with Africa\'s Talking Limited',
        // fileType: '',
        description: '<div class="space-y-5"><p>We are delighted to announce our new role as Market Development Partners with Africa\'s Talking Limited, a pioneering tech company committed to empowering developers across Africa. This partnership represents a significant step forward in our mission to leverage technology to address the diverse challenges faced by the African continent.</p> <h2 class="font-bold text-lg">About Africa\'s Talking</h2><p>Founded in 2010, Africa\'s Talking has grown exponentially, driven by a clear mission: to ensure that the developer community in Africa can create, grow, and sustain great businesses using their solutions. With 150,000+ Developers across the 55 AU recognized countries & territories of Africa, Africa\'s Talking has built a robust platform that includes a range of essential products such as SMS, Airtime, USSD, Voice, Mobile Data, and Chat services. These tools are designed to support developers in building scalable, efficient, and innovative applications.</p> <h2 class="font-bold text-lg">Our Shared Vision</h2> <p>As a tech firm specializing in enterprise systems and geoinformatics, we recognize the transformative power of Africa\'s Talking\'s technologies. Our partnership aims to integrate these solutions into our offerings, enhancing our ability to solve critical issues facing Africa today. From improving communication infrastructures and enabling seamless monetary transactions to ensuring enterprise security, our combined efforts will be at the forefront of digital transformation in the region.</p> <h2 class="font-bold text-lg">Driving Digital Transformation</h2> <p>This collaboration is about more than just technology; it is about fostering a sustainable and entrepreneurial ecosystem throughout Africa. By combining our strengths, we aim to:</p><ul class="list-disc list-inside ml-5"><li>Empower Developers: Providing the tools and support necessary for developers to innovate and create impactful solutions.</li><li>Enhance Communication: Utilizing Africa\'s Talking\'s SMS, Voice, and Chat services to improve connectivity and communication.</li> <li>Facilitate Transactions: Streamlining monetary transactions with Airtime and Mobile Data services, making financial interactions smoother and more accessible.</li> <li>Bolster Security: Integrating robust USSD and enterprise solutions to enhance security across various sectors.</li></ul> <h2 class="font-bold text-lg">Impact on Africa</h2> <p>Our partnership is poised to make a substantial impact on multiple fronts:</p> <ul class="list-disc list-item ml-5"> <li>Economic Growth: By supporting the development of tech-driven businesses, we contribute to job creation and economic stability.</li><li>Innovation: Encouraging a culture of innovation and creativity among African developers.</li><li>Sustainability: Promoting solutions that are not only effective but also sustainable in the long term.</li> </ul> <h2 class="font-bold text-lg">Looking Ahead</h2> <p>We are excited about the future and the endless possibilities this partnership brings. Together with Africa\'s Talking, we are committed to driving significant change and making a positive impact on the continent. Stay tuned for more updates and insights as we embark on this journey to revolutionize the tech landscape in Africa.</p> <p>Join us as we take our solutions to the next level, creating a brighter, more connected, and digitally empowered future for Africa.</p> <p>For more information about our partnership and upcoming initiatives, please contact us or visit our website.</p></div>',
        image: africas_talking,
        date: 'June, 2024',
        year: 2024,
      },
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
      { title: '2025', value: '2025' },
      { title: '2024', value: '2024' },
      { title: '2023', value: '2023' },
      { title: '2022', value: '2022' },
      { title: 'Older', value: '2021' },
      // { title: '2020', value: '2020' },
      // { title: '2019', value: '2019' },
      // { title: '2018', value: '2018' },
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
      } else if (year === '2021') {
        // 2021 and older
        this.selectedActivities = this.activities.filter((item) => item.year <= 2021)
      }
      else {
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