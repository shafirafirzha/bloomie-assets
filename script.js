feather.replace();

const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const hamburgerMenu = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Fetching Data

const gistUrl =
  "https://raw.githubusercontent.com/shafirafirzha/bloomie-assets/refs/heads/main/course.json";

async function getCourses() {
  try {
    const response = await fetch(gistUrl);
    if (!response.ok) {
      throw new Error("Gagal mengambil data");
    }
    const courses = await response.json();
    displayCourses(courses);
  } catch (error) {
    console.error("Error:", error);
  }
}

function displayCourses(courses) {
  const courseList = document.querySelector("#course-list");

  courseList.innerHTML = "";

  courses.forEach((course) => {
    courseList.innerHTML += `
    <div class="menu-card">
        <img src="${course.image}"></img>
        <div class="menu-card-content">
            <span>${course.category}</span>
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <small>Handmade with love ${course.mentor}</small>
            <strong>${course.price}</strong>
            <a href="course.html?slug=${course.slug}">
            Lihat Produk
            </a>
        </div>
    </div>
    `;
  });
}

getCourses();
