// docs/get-npm-version.js
import { readFileSync } from "fs";
import { join } from "path";
function getNpmVersion() {
  try {
    const packageJsonPath = join(process.cwd(), "package.json");
    const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf-8"));
    console.log("NPM Version Read from package.json:", packageJson.version);
    return packageJson.version || "No version found";
  } catch (error) {
    console.error("Error reading package.json:", error);
    return "No version found";
  }
}

// docs/.vitepress/config.js
var config_default = {
  title: "AmirSenpai",
  base: "/Amirs-Blog/",
  themeConfig: {
    nav: [
      { text: "\u062E\u0627\u0646\u0647", link: "/" },
      { text: "\u062F\u0631\u0628\u0627\u0631\u0647 \u0645\u0646", link: "/about" }
    ],
    sidebar: {
      "/posts/": [
        {
          text: "#Blog Posts",
          items: [
            { text: "#1 Who Am I ? (FA)", link: "/posts/whoami" }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/AmirSenpai" },
      { icon: "telegram", link: "https://t.me/itsdekusenpai" }
    ],
    // Display the npm version in the header
    version: getNpmVersion()
    // Ensure this returns the correct version
  }
};
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy9nZXQtbnBtLXZlcnNpb24uanMiLCAiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXGNvZGVcXFxcdml0ZXBibG9nXFxcXGRvY3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXGNvZGVcXFxcdml0ZXBibG9nXFxcXGRvY3NcXFxcZ2V0LW5wbS12ZXJzaW9uLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9jb2RlL3ZpdGVwYmxvZy9kb2NzL2dldC1ucG0tdmVyc2lvbi5qc1wiO2ltcG9ydCB7IHJlYWRGaWxlU3luYyB9IGZyb20gJ2ZzJztcclxuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0TnBtVmVyc2lvbigpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcGFja2FnZUpzb25QYXRoID0gam9pbihwcm9jZXNzLmN3ZCgpLCAncGFja2FnZS5qc29uJyk7XHJcbiAgICBjb25zdCBwYWNrYWdlSnNvbiA9IEpTT04ucGFyc2UocmVhZEZpbGVTeW5jKHBhY2thZ2VKc29uUGF0aCwgJ3V0Zi04JykpO1xyXG4gICAgY29uc29sZS5sb2coJ05QTSBWZXJzaW9uIFJlYWQgZnJvbSBwYWNrYWdlLmpzb246JywgcGFja2FnZUpzb24udmVyc2lvbik7ICAvLyBMb2cgdGhlIHZlcnNpb25cclxuICAgIHJldHVybiBwYWNrYWdlSnNvbi52ZXJzaW9uIHx8ICdObyB2ZXJzaW9uIGZvdW5kJztcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgcmVhZGluZyBwYWNrYWdlLmpzb246JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuICdObyB2ZXJzaW9uIGZvdW5kJztcclxuICB9XHJcbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxjb2RlXFxcXHZpdGVwYmxvZ1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXGNvZGVcXFxcdml0ZXBibG9nXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2NvZGUvdml0ZXBibG9nL2RvY3MvLnZpdGVwcmVzcy9jb25maWcuanNcIjtpbXBvcnQgZ2V0TnBtVmVyc2lvbiBmcm9tICcuLi9nZXQtbnBtLXZlcnNpb24uanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHRpdGxlOiAnQW1pclNlbnBhaScsXHJcbiAgYmFzZTogJy9BbWlycy1CbG9nLycsXHJcbiAgdGhlbWVDb25maWc6IHtcclxuICAgIG5hdjogW1xyXG4gICAgICB7IHRleHQ6ICdcdTA2MkVcdTA2MjdcdTA2NDZcdTA2NDcnLCBsaW5rOiAnLycgfSxcclxuICAgICAgeyB0ZXh0OiAnXHUwNjJGXHUwNjMxXHUwNjI4XHUwNjI3XHUwNjMxXHUwNjQ3IFx1MDY0NVx1MDY0NicsIGxpbms6ICcvYWJvdXQnIH0sXHJcbiAgICBdLFxyXG4gICAgc2lkZWJhcjoge1xyXG4gICAgICAnL3Bvc3RzLyc6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnI0Jsb2cgUG9zdHMnLFxyXG4gICAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgeyB0ZXh0OiAnIzEgV2hvIEFtIEkgPyAoRkEpJywgbGluazogJy9wb3N0cy93aG9hbWknIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAgc29jaWFsTGlua3M6IFtcclxuICAgICAgeyBpY29uOiAnZ2l0aHViJywgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9BbWlyU2VucGFpJyB9LFxyXG4gICAgICB7IGljb246ICd0ZWxlZ3JhbScsIGxpbms6ICdodHRwczovL3QubWUvaXRzZGVrdXNlbnBhaScgfSxcclxuICAgIF0sXHJcbiAgICAvLyBEaXNwbGF5IHRoZSBucG0gdmVyc2lvbiBpbiB0aGUgaGVhZGVyXHJcbiAgICB2ZXJzaW9uOiBnZXROcG1WZXJzaW9uKCksIC8vIEVuc3VyZSB0aGlzIHJldHVybnMgdGhlIGNvcnJlY3QgdmVyc2lvblxyXG4gIH0sXHJcbn07XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBb1EsU0FBUyxvQkFBb0I7QUFDalMsU0FBUyxZQUFZO0FBRU4sU0FBUixnQkFBaUM7QUFDdEMsTUFBSTtBQUNGLFVBQU0sa0JBQWtCLEtBQUssUUFBUSxJQUFJLEdBQUcsY0FBYztBQUMxRCxVQUFNLGNBQWMsS0FBSyxNQUFNLGFBQWEsaUJBQWlCLE9BQU8sQ0FBQztBQUNyRSxZQUFRLElBQUksdUNBQXVDLFlBQVksT0FBTztBQUN0RSxXQUFPLFlBQVksV0FBVztBQUFBLEVBQ2hDLFNBQVMsT0FBTztBQUNkLFlBQVEsTUFBTSwrQkFBK0IsS0FBSztBQUNsRCxXQUFPO0FBQUEsRUFDVDtBQUNGOzs7QUNYQSxJQUFPLGlCQUFRO0FBQUEsRUFDYixPQUFPO0FBQUEsRUFDUCxNQUFNO0FBQUEsRUFDTixhQUFhO0FBQUEsSUFDWCxLQUFLO0FBQUEsTUFDSCxFQUFFLE1BQU0sNEJBQVEsTUFBTSxJQUFJO0FBQUEsTUFDMUIsRUFBRSxNQUFNLHFEQUFhLE1BQU0sU0FBUztBQUFBLElBQ3RDO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxXQUFXO0FBQUEsUUFDVDtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sT0FBTztBQUFBLFlBQ0wsRUFBRSxNQUFNLHNCQUFzQixNQUFNLGdCQUFnQjtBQUFBLFVBQ3REO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxhQUFhO0FBQUEsTUFDWCxFQUFFLE1BQU0sVUFBVSxNQUFNLGdDQUFnQztBQUFBLE1BQ3hELEVBQUUsTUFBTSxZQUFZLE1BQU0sNkJBQTZCO0FBQUEsSUFDekQ7QUFBQTtBQUFBLElBRUEsU0FBUyxjQUFjO0FBQUE7QUFBQSxFQUN6QjtBQUNGOyIsCiAgIm5hbWVzIjogW10KfQo=
