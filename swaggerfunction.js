import SwaggerUIBundle from 'https://cdn.skypack.dev/swagger-ui-dist/swagger-ui-bundle.js';



export let URLData = "./openapi.yaml";

export const UIData = SwaggerUIBundle({
    url: URLData, //Lokasi untuk Membuka API
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
        SwaggerUIBundle.presets.apis,
        SwaggerUIBundle.SwaggerUIStandalonePreset
    ],
    plugins: [
        SwaggerUIBundle.plugins.DownloadUrl
    ],
});

export function setSwagger() {
    return UIData
}
