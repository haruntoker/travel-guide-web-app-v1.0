
import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'


// page links
export const pageLinks = [
    {id: 1, href: '#home', text: 'home'},
    {id: 2, href: '#about', text: 'about'},
    {id: 3, href: '#services', text: 'services'},
    {id: 4, href: '#tours', text: 'tours'},
]

// social links
export const socialLinks = [
    {id:1, href:'https://www.twitter.com', icon:'fab fa-facebook'},
    {id:2, href:'https://www.twitter.com', icon:'fa-brands fa-airbnb'},
    {id:3, href:'https://www.twitter.com', icon:'fab fa-squarespace'},

]



// services
export const services = [
    {
      id: 1,
      icon: 'fas fa-wallet fa-fw',
      title: 'saving money',
      text: "From affordable accommodations to insider insights on local dining, we're your compass to navigating the world affordably."
    },
    {
      id: 2,
      icon: 'fas fa-tree fa-fw',
      title: 'endless hiking',
      text: "Explore untamed landscapes, conquer mountain peaks, and immerse yourself in the serenity of nature."
    },
    {
      id: 3,
      icon: 'fas fa-socks fa-fw',
      title: 'amazing comfort',
      text: "Discover plush retreats, soothing spas, and unparalleled services designed to elevate your travel experience."
    },
  ];



  export const tours = [
  {
    id:1,
    image: tour1,
    date:"May 26th, 2024",
    title:"Tibet Adventure", 
    info:"This 8 days China tour to Beijing, Xian and Shanghai is the No.1 best selling tour chosen by most first-time travelers. Beijing, Xian and Shanghai are called the China golden triangle cities and also the top 3 destinations should be visited in China.",
    location:"China",
    duration: 6 +" days",
    cost: 2100 + "$"
  },

  {
    id:2,
    image: tour2,
    date:"May 26th, 2024",
    title:"best of java", 
    info:"Embark on an adventure from Jakarta to Subang and Bandung and experience an active volcano, a local village, scenic rice fields, a tea plantation, local flavors, and hot spring relaxation.",
    location:"indonesia",
    duration: 9+ " days",
    cost: 2300 + "$"
  },

  {
    id:3,
    image: tour3,
    date:"december 5th, 2024",
    title:"explore hong kong", 
    info:"See the highlights of Hong Kong on a guided tour with all entry fees included. Enjoy a delicious Dim Sum lunch as you learn about the history of the city and admire the scenic views.",
    location:"hong kong",
    duration: 20 + " days",
    cost: 2100 + "$"
  },

  {
    id:4,
    image: tour4,
    date:"december 23th, 2024",
    title:"kenya highlights", 
    info:"Visit the David Sheldrick Elephant Orphanage and the Giraffe Center to see baby elephants and majestic Rothschild's giraffes on a tour in Nairobi. Admire local crafts at the Kazuri Beads Factory.",
    location:"kenya",
    duration: 20 + " days",
    cost: 2100 + "$"
  },
  ]