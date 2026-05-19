/* =============================================
   PROJECT DATA
   ============================================= */

const projects = [

  {
    title: "Solar System",

    category: "Render • 3D Model • Blending • ITCI231-LAB-T",

    image: "../resources/Solar System.png",

    description:
        "The Solar System project is a multimedia rendering study focused on recreating the planets of the solar system through 3D modeling and animation. Each planet was modeled and arranged in Blender 5.1.1 with the help of Python scripting for positioning and scene setup. The project explored frame-by-frame rendering, orbital movement simulation, lighting, and cinematic composition while improving my understanding of 3D modeling, animation, and rendering workflows.",
    
    start: "April 2026",

    end: "July 2026",

    link: "solarsystem.html"
  },

  {
    title: "Rotoscope",

    category: "Frames • Animation • Tracing • ITCI231-LAB-T",

    image: "../resources/Rotoscope.png",

    description:
        "The Rotoscope project is a frame-by-frame animation based on a real dance video. The footage was separated into image sequences, and each frame was manually traced using rotoscope tools to recreate movement and expression. Developed over 14 weeks, the project focused on timing, motion accuracy, and visual consistency while improving my understanding of animation and motion analysis.",
    
    start: "April 2026",

    end: "July 2026",

    link: "rotoscope.html"
  },

  {
    title: "Operating System",

    category: "System • Case Study • Virtual Machine • ITOSYS-LAB-T",

    image: "../resources/Placeholder.png",

    description:
        "The Operating System project focuses on installing and exploring different operating systems using VirtualBox. The project involved setting up various OS environments, studying their installation processes, and performing case studies on their features, structure, and intended use. Through this project, I gained a better understanding of virtualization, system setup, and the practical use of operating systems.",
    
    start: "Soon",

    end: "Soon",

    link: "operatingsystem.html"
  }

];

/* =============================================
   SELECT PROJECT
   ============================================= */

function selectProject(index) {

  const project = projects[index];

  /* --- ELEMENTS --- */

  const placeholder =
    document.getElementById("projectPlaceholder");

  const content =
    document.getElementById("projectContent");

  const category =
    document.getElementById("projectCategory");

  const title =
    document.getElementById("projectTitle");

  const image =
    document.getElementById("projectImage");


  const description =
    document.getElementById("projectDescription");

  const start =
    document.getElementById("projectStart");

  const end =
    document.getElementById("projectEnd");

  const link =
    document.getElementById("projectLink");

  /* --- UPDATE CONTENT --- */

  category.textContent =
    project.category;

  title.textContent =
    project.title;

  image.src =
    project.image;

  image.alt =
    `${project.title} preview image`;

  description.textContent =
    project.description;

  start.textContent =
    project.start;

  end.textContent =
    project.end;

  link.href =
    project.link;

  /* --- SHOW CONTENT --- */

  placeholder.style.display =
    "none";

  content.style.display =
    "block";

  /* =============================================
     ACTIVE CARD STATE
     ============================================= */

  const items =
    document.querySelectorAll(".project-item");

  items.forEach(item => {
    item.classList.remove("active");
  });

  items[index].classList.add("active");
}