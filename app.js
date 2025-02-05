document.addEventListener("DOMContentLoaded", () => {
    const profileInfo = document.getElementById("profile-info");
    const name = "Richie Cohen";
    const description = "Basketball today, tomorrow, and forever";
  
    profileInfo.innerHTML = `
      <h1>${name}</h1>
      <p>${description}</p>
    `;
  
    const updateLinksButton = document.getElementById("update-links");
  
    updateLinksButton.addEventListener("click", () => {
      const teamUrl = document.getElementById("team-url").value;
      const merchUrl = document.getElementById("merch-url").value;
      const managerUrl = document.getElementById("manager-url").value;
      const instagramUrl = document.getElementById("instagram-url").value;
      const twitterUrl = document.getElementById("twitter-url").value;
      const tiktokUrl = document.getElementById("tiktok-url").value;
  
      document.getElementById("team-link").href = teamUrl || "#";
      document.getElementById("merch-link").href = merchUrl || "#";
      document.getElementById("manager-link").href = managerUrl || "#";
      document.getElementById("instagram-link").href = instagramUrl || "#";
      document.getElementById("twitter-link").href = twitterUrl || "#";
      document.getElementById("tiktok-link").href = tiktokUrl || "#";
  
      alert("¡Enlaces actualizados!");
    });
  });
  