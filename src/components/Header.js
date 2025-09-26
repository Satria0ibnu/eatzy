const Header = ({ username, orderType }) => {
  //logic here
  return (
    <header className='main-header'>
      <div className='header-left'>Eatzy</div>
      <div className='header-right'>
        Welcome, {username} ({orderType})
      </div>
    </header>
  );
};
export default Header;
