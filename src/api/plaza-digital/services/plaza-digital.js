"use strict";

/**
 * plaza-digital service.
 */

const { createCoreService } = require("@strapi/strapi").factories;
const admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountFirebasePlaza.json");
const serviceAccount2 = {};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();

module.exports = createCoreService(
  "api::plaza-digital.plaza-digital",
  ({ strapi }) => ({
    async crearTienda(data) {
      const collection = "tiendas";
      const {
        tiendaCategoriaPlaza,
        facebook,
        domicilio,
        instagram,
        metodosDePago,
        uid,
        tiendaCategorias,
        tiendaDescripcion,
        tiendaId,
        tiendaPrimaryColor,
        tiendaNombre,
        tiendaPerfil,
        whatsapp,
        cobertura,
      } = data;
      try {
        const existsTienda = await db
          .collection(collection)
          .doc(tiendaId)
          .get();
        if (existsTienda.exists) {
          return { success: false, message: "Ya existe este nombre de tienda" };
        }
        await db.collection(collection).doc(tiendaId).set({
          tiendaCategoriaPlaza,
          facebook,
          domicilio,
          instagram,
          metodosDePago,
          uid,
          tiendaCategorias,
          tiendaDescripcion,
          tiendaId,
          tiendaPrimaryColor,
          tiendaNombre,
          tiendaPerfil,
          whatsapp,
          recomendado: false,
          cobertura,
        });
        return { success: true };
      } catch (error) {
        console.log("error", error);
        return { success: false, error: error.message || "Error crear tienda" };
      }
    },
    async actualizar_tienda(data) {
      const collection = "tiendas";
      const { tiendaId } = data;
      try {
        const existsTienda = await db
          .collection(collection)
          .doc(tiendaId)
          .get();
        if (!existsTienda.exists) {
          return { success: false, message: "No existe esta tienda" };
        }
        await db
          .collection(collection)
          .doc(tiendaId)
          .set(data, { merge: true });
        return { success: true };
      } catch (error) {
        console.log("error", error);
        return {
          success: false,
          error: error.message || "Error al actualizar la tienda",
        };
      }
    },
    async agregar_producto(data) {
      const collection = "productos";
      try {
        const newProduct = {
          ...data,
          recomendado: false,
          timestamp: admin.firestore.FieldValue.serverTimestamp(),
        };
        const response = await db.collection(collection).add(newProduct);
        return { success: true, id: response.id };
      } catch (error) {
        console.log("error", error);
        return {
          success: false,
          error: error.message || "Error al actualizar la tienda",
        };
      }
    },
    async eliminar_producto(productoId) {
      try {
        await db.collection("productos").doc(productoId).delete();
        return { success: true };
      } catch (error) {
        return {
          success: false,
          error: error.message || "Error al eliminar el producto",
        };
      }
    },
    async actualizar_producto(id, producto) {
      const collection = "productos";
      try {
        await db.collection(collection).doc(id).set(producto, { merge: true });
        return { success: true, id };
      } catch (error) {
        console.log("error", error);
        return {
          success: false,
          error: error.message || "Error al actualizar la tienda",
        };
      }
    },
  })
);
