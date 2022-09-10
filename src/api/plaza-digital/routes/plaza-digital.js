"use strict";

/**
 * plaza-digital router.
 */

// const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('api::plaza-digital.plaza-digital');
module.exports = {
  routes: [
    {
      method: "POST",
      path: "/plaza-digitals/crear_tienda",
      handler: "plaza-digital.crear_tienda",
      config: {
        policies: [],
      },
    },
    {
      method: "POST",
      path: "/plaza-digitals/actualizar_tienda",
      handler: "plaza-digital.actualizar_tienda",
      config: {
        policies: [],
      },
    },
    {
      method: "POST",
      path: "/plaza-digitals/agregar_producto",
      handler: "plaza-digital.agregar_producto",
      config: {
        policies: [],
      },
    },
    {
      method: "DELETE",
      path: "/plaza-digitals/eliminar_producto/:id",
      handler: "plaza-digital.eliminar_producto",
      config: {
        policies: [],
      },
    },
    {
      method: "PATCH",
      path: "/plaza-digitals/actualizar_producto/:id",
      handler: "plaza-digital.actualizar_producto",
      config: {
        policies: [],
      },
    },
    // {
    //   // Path defined with an URL parameter
    //   method: "POST",
    //   path: "/restaurants/:id/review",
    //   handler: "restaurant.review",
    // },
    // {
    //   // Path defined with a regular expression
    //   method: "GET",
    //   path: "/restaurants/:category([a-z]+)", // Only match when the URL parameter is composed of lowercase letters
    //   handler: "restaurant.findByCategory",
    // },
  ],
};
