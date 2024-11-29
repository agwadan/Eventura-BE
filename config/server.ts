export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),

  app: {
    keys: [
      env(
        "APP_KEY_1",
        "e5404cf944f053759711ca24a1addef296d42e767e3fadb99efa232e3bb09e07"
      ),
      env(
        "APP_KEY_2",
        "bcf7fd0bbbfb78124f8f69a202ec6c4d2f9f5574a5741d8e0baf45789467129c"
      ),
    ],
  },
});
