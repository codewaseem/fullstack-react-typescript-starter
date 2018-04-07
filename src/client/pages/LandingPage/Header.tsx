import * as React from "react";
import logo from "./logo.svg";

export default class Header extends React.Component {
  render() {
    return (
      <header className="w-full min-h-screen bg-black text-white">
        <section className="flex flex-wrap p-2 sm:p-4 md:p-6 lg:p-8">
          <img className="w-24 h-24  md:self-start" src={logo} />
          <nav className="min-w-full absolute md:static">
            <ul className="list-reset text-center font-semibold">
              <li className="p-1"><span className="app-nav-active">HOME</span></li>
              <li className="p-1"><span>EVENTS</span></li>
              <li className="p-1"><span>COMMUNITY</span></li>
              <li className="p-1"><span>TESTIMONIALS</span></li>
              <li className="p-1"><span>5SENSES</span></li>
              <li className="p-1"><span>CONTACT</span></li>
              <li className="p-1"><span>STORE</span></li>
            </ul>
          </nav>
        </section>
        <section>b</section>
      </header>
    );
  }
}