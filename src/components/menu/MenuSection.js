const MenuSection = ({ children, text }) => {
  //logic here
  return (
    <section>
      <h3>{text}</h3>
      {children}
    </section>
  );
};
export default MenuSection;
