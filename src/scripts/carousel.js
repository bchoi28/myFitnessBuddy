// class Carousel {
//     constructor(containerEl) {
//         this.container = containerEl;
//         this.render();
//     }

//     render() {
//         const carouselItems = [
//             {
//                 title: "Item 1",
//             },
//             {
//                 title: "Item 2",
//             },
//             {
//                 title: "Item 3",
//             },
//         ];

//         carouselItems.forEach((item) => {
//             const carouselItem = document.createElement("div");
//             carouselItem.classList.add("carousel-item");

//             const itemTitle = document.createElement("h3");
//             itemTitle.textContent = item.title;

//             carouselItem.appendChild(itemTitle);
//             this.container.appendChild(carouselItem);
//         });
//     }
// }

// export default Carousel;