const MenuSection = ({ children, text }) => {
  //logic here
  return (
    <section className='section-menu'>
      <h3 className='text-section'>{text}</h3>
      <div className='card-album'>{children}</div>
    </section>
  );
};
export default MenuSection;
