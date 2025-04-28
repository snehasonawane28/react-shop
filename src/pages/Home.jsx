function Home() {
  const products = [
    {
      id: 1,
      name: "React T-Shirt",
      price: "₹499",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "JavaScript Mug",
      price: "₹299",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Sneha's Notebook",
      price: "₹199",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <>
      {/* Banner Image */}
      <div id="homeCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="src/assets/industries-banner.jpg"
              className="d-block w-100 custom-slider-img"
              alt="Slide 1"

            />
            <div className="carousel-caption d-none d-md-block">
              <h2>Welcome to ShopMart</h2>
              <p>Your one-stop shop for digital products </p>
            </div>

          </div>
          <div className="carousel-item">
            <img
              src="src/assets/technology-react.jpg"
              className="d-block w-100 custom-slider-img"
              alt="Slide 2"
            />

            <div className="carousel-caption d-none d-md-block">
              <h2>Welcome to Shop</h2>
              <p>Your one-stop shop for digital products </p>
            </div>
          </div>

        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>





      <div className="container pt-5">
        <div className="row">
          <div className="col-lg-6 wow animate__animated animate__fadeInLeft" data-wow-delay="0.3s" style={{ animationDuration: '1.2s' }}>

            <img src="/src/assets/technology-react.jpg" alt="React" className="img-fluid" />

          </div>

          <div className="col-lg-6 wow animate__animated animate__fadeInRight" data-wow-delay="0.3s" style={{ animationDuration: '1.2s' }}>
            <h3>Welcome to our shop</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum ipsum facilis modi possimus?
              Quia ad possimus ipsa porro. A magni dolore odit nobis est eos temporibus omnis, eligendi perspiciatis molestiae.
            </p>
            <div className="row">

              <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                <ul className="list-style-two">
                  <li>
                    <i className="fa fa-check-circle"></i> Specialized Product Range
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i> Robust Manufacturing Facilities
                  </li>
                </ul>
              </div>

              <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                <ul className="list-style-two">
                  <li>
                    <i className="fa fa-check-circle"></i> Specialized Product Range
                  </li>
                  <li>
                    <i className="fa fa-check-circle"></i> Robust Manufacturing Facilities
                  </li>
                </ul>
              </div>
            </div>

            <div className="about-btn">
              <button className="">Read More</button>
            </div>

          </div>


        </div>
      </div>

      <section className="content-two mt-5">

        <div className="container">
          <div className="row">


            <div className="col-lg-4">
              <div className="content-box ">
                <i className="fas fa-shirt fa-3x mb-3"></i> {/* 👈 Shirt icon */}
                <h5>Shirt</h5>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate animi
                  voluptates a est cumque. Nisi, unde libero. Dolores amet, eum quasi
                  saepe, neque voluptatum assumenda dignissimos fugiat ullam, facere ex!
                </p>
                <a href="#" className="mt-2">READ MORE</a>
              </div>
            </div>



            <div className="col-lg-4">
              <div className="content-box ">
                <i className="fas fa-tshirt fa-3x mb-3"></i> {/* 👈 Shirt icon */}
                <h5>T-Shirt</h5>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate animi
                  voluptates a est cumque. Nisi, unde libero. Dolores amet, eum quasi
                  saepe, neque voluptatum assumenda dignissimos fugiat ullam, facere ex!
                </p>
                <a href="#" className="mt-2">READ MORE</a>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="content-box ">
                <i className="fas fa-shirt fa-3x mb-3"></i> {/* 👈 Shirt icon */}
                <h5>Shirt</h5>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate animi
                  voluptates a est cumque. Nisi, unde libero. Dolores amet, eum quasi
                  saepe, neque voluptatum assumenda dignissimos fugiat ullam, facere ex!
                </p>
                <a href="#" className="mt-2">READ MORE</a>
              </div>
            </div>

          </div>

        </div>

      </section>

      <section className="mt-5 mb-5">
        <div className="container">
          <div className="row">

            <div className="col-lg-10">
              <h2 className="">Our Products</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptates quae iste quia. Inventore, quo sed. Quis minima nobis ipsum mollitia dignissimos quasi, vero, alias,
              </p>
            </div>

            <div className="col-lg-2 text-end">
              <div className="about-btn">
                <button className="">Read More</button>
              </div>
            </div>

            <div className="row">
              {[1, 2, 3, 4].map((_, index) => (
                <div className="col-lg-3 col-md-6 mb-4" key={index}>
                  <div className="card h-100 shadow-sm border-0 text-center p-3">
                    <img
                      src="/src/assets/shirt.jpg"
                      alt="Shirt"
                      className="img-fluid mb-3 rounded"
                    />
                    <h5 className="fw-bold">Trendy Shirt</h5>
                    <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "15px", color: "#555" }}>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis veniam
                      beatae ex porro non...
                    </p>
                  </div>
                </div>
              ))}
            </div>


          </div>
        </div>
      </section>




      {/* Home Content + Product Grid */}
      {/* <div className="page container">
        <h2 className="my-4">Welcome Home Sneha 💖</h2>
        <p>This is your beautiful homepage!</p>

        <div className="row mt-5">
          {products.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card h-100 text-center">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price}</p>
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}




    </>
  );
}

export default Home;
