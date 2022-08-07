module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f5b58200b1ccc9ae9f7daf61a0833ef7'),
  },
});
