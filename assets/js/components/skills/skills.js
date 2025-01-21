const skills = [
  { image: "assets/img/skills/html-5.png", description: "Criação de estruturas semânticas para páginas web." },
  { image: "assets/img/skills/css-3.png", description: "Estilização e design responsivo." },
  { image: "assets/img/skills/js.png", description: "Adição de interatividade às páginas." },
  { image: "assets/img/skills/react.png", description: "Desenvolvimento de interfaces modernas e dinâmicas." },
  { image: "assets/img/skills/java.png", description: "Programação orientada a objetos e multiplataforma." },
  { image: "assets/img/skills/aws.png", description: "Serviços em nuvem escaláveis e sob demanda." },
  { image: "assets/img/skills/mysql.png", description: "Gerenciamento de bancos de dados relacionais eficientes." },
  { image: "assets/img/skills/mongodb.png", description: "Armazenamento flexível e escalável para dados não estruturados." }
];

export default function initializeSkills() {
  const skillsContainer = document.getElementById('skills-container');

  skills.forEach(skill => {
    const skillDiv = document.createElement("div");
    skillDiv.classList.add("skill");

    const skillImage = document.createElement("img");
    skillImage.src = skill.image; 
    skillImage.alt = "Skill Icon"; 

    const skillDescription = document.createElement("p");
    skillDescription.textContent = skill.description;

    skillDiv.appendChild(skillImage);
    skillDiv.appendChild(skillDescription);
    skillsContainer.appendChild(skillDiv);
  });
}
