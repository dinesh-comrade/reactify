/* eslint-disable jsx-a11y/anchor-is-valid */
import cloth from "../Assets/1Cloth.jpeg";
import adidas from "../Assets/2Adidas.jpg";
import group from "../Assets/3Group.jpg";
function Home() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={2}
          aria-label="Slide 3"
        />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval={3000}>
          <img
            src={cloth}
            className="d-block w-100 image-fluid slider-img"
            alt="Laptop"
          />
          <div className="bg-overlay" />
          <div className="carousel-caption text-center">
            <div className="fadeInUp">
              <span className="strong">
                <a href="#" className="business" id="business1">
                  Brand Clothes
                </a>
              </span>
            </div>
            <h1 className="fadeInUp">
              Explore The New World of Fabulous Clothes
            </h1>
            <div>
              <button
                type="button"
                className="btn btn-primary fadeInUp rounded-pill"
              >
                Explore
              </button>
              <button
                type="button"
                className="btn btn-light fadeInUp rounded-pill"
              >
                Purchase
              </button>
            </div>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval={3000}>
          <img
            src={adidas}
            className="d-block w-100 image-fluid slider-img"
            alt="iphone"
          />
          <div className="bg-overlay" />
          <div className="carousel-caption text-center">
            <div className="fadeInUp">
              <span className="strong">
                <a href="#" className="business" id="business1">
                  Adidas
                </a>
              </span>
            </div>
            <h1 className="fadeInUp">
              Adidas is the biggest partner of the Reactify
            </h1>
            <div>
              <button
                type="button"
                className="btn btn-primary fadeInUp rounded-pill"
              >
                Explore
              </button>
              <button
                type="button"
                className="btn btn-light fadeInUp rounded-pill"
              >
                Purchase
              </button>
            </div>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval={3000}>
          <img
            src={group}
            className="d-block w-100 image-fluid slider-img"
            alt="airpods"
          />
          <div className="bg-overlay" />
          <div className="carousel-caption text-center">
            <div className="fadeInUp">
              <span className="strong">
                <a href="#" className="business" id="business1">
                  Collections
                </a>
              </span>
            </div>
            <h1 className="fadeInUp">
              Impressive Clothes Collections for all type of groups
            </h1>
            <div>
              <button
                type="button"
                className="btn btn-primary fadeInUp rounded-pill"
              >
                Explore
              </button>
              <button
                type="button"
                className="btn btn-light fadeInUp rounded-pill"
              >
                Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export { Home };
