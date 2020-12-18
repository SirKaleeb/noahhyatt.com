export default function Navbar() {
  return (
    <>
      <header>
        <div className="w-full h-auto p-4 flex">
          <div>
            <a href="/">
              <img src="/logo.webp" className="w-12 lg:w-16" />
            </a>
          </div>

          <div className="hidden lg:flex lg:items-center justify-between text-base lg:text-xl text-white pt-4 lg:pt-0 lg:m-auto">
            <nav>
              <ul className="lg:flex">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a className="lg:mx-16" href="about">About</a>
                </li>
                <li>
                  <a href="about">Gallery</a>
                </li>
              </ul>
            </nav>
          </div>

          <div id="contact" className="hidden lg:flex lg:items-center justify-between text-base lg:text-xl">
            <a href="contact" className="px-8 py-3 rounded-lg shadow shadow-md transitions transform hover:shadow-2xl">Contact</a>
          </div>
        </div>
      </header>
    </>
  );
}
