function Footer() {
  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <aside>
          <a className="btn btn-ghost normal-case text-4xl inline text-green-400">
            <span className=" text-red-400 font-extrabold">T</span>ech
            <span className=" text-red-400 font-extrabold m-0 p-0">H</span>ub
          </a>
          <p>
            TechHub Corporation Ltd.
            <br />
            Providing reliable tech products since 2020
          </p>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
