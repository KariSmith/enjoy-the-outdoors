Let's Explaore the Outdoors!
Enjoy the outdoors Capstone 2 Project 5/23/24

Website providing information for an adventurer that want wants to explore the outdoors

![Home Page](./README/homePage.png)
![Park Page 1](./README/parksPage1.png)
![Park Page 2](./README/parksPage2.png)
![Park Page 3](./README/parksPage3.png)
![Mountain Page 1](./README/mountainsPage.png)
![Mountain Page 2](./README/mountainsPage2.png)

My favorite part of this project would be how we got info to show up on the mountains page with javascript

mountainResults.innerHTML = `
            <br>
            <img src="./images/${mountain.img}">
            <h3>${mountain.name}</h3>
            <p><b>Elevation:</b> ${mountain.elevation} feet<p>
            <p><b>Effort:</b> ${mountain.effort}</p>
            <p><b>Lattitude:</b> ${mountain.coords.lat}</p>
            <p><b>Longitude:</b> ${mountain.coords.lng}</p>
            <p> ${mountain.desc} </p>
        `;

I find it very interesting that we can input html directly into a javescript file and even edit it with css.