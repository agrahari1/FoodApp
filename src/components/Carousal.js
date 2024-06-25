import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleImage from "./ExampleImage";

export default function CarouselComponent() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <ExampleImage
            image={
              "https://justbakedcake.com/wp-content/uploads/2020/09/Chocochip-pastry.jpg"
            }
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <ExampleImage
            image={
              "https://png.pngtree.com/background/20230417/original/pngtree-burger-ketchup-fast-food-vegetables-background-picture-image_2445024.jpg"
            }
          />
          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <ExampleImage
            image={
              "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2lzMTYwNjItaW1hZ2Uta3d2eWZrd3IuanBn.jpg"
            }
            // https://parade.com/.image/t_share/MjAwMjQwOTU4NDg1MzA4NTI0/what-happens-if-you-eat-a-burger-every-day.jpg
            //https://static.vecteezy.com/system/resources/thumbnails/023/809/530/small_2x/a-flying-burger-with-all-the-layers-ai-generative-free-photo.jpg
          />
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

// import React from "react";

// export default function Carousal() {
//   return (
//     <div>
//       <div
//         id="carouselExampleIndicators"
//         className="carousel slide"
//         data-ride="carousel"
//       >
//         <ol className="carousel-indicators">
//           <li
//             data-target="#carouselExampleIndicators"
//             data-slide-to="0"
//             className="active"
//           ></li>
//           <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//           <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//         </ol>
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img
//               className="d-block w-100"
//               src="https://source.unsplash.com/random/900×700/?fruit"
//               alt="First slide"
//             />
//           </div>
//           <div className="carousel-item">
//             <img
//               className="d-block w-100"
//               src="https://source.unsplash.com/random/900×700/?fruit"
//               alt="Second slide"
//             />
//           </div>
//           <div className="carousel-item">
//             <img
//               className="d-block w-100"
//               src="https://source.unsplash.com/random/900×700/?fruit"
//               alt="Third slide"
//             />
//           </div>
//         </div>
//         <a
//           className="carousel-control-prev"
//           href="#carouselExampleIndicators"
//           role="button"
//           data-slide="prev"
//         >
//           <span
//             className="carousel-control-prev-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="sr-only">Previous</span>
//         </a>
//         <a
//           className="carousel-control-next"
//           href="#carouselExampleIndicators"
//           role="button"
//           data-slide="next"
//         >
//           <span
//             className="carousel-control-next-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="sr-only">Next</span>
//         </a>
//       </div>
//     </div>
//   );
// }

// import React from "react";

// export default function Carousal() {
//   return (
//     <div
//       id="carouselExampleFade"
//       className="carousel slide carousel-fade"
//       data-bs-ride="carousel"
//       style={{ objectFit: "contain !important" }}
//     >
//       <div className="carousel-inner" id="carousel">
//         <div className="carousel-caption" style={{ zIndex: "9" }}>
//           <form className="d-flex">
//             <input
//               className="form-control me-2"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//             <button
//               className="btn btn-outline-success text-white bg-success"
//               type="submit"
//             >
//               Search
//             </button>
//           </form>
//         </div>
//         <div className="carousel-item active">
//           <img
//             src="https://source.unsplash.com/random/900x700/?laptop"
//             className="d-block w-100"
//             style={{ filter: "brightness(30%)" }}
//             alt="..."
//           />
//         </div>
//         <div className="carousel-item">
//           <img
//             src="https://source.unsplash.com/random/900x700/?laptop"
//             className="d-block w-100"
//             style={{ filter: "brightness(30%)" }}
//             alt="..."
//           />
//         </div>
//         <div className="carousel-item">
//           <img
//             src="https://source.unsplash.com/random/900x700/?laptop"
//             className="d-block w-100"
//             style={{ filter: "brightness(30%)" }}
//             alt="..."
//           />
//         </div>
//       </div>
//       <button
//         className="carousel-control-prev"
//         type="button"
//         data-bs-target="#carouselExampleFade"
//         data-bs-slide="prev"
//       >
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Previous</span>
//       </button>
//       <button
//         className="carousel-control-next"
//         type="button"
//         data-bs-target="#carouselExampleFade"
//         data-bs-slide="next"
//       >
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Next</span>
//       </button>
//     </div>
//   );
// }
