export default {
  input: './osrm-openapi.yaml',
  output: 'src',
  plugins: ['@hey-api/client-fetch'],
};