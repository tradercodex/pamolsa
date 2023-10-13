import React, { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ClaimsForm from "../components/ClaimsForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./../styles/claims.css";
import { useTranslation } from "react-i18next";

const Claims = () => {
  const cart = useSelector((state) => state.cart);

  const [cartItems, setCartItems] = useState(cart.cartItems);

  useEffect(() => {
    const movilOpen = document.getElementById("movil");
    const header = document.getElementById("header");
    const movilClose = document.getElementById("close-movil");

    movilOpen.addEventListener("click", function () {
      header.classList.add("movile-active");
    });

    movilClose.addEventListener("click", function () {
      header.classList.remove("movile-active");
    });

    setCartItems(cart.cartItems);
  }, [cart.cartItems]);

  let number = Object.keys(cartItems).length;
  const { t } = useTranslation();

  return (
    <Fragment>
      <Header number={number} t={t} />

      <div className="Claims">
        <div className="content-claims">
          <div>
            <h2>Libro de reclamaciones</h2>
            <p className="subtitle-claims">
              Estimado cliente si requiere una atención inmediata, lo invitamos
              a usar nuestro canal de atención: (01) 641-9595. Gracias por
              ayudarnos a mejorar nuestro servicio.
            </p>
          </div>
          <div className="divider">
            <span></span>
          </div>
          <div className="services-claims">
            <div>
              <img src={require("../images/img/empresa.png")} alt="" />
              <p>Razón Social</p>
              <span>PERUANA DE MOLDEADOS S.A.C.</span>
            </div>
            <div>
              <img src={require("../images/img/ruc.png")} alt="" />
              <p>RUC</p>
              <span>20251995967</span>
            </div>
            <div>
              <img src={require("../images/img/direccion.png")} alt="" />
              <p>{t("contacto.direccion")}</p>
              <span>Av. Elmer Faucett 3486 Urb. Bocanegra, Callao</span>
            </div>
          </div>
        </div>
      </div>

      <ClaimsForm t={t} />
      <Footer t={t} />
    </Fragment>
  );
};

export default Claims;
