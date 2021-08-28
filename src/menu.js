const Menu = [
  {
    label: "Home",
    pathname: "/",
    component:()=>import('./pages/Main.jsx')
  },  
  {
    label: "TestPage",
    pathname: "/test-page",
    component:()=>import('./pages/TestPage.jsx')
  }
];

export default Menu;