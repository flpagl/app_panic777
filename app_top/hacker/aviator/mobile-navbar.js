* {
  margin: 0;
  padding: 0;
}

a {
  color: #fff;
  text-decoration: none;
  transition: 0.3s;
}

a:hover {
  opacity: 0.7;
  color: rgb(32, 192, 255);
}

.logo {
  font-size: 8px;
  text-transform: uppercae;
  letter-spacing: 4px;
}
.menu {
  font-size: 8px;
  text-transform: uppercae;
  letter-spacing: 4px;
}

nav {
  display: flex;
  position:fixed !important ;
  top:0px;
  left:0;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  font-family: system-ui, -apple-system, Helvetica, Arial, sans-serif;
  background: #23232e;
  height: 7vh;
  opacity: 75%;
}

main {
  background: url("bg.jpg") no-repeat center center;
  background-size: cover;
  height: 92vh;
}

.nav-list {
  list-style: none;
  display: flex;
}

.nav-list li {
  letter-spacing: 3px;
  margin-left: 32px;
}

.mobile-menu {
  display: none;
  cursor: pointer;
}

.mobile-menu div {
  width: 32px;
  height: 2px;
  background: #fff;
  margin: 6px;
  transition: 0.3s;
}

@media (max-width: 999px) {
  body {
    overflow-x: hidden;
  }
  .nav-list {
    position: absolute;
    top: 8vh;
    right: 0;
    width: 60vw;
    height: 8vh;
    background: #23232e;
    border-radius: 6px;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    transform: translateX(100%);
    transition: transform 0.3s ease-in;
  }
  .nav-list li {
    margin-left: 0;
    opacity: 0;
  }
  .mobile-menu {
    display: block;
  }
}

.nav-list.active {
  transform: translateX(0);
}

@keyframes navLinkFade {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.mobile-menu.active .line1 {
  transform: rotate(-45deg) translate(-8px, 8px);
}

.mobile-menu.active .line2 {
  opacity: 0;
}

.mobile-menu.active .line3 {
  transform: rotate(45deg) translate(-5px, -7px);
}