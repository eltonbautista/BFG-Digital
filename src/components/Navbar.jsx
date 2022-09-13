function Navbar() {
  return (
    <header className="grid justify-items-center">
      <nav className="navbar max-w-screen-xl">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
