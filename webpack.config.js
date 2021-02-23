module.exports = (env) => {
  const envMode = env.prod ? "prod" : "dev";
  return require(`./webpack.${envMode}.js`);
};
