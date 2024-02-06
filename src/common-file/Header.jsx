import React, { useState } from "react";
import "./common-file-css/header.css";
import { Link } from "react-router-dom";
function Header() {
  const cartP = [
    {
      name: "Compare",
      url: "/login",
      icon: "ri-recycle-fill",
    },
    {
      name: "Wishlist",
      icon: "ri-heart-line",
    },
    {
      url:"/cart",
      name: "Cart",
      icon: "ri-shopping-cart-2-fill",
    },
    {
      name: "Account",
      icon: "ri-account-circle-fill",
    },
  ];
  const nav2 = [
    {name:"Home",url:"/home"},
    {name:"About us",url:"/about"},
    {name:"Shop",url:"/menu"},
    {name:"Vendor",url:"/vendors"},
    {name:"Contact",url:"/footer"},
    {name:"Pages",url:"/pages"},
    {name:"Account",url:""}
  ]
  return (
    <>
      <div className="header">
        <div className="container">
        {/*______________Section-1______________________*/}

          <div className="nav-bar">
            <div className="logo">
              <img
                src="/login-images/logo.312c90ddea629dd64ff6fc506a5f3e6c.svg"
                alt=""
              />
            </div>
            <div className="drop-down">
              <select>
                <option value="">All Categories</option>
                <option value="">About</option>
                <option value="">Solid</option>
                <option value="">Liquid</option>
              </select>
              <input type="text" placeholder="Products" />
              <i class="ri-search-line"></i>
            </div>

            <div className="list">
              <ul>
                {cartP.map((listitem) => {
                  return (
                    <>
                      <li>
                        <Link to={listitem.url}>
                          <i class={listitem.icon}></i>
                          {listitem.name}
                        </Link>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
          <hr/>

          {/*______________Section-2______________________*/}
          <div className="nav-bar2">
            <button className="btn">Browswe All Category</button>
            <div className="listitem">
                <ul>
                {
                  nav2.map((item)=>{
                    return<>
                    <li><Link to={item.url}>{item.name}</Link></li>
                    </>
                  })
                }
                </ul>
            </div>
            <div className="contact">
            <i class="fa-solid fa-headphones"></i>
            <p>
              <h1>1988-899</h1>
              <h4>24/7 Customer Support</h4>
            </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
