const Projects = [
  {
    title: "Pageturner",
    description: "Created a rating website similar to imdb.com, but specifically for books.",
    image_src: "https://via.placeholder.com/300x200",
    image_alt: "Pageturner",
    github: "https://github.com/YounesBB/Pageturner",
  },
  {
    title: "Storage Rental",
    description: "This app can be used for managing units in a unit storage house.",
    image_src: "https://via.placeholder.com/300x200",
    image_alt: "Storage rental",
    github: "https://github.com/YounesBB/Storage_Rental",
  },
];

// Helper function to create SVG element
const createSvgElement = (pathData) => {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", pathData);
  svg.appendChild(path);
  
  return svg;
};

// Function to create a project card
const createProjectCard = (project) => {
  const projectCard = document.createElement("div");
  projectCard.classList.add("projectCard");

  const projectTitle = document.createElement("h3");
  projectTitle.textContent = project.title;

  const projectImage = document.createElement("img");
  projectImage.src = project.image_src;
  projectImage.alt = project.image_alt;

  const projectDescription = document.createElement("p");
  projectDescription.textContent = project.description;

  const svgWrapper = document.createElement("a");
  svgWrapper.href = project.github;
  svgWrapper.target = "_blank";

  const githubIcon = createSvgElement(
    "M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
  );

  const githubText = document.createElement("span");
  githubText.textContent = "Github";

  svgWrapper.append(githubIcon, githubText);
  projectCard.append(projectTitle, projectImage, projectDescription, svgWrapper);

  setTimeout(() => {
    projectCard.style.opacity = 1;
  }, 1000);

  return projectCard;
};

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");

  Projects.forEach((project) => {
    const projectCard = createProjectCard(project);
    container.appendChild(projectCard);
  });
});
