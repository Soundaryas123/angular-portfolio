import { Injectable } from '@angular/core';
import { Project } from '../_models/Projects';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  public projects: Project[] = [
    {
      id: 0,
      name: 'Safoco',
      summary: 'Safoco is a comprehensive platform designed to keep subscribers updated on job opportunities in the oil industry through real-time email alerts and an interactive dashboard. ',
      description: `As Safoco is a real-time project, it does not have a GitHub link or a public real-time project link available. The image displayed for Safoco is a mock representation used to illustrate the application's design and functionality.Safoco is a cutting-edge platform dedicated to providing real-time email alerts and comprehensive organization listings for the oil industry. The email alert feature is designed to keep subscribers promptly informed about oil refineries opportunities.The interactive map on the dashboard is a standout feature, offering a geographical perspective of available organizations all over the world. Users can easily navigate the map to find organization and oil wells in specific areas, aiding in location-based job(covering all wells) search strategies. The dashboard itself is intuitive and user-friendly, ensuring that all features are accessible and easy to manage.`,
      projectGitLink: '',
      projectLink: '',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.SCSS, Tag.HTML5, Tag.ANGULARMATERIAL],
      pictures: ["../../assets/safoco.png"]
    },
    {
      id: 1,
      name: 'Custom UI',
      summary: 'The platform is designed to be intuitive and easy to navigate, ensuring that both admins and end-users can interact with it efficiently. ',
      description: "As Custom UI is a real-time project, it does not have a GitHub link or a public real-time project link available. The image displayed for Safoco is a mock representation used to illustrate the application's design and functionality. The Custom UI for SLB Agora is a powerful and flexible dashboard designed to meet the specific needs of SLB Agora, providing admins with the ability to customize the interface and end-users with an intuitive platform to interact with data. This dashboard integrates various data visualization tools, including graphs, pie charts, lists, and tables, ensuring a comprehensive view of essential information. The data displayed on the dashboard can be updated in real-time, ensuring that users always have access to the most current information. This feature is crucial for maintaining the relevance and accuracy of the data presented.",
      projectGitLink: '',
      projectLink: '',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.SCSS, Tag.HTML5, Tag.ANGULARMATERIAL],
      pictures: ["../../assets/customui.png"]
    },
    {
      id: 2,
      name: 'Wellsite',
      summary: 'WellSite is an internal project designed to provide a detailed and organized view of various oil extraction activities.',
      description: "WellSite is a sophisticated platform developed to streamline the management and monitoring of oil extraction operations. It features a multi-level hierarchical structure that includes organizations, sites, jobs, and wells. This structure allows users to drill down from a high-level view to specific details, facilitating comprehensive oversight and management. The platform excels in data visualization, presenting complex data in the form of clear and understandable graphs and charts. Users can view detailed metrics on oil extraction and chemical usage, which are critical for assessing operational efficiency and environmental impact.  WellSite provides an intuitive user interface that simplifies navigation and data access. Users can easily switch between different levels of the hierarchy and view detailed reports and visualizations for each well. This functionality ensures that all stakeholders, from executives to field operators, can leverage the platform to make informed decisions. ",
      projectGitLink: '',
      projectLink: '',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.SCSS, Tag.HTML5, Tag.ANGULARMATERIAL],
      pictures: ["../../assets/wellsite.png"]
    },
    {
      id: 3,
      name: 'Watch-It',
      summary: 'WatchIt is a dynamic and user-friendly streaming application designed to provide users with a seamless experience in discovering and watching their favorite movies and TV shows.',
      description: `WatchIt is a dynamic and user-friendly streaming application designed to provide users with a seamless experience in discovering and watching their favorite movies and TV shows. Leveraging the extensive TMDB (The Movie Database) API. Users can access a vast collection of movies and TV shows with detailed information, including ratings, reviews, trailers, and cast details. The application features a clean and intuitive user interface for easy navigation, and a responsive design optimized for smartphones, tablets, and desktop computers. Advanced search and filter options allow users to find content by genre, release date, rating, and more. Integration with the TMDB API ensures real-time data availability, while performance optimizations like lazy loading and efficient data handling enhance app performance and reduce load times. Focused on creating a seamless and enjoyable user experience, WatchIt continuously incorporates user feedback to refine the interface.`,
      projectGitLink: 'https://github.com/Soundaryas123/react_watchit',
      projectLink: 'https://react-watchit.vercel.app/',
      tags: [Tag.REACT, Tag.JAVASCRIPT, Tag.CSS3, Tag.HTML5],
      pictures: ["../../assets/watchit1.png", "../../assets/watchit2.png", "../../assets/watchit3.png"]
    },
    {
      id: 4,
      name: 'Myntra Clone',
      summary: 'The Myntra Clone is a simplified e-commerce application replicating core functionalities of the popular fashion retail platform, Myntra.',
      description: 'This project focuses on essential features such as displaying images and banners, and implementing basic cart functionalities. Users can browse through a collection of products showcased with high-quality images and promotional banners. The app allows users to add items to their cart and remove them with ease, providing a streamlined shopping experience. This clone project showcases the ability to create a user-friendly interface and manage basic e-commerce operations efficiently.',
      projectGitLink: 'https://github.com/Soundaryas123/js/tree/main/projects/myntra',
      projectLink: 'https://js-brown.vercel.app/pages/bag.html',
      tags: [Tag.HTML5, Tag.CSS3, Tag.JAVASCRIPT],
      pictures: ["../../assets/myntra1.png", "../../assets/myntra2.png"]
    },
    {
      id: 5,
      name: 'Tic-Tac-Toe',
      summary: 'The Tic Tac Toe Game is a digital version of the classic two-player game, designed to provide a simple yet engaging experience. ',
      description: 'The game features a 3x3 grid where two players take turns marking their chosen symbols ("X" and "O"). The primary objective is to align three of their symbols in a row, column, or diagonal to win the game. The project highlights key aspects of game development, including user interface design, game logic implementation, and interactive feedback. This project demonstrates the ability to create a responsive and enjoyable game that can be played on various devices.',
      projectGitLink: 'https://github.com/Soundaryas123/js_adv/tree/main/mini_projects/tic-tac-toe',
      projectLink: 'https://js-adv.vercel.app/',
      tags: [Tag.HTML5, Tag.CSS3, Tag.JAVASCRIPT],
      pictures: ["../../assets/tictactoe1.png", "../../assets/tictactoe2.png", "../../assets/tictactoe3.png"]
    }, {
      id: 6,
      name: 'Search Github User',
      summary: 'The GitHub User Search project showcases an efficient and user-friendly approach to searching for GitHub users. ',
      description: "By integrating Angular's powerful features, the application ensures a smooth and responsive experience. The debounce mechanism helps in reducing the frequency of API calls, while the request cancellation ensures that only relevant data is processed. The application also smartly handles user input, avoiding unnecessary API calls for duplicate or whitespace inputs. This project demonstrates proficiency in Angular, API integration, and creating responsive web interfaces.",
      projectGitLink: 'https://github.com/Soundaryas123',
      projectLink: 'https://github.com/Soundaryas123/github_user_search',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.SCSS, Tag.HTML5],
      pictures: ["../../assets/searchGithubUser1.png", "../../assets/searchGithubUser2.png", "../../assets/searchGithubUser3.png"]
    }, {
      id: 7,
      name: 'Focus on Today',
      summary: 'The "Focus on Today" app is a productivity tool designed to help users prioritize and achieve their daily goals efficiently. ',
      description: 'Users must set three goals at the start of the day. These goals serve as the primary focus for the day. A progress bar visually represents the completion status of the goals, providing real-time feedback and motivation. Users can reset individual goals upon completion, allowing for flexibility and continuous productivity throughout the day. This mini project highlights the importance of structured goal-setting and progress tracking in enhancing daily productivity and fostering a sense of accomplishment.      ',
      projectGitLink: 'https://github.com/Soundaryas123/js-codes-procoder/tree/main/projects/focus-on-today',
      projectLink: 'https://sfocus-on-today.netlify.app/',
      tags: [Tag.HTML5, Tag.CSS3, Tag.JAVASCRIPT],
      pictures: ["../../assets/focusOnToday1.png", "../../assets/focusOnToday2.png", "../../assets/focusOnToday3.png"]
    }, {
      id: 8,
      name: 'Countries Information',
      summary: 'The "Countries Information" app is a comprehensive tool that provides detailed information about countries worldwide. ',
      description: 'All countries are initially listed, and users can filter the list by typing the country name or selecting a continent, making it easy to find specific countries quickly.  Clicking on a country navigates to a dedicated page that displays extensive information about the selected country, including its capital, population, language, currency, and more. On the country detail page, the app displays neighboring countries. Users can click on these border countries to navigate directly to their respective detail pages, providing a seamless exploration experience. This app includes a dark and light theme toggle, allowing users to switch between themes for a personalized and comfortable viewing experience.',
      projectGitLink: 'https://github.com/Soundaryas123/js-codes-procoder/tree/main/projects/countries',
      projectLink: 'https://countries-details-list.netlify.app/',
      tags: [Tag.HTML5, Tag.CSS3, Tag.JAVASCRIPT],
      pictures: ["../../assets/countriesInformation1.png", "../../assets/countriesInformation2.png"]
    },]
  constructor() { }


  public getProjects() {
    return this.projects;
  }

  public getProjectById(id: number): Project {
    let project = this.projects.find(project => project.id === id)
    if (project === undefined) {
      throw new TypeError(`There is no project that matches the id: ${id}`)
    }
    return project
  }
  public getProjectsByFilter(filterTags: Tag[]) {
    let filteredProjects: Project[] = [];
    this.projects.forEach((project) => {
      let foundAll = true;
      filterTags.forEach((filterTag) => {
        if (project.tags.includes(filterTag) == false) {
          foundAll = false;
        }
      })
      if (foundAll) {
        filteredProjects.push(project)
      }
    })
    return filteredProjects
  }
}
