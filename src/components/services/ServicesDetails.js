import React from 'react'

const ServicesDetails = () => {
  return (
    <>
  {/* preloader area start */}
  {/* <div id="pre-loader">
    <div className="pre-loader">
      <span />
      <span />
    </div>
  </div> */}
  {/* preloader area end */}
  {/* back to top start */}
  <div className="progress-wrap">
    <svg
      className="progress-circle svg-content"
      width="100%"
      height="100%"
      viewBox="-1 -1 102 102"
    >
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
    </svg>
  </div>
  {/* back to top end */}
  {/* header start */}
  {/* header start */}
  {/* <header>
    <div
      id="header-sticky"
      className="header__area header__transparent header__white"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-3 col-xl-3 col-lg-5 col-md-6 col-6">
            <div className="logo">
              <a
                className="standard-logo"
                href="https://thememaster.net/wp/maxdi/"
              >
                <img
                  src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/logo/logo.svg"
                  alt="logo"
                />
              </a>
            </div>
          </div>
          <div className="col-xxl-7 col-xl-6 d-none d-xl-block">
            <div className="main-menu main-menu-3 text-end">
              <nav id="mobile-menu">
                <ul id="menu-main-menu" className="">
                  <li
                    itemScope="itemscope"
                    itemType="https://www.schema.org/SiteNavigationElement"
                    id="menu-item-111"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-has-children dropdown menu-item-111 nav-items"
                  >
                    <a
                      title="Home"
                      href="https://thememaster.net/wp/maxdi/"
                      className="nav-link"
                    >
                      Home
                    </a>
                    <ul className="submenu" role="menu">
                      <li
                        itemScope="itemscope"
                        itemType="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-92"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-92 nav-items"
                      >
                        <a
                          title="Digital Agency"
                          href="https://thememaster.net/wp/maxdi/"
                          className="dropdown-items"
                        >
                          Digital Agency
                        </a>
                      </li>
                      <li
                        itemScope="itemscope"
                        itemType="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-96"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-96 nav-items"
                      >
                        <a
                          title="Creative Agency"
                          href="https://thememaster.net/wp/maxdi/creative-agency/"
                          className="dropdown-items"
                        >
                          Creative Agency
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    itemScope="itemscope"
                    itemType="https://www.schema.org/SiteNavigationElement"
                    id="menu-item-94"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-94 nav-items"
                  >
                    <a
                      title="About"
                      href="https://thememaster.net/wp/maxdi/about/"
                      className="nav-link"
                    >
                      About
                    </a>
                  </li>
                  <li
                    itemScope="itemscope"
                    itemType="https://www.schema.org/SiteNavigationElement"
                    id="menu-item-112"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-112 nav-items"
                  >
                    <a title="Pages" href="#" className="nav-link">
                      Pages
                    </a>
                    <ul className="submenu" role="menu">
                      <li
                        itemScope="itemscope"
                        itemType="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-95"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-95 nav-items"
                      >
                        <a
                          title="Contact"
                          href="https://thememaster.net/wp/maxdi/contact/"
                          className="dropdown-items"
                        >
                          Contact
                        </a>
                      </li>
                      <li
                        itemScope="itemscope"
                        itemType="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-93"
                        className="menu-item menu-item-type-post_type menu-item-object-page current_page_parent menu-item-93 nav-items"
                      >
                        <a
                          title="Blog"
                          href="https://thememaster.net/wp/maxdi/blog/"
                          className="dropdown-items"
                        >
                          Blog
                        </a>
                      </li>
                      <li
                        itemScope="itemscope"
                        itemType="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-113"
                        className="menu-item menu-item-type-post_type menu-item-object-post menu-item-113 nav-items"
                      >
                        <a
                          title="Blog Details"
                          href="https://thememaster.net/wp/maxdi/delivering-the-best-digital-marketing-solution-creative-team/"
                          className="dropdown-items"
                        >
                          Blog Details
                        </a>
                      </li>
                      <li
                        itemScope="itemscope"
                        itemType="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-99"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-99 nav-items"
                      >
                        <a
                          title="Team"
                          href="https://thememaster.net/wp/maxdi/team/"
                          className="dropdown-items"
                        >
                          Team
                        </a>
                      </li>
                      <li
                        itemScope="itemscope"
                        itemType="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-100"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-100 nav-items"
                      >
                        <a
                          title="Team Details"
                          href="https://thememaster.net/wp/maxdi/team-details/"
                          className="dropdown-items"
                        >
                          Team Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    itemScope="itemscope"
                    itemType="https://www.schema.org/SiteNavigationElement"
                    id="menu-item-98"
                    className="menu-item menu-item-type-post_type menu-item-object-page current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children dropdown active menu-item-98 nav-items"
                  >
                    <a
                      title="Services"
                      href="https://thememaster.net/wp/maxdi/services/"
                      className="nav-link"
                    >
                      Services
                    </a>
                    <ul className="submenu" role="menu">
                      <li
                        itemScope="itemscope"
                        itemType="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-114"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-114 nav-items"
                      >
                        <a
                          title="Services"
                          href="https://thememaster.net/wp/maxdi/services/"
                          className="dropdown-items"
                        >
                          Services
                        </a>
                      </li>
                      <li
                        itemScope="itemscope"
                        itemType="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-247"
                        className="menu-item menu-item-type-post_type menu-item-object-alimasha-services current-menu-item active menu-item-247 nav-items"
                      >
                        <a
                          title="Services Details"
                          href="https://thememaster.net/wp/maxdi/ourservices/web-development/"
                          className="dropdown-items"
                        >
                          Services Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    itemScope="itemscope"
                    itemType="https://www.schema.org/SiteNavigationElement"
                    id="menu-item-97"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown menu-item-97 nav-items"
                  >
                    <a
                      title="Portfolio"
                      href="https://thememaster.net/wp/maxdi/portfolio/"
                      className="nav-link"
                    >
                      Portfolio
                    </a>
                    <ul className="submenu" role="menu">
                      <li
                        itemScope="itemscope"
                        itemType="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-115"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-115 nav-items"
                      >
                        <a
                          title="Portfolio"
                          href="https://thememaster.net/wp/maxdi/portfolio/"
                          className="dropdown-items"
                        >
                          Portfolio
                        </a>
                      </li>
                      <li
                        itemScope="itemscope"
                        itemType="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-246"
                        className="menu-item menu-item-type-post_type menu-item-object-alimasha-portfolio menu-item-246 nav-items"
                      >
                        <a
                          title="Portfolio Details"
                          href="https://thememaster.net/wp/maxdi/ourportfolio/digital-agency/"
                          className="dropdown-items"
                        >
                          Portfolio Details
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>{" "}
              </nav>
            </div>
          </div>
          <div className="col-xxl-2 col-xl-3 col-lg-7 col-md-6 col-6">
            <div className="header__right text-end d-flex align-items-center justify-content-end">
              <div className="d-none d-md-block">
                <a
                  className="m-btn"
                  href="https://thememaster.net/wp/maxdi/contact"
                >
                  Get A Quote
                </a>
              </div>
              <div className="side-menu-icon d-xl-none">
                <button className="side-toggle">
                  <i className="fa-solid fa-bars" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header> */}
  {/* header end */}
  {/* side info start */}
  {/* mobile menu sidebar start */}
  <div className="fix">
    <div className="side-info">
      <button className="side-info-close">
        <i className="fas fa-times" />
      </button>
      <div className="side-info-content">
        <div className="mobile-menu" />
        <div className="sidebar__contact mb-30">
          <div className="contact-list mb-30">
            <ul>
              <li>
                <i className="fas fa-map-marker-alt" />
                66 Broklyn Street, New York United States of America{" "}
              </li>
              <li>
                <i className="far fa-paper-plane" />
                <a href="mailto:http://info@example.com">info@example.com</a>
              </li>
              <li>
                <i className="fas fa-phone" />
                <a href="tel:http://+00%2066%2044%2022%2011">+00 66 44 22 11</a>
              </li>
            </ul>
            <div className="sidebar__social">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
              <a href="#">
                <i className="fab fa-google" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* side info end */}
  <div className="offcanvas-overlay" />
  {/* mobile menu sidebar end */}
  {/* header end */}
  {/* wrapper-box start */}
  {/* page-title area start */}
  <section className="page__title-area page__title-height fix d-flex align-items-center p-relative  ">
    <div className="page__title-shape">
      <img
        className="page-title-s-1 d-none d-md-block"
        src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/page-title/page-title-s-1.png"
        alt="image"
      />
      <img
        className="page-title-s-3"
        src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/page-title/page-title-s-3.png"
        alt="image"
      />
      <img
        className="page-title-s-4"
        src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/page-title/page-title-s-4.png"
        alt="image"
      />
      <img
        className="page-title-s-5 wow fadeInDown"
        data-wow-delay="1s"
        src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/page-title/page-title-s-5.png"
        alt="image"
      />
      <img
        className="page-title-s-6 wow fadeInUp"
        data-wow-delay=".6s"
        src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/page-title/page-title-s-6.png"
        alt="image"
      />
      <img
        className="page-title-s-7 d-none d-md-block"
        src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/page-title/page-title-s-7.png"
        alt="image"
      />
    </div>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-xxl-12">
          <div className="page__title-wrapper">
            <h2 className="page__title-heading">Web Development </h2>
            <nav
              aria-label="Breadcrumbs"
              className="breadcrumb-trail breadcrumbs"
            >
              <ul
                className="trail-items"
                itemScope=""
                itemType="http://schema.org/BreadcrumbList"
              >
                <li
                  itemProp="itemListElement"
                  itemScope=""
                  itemType="http://schema.org/ListItem"
                  className="trail-item trail-begin"
                >
                  <a
                    href="https://thememaster.net/wp/maxdi/"
                    rel="home"
                    itemProp="item"
                  >
                    <span itemProp="name">Home</span>
                  </a>
                  <meta itemProp="position" content={1} />
                </li>
                <li
                  itemProp="itemListElement"
                  itemScope=""
                  itemType="http://schema.org/ListItem"
                  className="trail-item"
                >
                  <a
                    href="https://thememaster.net/wp/maxdi/ourservices/"
                    itemProp="item"
                  >
                    <span itemProp="name">Services</span>
                  </a>
                  <meta itemProp="position" content={2} />
                </li>
                <li className="trail-item trail-end">
                  <span>Web Development</span>
                </li>
              </ul>
            </nav>{" "}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* page-title area end */}
  <section className="services__details p-relative pt-120 pb-90">
    <div className="services__details-shape">
      <img
        className="s-details-s-1"
        src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/services/s-details-s-1.png"
        alt="image"
      />
      <img
        className="s-details-s-2 d-none d-sm-block"
        src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/services/s-details-s-2.png"
        alt="image"
      />
      <img
        className="s-details-s-3"
        src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/services/s-details-s-3.png"
        alt="image"
      />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-xl-4 col-lg-4">
          <div
            id="alimasha-services-cats-3"
            className="sidebar__widget sidebar__widget-2 mb-40 widget_alimasha-services-cats"
          >
            <div className="sidebar__widget-title">
              <h3>Services </h3>
            </div>
            <div className="sidebar__widget-link">
              <ul>
                <li>
                  <a href="https://thememaster.net/wp/maxdi/ourservices/digital-marketing/">
                    Digital Marketing{" "}
                  </a>
                </li>
                <li>
                  <a href="https://thememaster.net/wp/maxdi/ourservices/content-strategy/">
                    Content Strategy{" "}
                  </a>
                </li>
                <li>
                  <a href="https://thememaster.net/wp/maxdi/ourservices/e-commerce/">
                    E-commerce{" "}
                  </a>
                </li>
                <li>
                  <a href="https://thememaster.net/wp/maxdi/ourservices/ui-ux-design/">
                    UI/UX Design{" "}
                  </a>
                </li>
                <li>
                  <a href="https://thememaster.net/wp/maxdi/ourservices/app-development/">
                    App Development{" "}
                  </a>
                </li>
                <li>
                  <a href="https://thememaster.net/wp/maxdi/ourservices/web-development/">
                    Web Development{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-8 col-lg-8">
          <div className="services__details-thumb mb-60">
            <img
              width={1200}
              height={722}
              src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/blog-5.jpg"
              className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
              alt=""
              decoding="async"
              fetchpriority="high"
              srcSet="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/blog-5.jpg 1200w, https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/blog-5-300x181.jpg 300w, https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/blog-5-1024x616.jpg 1024w, https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/blog-5-768x462.jpg 768w"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />{" "}
          </div>
          <div className="services__details-content">
            <h2>Web Development</h2>
            <p>
              Kindling the energy hidden in matter the only home we’ve ever
              known radio telescope decipherment descended from astronomers
              rogue. Prime number network of wormholes take root. Kindling the
              energy hidden in matter the only home we’ve ever known radio
              telescope decipherment descended from astronomers rogue. Prime
              number network of wormholes take root. We’ve ever known radio
              telescope decipherment descended from astronomers rogue. Prime
              number network of wormholes take root.
            </p>
            <p>
              Kindling the energy hidden in matter the only home we’ve ever
              known radio telescope decipherment descended from astronomers
              rogue. Prime number network of wormholes take root. Matter the
              only home we’ve ever known radio telescope decipherment descended
              from astronomers rogue. Prime number network of wormholes take
              root. Kindling the energy hidden in matter the only home we’ve
              ever known radio telescope decipherment descended from astronomers
              rogue. Prime number network of wormholes take root. Matter the
              only home we’ve ever known radio telescope decipherment descended
              from astronomers rogue. Prime number network of wormholes take
              root.
            </p>
            <div className="key__factors">
              <div className="key__factors-title">
                <h3>Key Factors</h3>
              </div>
              <div className="key__factors-wrapper d-flex">
                <div className="key__factors-content mb-40 d-sm-flex">
                  <div className="key__factors-icon" />
                  <div className="key__factors-text">
                    <h5>Business Automation</h5>
                    <p>
                      Energy only home we’ve ever known deciphe scended from
                      rogue.
                    </p>
                  </div>
                </div>
                <div className="key__factors-content mb-40 d-sm-flex">
                  <div className="key__factors-icon key__factors-icon-2" />
                  <div className="key__factors-text">
                    <h5>Critical Analysis</h5>
                    <p>
                      Energy only home we’ve ever known deciphe scended from
                      rogue.
                    </p>
                  </div>
                </div>
              </div>
              <div className="key__factors-wrapper d-flex">
                <div className="key__factors-content mb-40 d-sm-flex">
                  <div className="key__factors-icon key__factors-icon-3" />
                  <div className="key__factors-text">
                    <h5>Risk Protection</h5>
                    <p>
                      Energy only home we’ve ever known deciphe scended from
                      rogue.
                    </p>
                  </div>
                </div>
                <div className="key__factors-content mb-40 d-sm-flex">
                  <div className="key__factors-icon key__factors-icon-4" />
                  <div className="key__factors-text">
                    <h5>Annual Report</h5>
                    <p>
                      Energy only home we’ve ever known deciphe scended from
                      rogue.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="key__benefits">
              <div className="key__benefits-title">
                <h3>Key Benefits</h3>
              </div>
              <div className="key__benefits-content">
                <ul>
                  <li>Sea of Tranquility dispassionate observer dream.</li>
                  <li>
                    Muse about as a patch of light brain is the seed of
                    intelligence.
                  </li>
                  <li>
                    The only home we’ve ever known dream of the mind’s eye.
                  </li>
                </ul>
              </div>
            </div>
            <p>
              Kindling the energy hidden in matter the only home we’ve ever
              known radio telescope decipherment descended from astronomers
              rogue. Prime number network of wormholes take root. Kindling the
              energy hidden in matter the only home we’ve ever known radio
              telescope decipherment descended.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* lets-work area start */}
  <section className="lets-work__area p-relative pt-165 pb-160">
    <div className="lets-work__shape">
      <img
        className="lets-work-shape-1 d-none d-lg-block"
        src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/lets-work/lets-work-s-1.png"
        alt="image"
      />
      <img
        className="lets-work-shape-2 d-none d-lg-block"
        src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/lets-work/lets-work-s-2.png"
        alt="image"
      />
      <img
        className="lets-work-shape-3 d-none d-sm-block"
        src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/lets-work/lets-work-s-3.png"
        alt="image"
      />
      <img
        className="lets-work-shape-4 d-none d-sm-block"
        src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/lets-work/lets-work-s-4.png"
        alt="image"
      />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="lets-work__title text-center">
            <h4
              className="section__sub-title wow fadeInUp"
              data-wow-delay=".2s"
            >
              Let’s Work Together{" "}
            </h4>
            <h2 className="section__title wow fadeInUp" data-wow-delay=".3s">
              <span>Need a successful</span>
              project?{" "}
            </h2>
            <a
              className="m-btn mt-35 wow fadeInUp"
              data-wow-delay=".6s"
              href="https://thememaster.net/wp/maxdi/contact"
            >
              Estimate Project
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* lets-work area end */}
  {/* footer area start */}
  <footer>
    <div className="footer__area fix p-relative">
      <div className="footer__shape">
        <img
          className="footer-shape-1 wow fadeInDown"
          data-wow-delay="1s"
          src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/footer/footer-s-1.png"
          alt="image"
        />
        <img
          className="footer-shape-2 wow fadeInUp"
          data-wow-delay="1.6s"
          src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/shape/footer/footer-s-2.png"
          alt="image"
        />
      </div>
      <div className="footer__top pt-200 pb-40">
        <div className="container">
          <div className="row mb-145">
            <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-10">
              <div className="footer__newsletter">
                <h4
                  className="section__sub-title wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  join our community{" "}
                </h4>
                <h2
                  className="section__title wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <span>Subscribe for newsletter</span>
                </h2>
              </div>
            </div>
            <div className="col-xxl-5 offset-xxl-1 col-xl-5 col-lg-4 col-md-4">
              <div className="widget_text footer__widget footer__widget-link">
                <div className="textwidget custom-html-widget">
                  <div className="footer__subscribe">
                    <form action="#">
                      <div className="footer__subscribe-input">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email address"
                          />
                        </div>
                        <button type="submit">Subscribe</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-10 col-sm-10">
              <div className="footer__widget wow fadeIn" data-wow-delay=".5s">
                <div className="footer__widget-logo">
                  <img
                    src="https://thememaster.net/wp/maxdi/wp-content/uploads/2022/07/Logo-footer.svg"
                    alt="logo"
                  />
                  <p>
                    Core object made kolor adipisci elit sed diam nonummy nibh
                    euismod tincidunt laoreet dolore magna grinjon.
                  </p>
                </div>
                <div className="footer__widget-social">
                  <a href="#">
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-youtube" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
              <div className="footer__widget wow fadeIn" data-wow-delay=".7s">
                <div className="footer__widget-link">
                  <div className="footer__widget-title">
                    <h5>Our Services</h5>
                  </div>
                  <div className="menu-footer-menu-1-container">
                    <ul id="menu-footer-menu-1" className="menu">
                      <li
                        id="menu-item-101"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-101"
                      >
                        <a href="#">Development</a>
                      </li>
                      <li
                        id="menu-item-102"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-102"
                      >
                        <a href="#">Marketing</a>
                      </li>
                      <li
                        id="menu-item-103"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-103"
                      >
                        <a href="#">UI/UX Design</a>
                      </li>
                      <li
                        id="menu-item-104"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-104"
                      >
                        <a href="#">E-Commerce</a>
                      </li>
                      <li
                        id="menu-item-105"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-105"
                      >
                        <a href="#">Content Writing</a>
                      </li>
                    </ul>
                  </div>
                </div>{" "}
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
              <div
                className="footer__widget footer__widget-mt-2 wow fadeIn"
                data-wow-delay=".9s"
              >
                <div className="footer__widget-link">
                  <div className="footer__widget-title">
                    <h5>Company</h5>
                  </div>
                  <div className="menu-footer-menu-2-container">
                    <ul id="menu-footer-menu-2" className="menu">
                      <li
                        id="menu-item-106"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-106"
                      >
                        <a href="#">About us</a>
                      </li>
                      <li
                        id="menu-item-107"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-107"
                      >
                        <a href="#">Portfolio</a>
                      </li>
                      <li
                        id="menu-item-108"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-108"
                      >
                        <a href="#">Our Team</a>
                      </li>
                      <li
                        id="menu-item-109"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-109"
                      >
                        <a href="#">Contact</a>
                      </li>
                      <li
                        id="menu-item-110"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-110"
                      >
                        <a href="#">Faqs</a>
                      </li>
                    </ul>
                  </div>
                </div>{" "}
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-10">
              <div
                className="footer__widget footer__widget-mt wow fadeIn"
                data-wow-delay="1.2s"
              >
                <div className="widget_text footer__widget-link">
                  <div className="footer__widget-title">
                    <h5>Stay Connected</h5>
                  </div>
                  <div className="textwidget custom-html-widget">
                    <div className="footer__widget-info">
                      <div className="footer__widget-address">
                        <p>
                          66 Broklyn Street, New York United States of America
                        </p>
                      </div>
                      <div className="footer__widget-phone d-flex align-items-center">
                        <i className="fa-solid fa-phone" />
                        <p>
                          <a href="tel:+1166442200">+11 66 44 22 00</a>
                        </p>
                      </div>
                      <div className="footer__widget-email d-flex align-items-center">
                        <i className="fa-solid fa-paper-plane" />
                        <p>
                          <a href="mailto:info@example.com">info@example.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="footer__copyright">
                <p>Copyright © 2023 ThemeMaster</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* footer area end */}
</>

  )
}

export default ServicesDetails
