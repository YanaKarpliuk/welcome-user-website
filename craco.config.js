const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@mainScreen': path.resolve(__dirname, 'src/components/MainScreen'),
      '@toolbar': path.resolve(__dirname, 'src/components/Toolbar'),
    }
  },
};