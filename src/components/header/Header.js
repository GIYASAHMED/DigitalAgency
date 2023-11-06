import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <>
        <header>
            <div id="header-sticky" className="header__area header__transparent">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-xxl-3 col-xl-3 col-lg-5 col-md-6 col-6">
                    <div className="logo">
                    <Link
                        className="standard-logo"
                        href="https://thememaster.net/wp/maxdi/"
                    >
                        <img
                        src="https://thememaster.net/wp/maxdi/wp-content/themes/maxdi/assets/images/logo/logo.svg"
                        alt="logo"
                        />
                    </Link>
                    </div>
                </div>
                <div className="col-xxl-7 col-xl-6  d-xl-block">
                    <div className="main-menu text-end">
                    <nav id="mobile-menu">
                        <ul id="menu-main-menu" className="">
                        <li
                            itemScope="itemscope"
                            itemType="https://www.schema.org/SiteNavigationElement"
                            id="menu-item-111"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-76 current_page_item current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children dropdown active menu-item-111 nav-items"
                        >
                            <NavLink
                            to="/"
                            title="Home"
                            href="https://thememaster.net/wp/maxdi/"
                            className="nav-link"
                            >
                            Home
                            </NavLink>
                            <ul className="submenu" role="menu">
                            <li
                                itemScope="itemscope"
                                itemType="https://www.schema.org/SiteNavigationElement"
                                id="menu-item-92"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-76 current_page_item active menu-item-92 nav-items"
                            >
                                <NavLink
                                to="/"
                                title="Digital Agency"
                                href="https://thememaster.net/wp/maxdi/"
                                className="dropdown-items"
                                >
                                Digital Agency
                                </NavLink>
                            </li>
                            <li
                                itemScope="itemscope"
                                itemType="https://www.schema.org/SiteNavigationElement"
                                id="menu-item-96"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-96 nav-items"
                            >
                                <NavLink
                                title="Creative Agency"
                                href="https://thememaster.net/wp/maxdi/creative-agency/"
                                className="dropdown-items"
                                >
                                Creative Agency
                                </NavLink>
                            </li>
                            </ul>
                        </li>
                        <li
                            itemScope="itemscope"
                            itemType="https://www.schema.org/SiteNavigationElement"
                            id="menu-item-94"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-94 nav-items"
                        >
                            <NavLink
                            to="/About"
                            title="About"
                            href="https://thememaster.net/wp/maxdi/about/"
                            className="nav-link"
                            >
                            About
                            </NavLink>
                        </li>
                        <li
                            itemScope="itemscope"
                            itemType="https://www.schema.org/SiteNavigationElement"
                            id="menu-item-112"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-112 nav-items"
                        >
                            <NavLink title="Pages" href="#" className="nav-link">
                            Pages
                            </NavLink>
                            <ul className="submenu" role="menu">
                            <li
                                itemScope="itemscope"
                                itemType="https://www.schema.org/SiteNavigationElement"
                                id="menu-item-95"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-95 nav-items"
                            >
                                <NavLink
                                title="Contact"
                                href="https://thememaster.net/wp/maxdi/contact/"
                                className="dropdown-items"
                                >
                                Contact
                                </NavLink>
                            </li>
                            <li
                                itemScope="itemscope"
                                itemType="https://www.schema.org/SiteNavigationElement"
                                id="menu-item-93"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-93 nav-items"
                            >
                                <NavLink
                                title="Blog"
                                href="https://thememaster.net/wp/maxdi/blog/"
                                className="dropdown-items"
                                >
                                Blog
                                </NavLink>
                            </li>
                            <li
                                itemScope="itemscope"
                                itemType="https://www.schema.org/SiteNavigationElement"
                                id="menu-item-113"
                                className="menu-item menu-item-type-post_type menu-item-object-post menu-item-113 nav-items"
                            >
                                <NavLink
                                title="Blog Details"
                                href="https://thememaster.net/wp/maxdi/delivering-the-best-digital-marketing-solution-creative-team/"
                                className="dropdown-items"
                                >
                                Blog Details
                                </NavLink>
                            </li>
                            <li
                                itemScope="itemscope"
                                itemType="https://www.schema.org/SiteNavigationElement"
                                id="menu-item-99"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-99 nav-items"
                            >
                                <NavLink
                                title="Team"
                                href="https://thememaster.net/wp/maxdi/team/"
                                className="dropdown-items"
                                >
                                Team
                                </NavLink>
                            </li>
                            <li
                                itemScope="itemscope"
                                itemType="https://www.schema.org/SiteNavigationElement"
                                id="menu-item-100"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-100 nav-items"
                            >
                                <NavLink
                                title="Team Details"
                                href="https://thememaster.net/wp/maxdi/team-details/"
                                className="dropdown-items"
                                >
                                Team Details
                                </NavLink>
                            </li>
                            </ul>
                        </li>
                        <li
                            itemScope="itemscope"
                            itemType="https://www.schema.org/SiteNavigationElement"
                            id="menu-item-98"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown menu-item-98 nav-items"
                        >
                            <NavLink
                            to="/Services"
                            title="Services"
                            href="https://thememaster.net/wp/maxdi/services/"
                            className="nav-link"
                            >
                            Services
                            </NavLink>
                            <ul className="submenu" role="menu">
                            <li
                                itemScope="itemscope"
                                itemType="https://www.schema.org/SiteNavigationElement"
                                id="menu-item-114"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-114 nav-items"
                            >
                                <NavLink
                                title="Services"
                                href="https://thememaster.net/wp/maxdi/services/"
                                className="dropdown-items"
                                >
                                Services
                                </NavLink>
                            </li>
                            <li
                                itemScope="itemscope"
                                itemType="https://www.schema.org/SiteNavigationElement"
                                id="menu-item-247"
                                className="menu-item menu-item-type-post_type menu-item-object-alimasha-services menu-item-247 nav-items"
                            >
                                <NavLink
                                title="Services Details"
                                href="https://thememaster.net/wp/maxdi/ourservices/web-development/"
                                className="dropdown-items"
                                >
                                Services Details
                                </NavLink>
                            </li>
                            </ul>
                        </li>
                        <li
                            itemScope="itemscope"
                            itemType="https://www.schema.org/SiteNavigationElement"
                            id="menu-item-97"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown menu-item-97 nav-items"
                        >
                            <NavLink
                            title="Portfolio"
                            href="https://thememaster.net/wp/maxdi/portfolio/"
                            className="nav-link"
                            >
                            Portfolio
                            </NavLink>
                            <ul className="submenu" role="menu">
                            <li
                                itemScope="itemscope"
                                itemType="https://www.schema.org/SiteNavigationElement"
                                id="menu-item-115"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-115 nav-items"
                            >
                                <NavLink
                                title="Portfolio"
                                href="https://thememaster.net/wp/maxdi/portfolio/"
                                className="dropdown-items"
                                >
                                Portfolio
                                </NavLink>
                            </li>
                            <li
                                itemScope="itemscope"
                                itemType="https://www.schema.org/SiteNavigationElement"
                                id="menu-item-246"
                                className="menu-item menu-item-type-post_type menu-item-object-alimasha-portfolio menu-item-246 nav-items"
                            >
                                <NavLink
                                title="Portfolio Details"
                                href="https://thememaster.net/wp/maxdi/ourportfolio/digital-agency/"
                                className="dropdown-items"
                                >
                                Portfolio Details
                                </NavLink>
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
                        <NavLink
                        className="m-btn"
                        href="https://thememaster.net/wp/maxdi/contact"
                        >
                        Get A Quote Hello
                        </NavLink>
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
        </header>
    </>
  )
}

export default Header
