/**
 *  plaza-digital controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::plaza-digital.plaza-digital",
  ({ strapi }) => ({
    // Method 1: Creating an entirely custom action

    async crear_tienda(ctx) {
      try {
        const data = ctx.request.body;
        if (data) {
          const response = await strapi
            .service("api::plaza-digital.plaza-digital")
            .crearTienda(data);

          // const response = await strapi.services["plaza-digital"].crearTienda(
          //   "helo"
          // );
          ctx.send(response);
        } else {
          ctx.send({
            success: false,
            message: "Faltan parametros",
            data: data,
          });
        }
      } catch (error) {
        ctx.send({ success: false, message: "Error de servidor" });
      }
    },
    async actualizar_tienda(ctx) {
      try {
        const data = ctx.request.body;
        if (data) {
          const response = await strapi
            .service("api::plaza-digital.plaza-digital")
            .actualizar_tienda(data);

          // const response = await strapi.services["plaza-digital"].crearTienda(
          //   "helo"
          // );
          ctx.send(response);
        } else {
          ctx.send({
            success: false,
            message: "Faltan parametros",
            data: data,
          });
        }
      } catch (error) {
        ctx.send({ success: false, message: "Error de servidor" });
      }
    },
    async agregar_producto(ctx) {
      try {
        const data = ctx.request.body;
        if (data) {
          const response = await strapi
            .service("api::plaza-digital.plaza-digital")
            .agregar_producto(data);

          // const response = await strapi.services["plaza-digital"].crearTienda(
          //   "helo"
          // );
          ctx.send(response);
        } else {
          ctx.send({
            success: false,
            message: "No enviado correctamente el producto",
            data: data,
          });
        }
      } catch (error) {
        ctx.send({ success: false, message: "Error de servidor" });
      }
    },
    async eliminar_producto(ctx) {
      try {
        const data = ctx.request.params;
        const { id } = data;
        if (id) {
          const response = await strapi
            .service("api::plaza-digital.plaza-digital")
            .eliminar_producto(id);

          // const response = await strapi.services["plaza-digital"].crearTienda(
          //   "helo"
          // );
          ctx.send(response);
        } else {
          ctx.send({
            success: false,
            message: "No enviado correctamente el productoId",
            data: data,
          });
        }
      } catch (error) {
        ctx.send({ success: false, message: "Error de servidor" });
      }
    },
    async actualizar_producto(ctx) {
      try {
        const { id } = ctx.request.params;
        const data = ctx.request.body;
        // console.log("id: " + id);
        // console.log("data: " + JSON.stringify(data));
        if (data && id) {
          const response = await strapi
            .service("api::plaza-digital.plaza-digital")
            .actualizar_producto(id, data);

          ctx.send(response);
        } else {
          ctx.send({
            success: false,
            message: "No enviado correctamente el data y id",
            data: data,
          });
        }
      } catch (error) {
        ctx.send({ success: false, message: "Error de servidor" });
      }
    },
  })
);

// const {
//   tiendaCategoriaPlaza,
//   facebook,
//   domicilio,
//   instagram,
//   metodosDePago,
//   uid,
//   tiendaCategorias,
//   tiendaDescripcion,
//   tiendaId,
//   tiendaPrimaryColor,
//   tiendaNombre,
//   tiendaPerfil,
//   whatsapp,
// } = data;
// (typeof tiendaCategoriaPlaza === "string",
// typeof facebook === "string" &&
//   typeof domicilio === "boolean" &&
//   typeof instagram === "string" &&
//   typeof metodosDePago === "object" &&
//   typeof tiendaCategorias === "array" &&
//   typeof tiendaDescripcion === "string" &&
//   typeof tiendaId === "string" &&
//   typeof tiendaNombre === "string" &&
//   typeof whatsapp === "number" &&
//   typeof tiendaPrimaryColor === "string" &&
//   typeof uid === "string" &&
//   typeof tiendaPerfil === "string")
