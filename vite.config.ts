import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // Custom HTML injection plugin
    mode === 'development' && {
      name: 'custom-dev-tagger',
      transformIndexHtml(html: string) {
        return html.replace(
          '</head>',
          `  <style>
            #vk-dev-tag {
              position: fixed;
              top: 20px;
              right: 20px;
              z-index: 9999;
              background: rgba(15, 23, 42, 0.9);
              border: 1px solid rgba(139, 92, 246, 0.4);
              border-radius: 8px;
              padding: 8px 12px;
              display: flex;
              align-items: center;
              gap: 8px;
              font-family: system-ui, sans-serif;
              font-size: 13px;
              color: #e2e8f0;
              backdrop-filter: blur(8px);
              transition: transform 0.2s ease;
            }
            #vk-dev-tag:hover {
              transform: scale(1.05);
            }
            #vk-dev-tag img {
              width: 22px;
              height: 22px;
              border-radius: 50%;
              border: 2px solid rgba(139, 92, 246, 0.6);
              object-fit: cover;
            }
            .pulse-dot {
              width: 6px;
              height: 6px;
              background: #10b981;
              border-radius: 50%;
              animation: pulse 2s infinite;
            }
            @keyframes pulse {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.4; }
            }
          </style>
        </head>`
        ).replace(
          '<div id="root"></div>',
          `<div id="vk-dev-tag">
            <img src="https://i.imgur.com/QPUegfP.png" alt="VK" />
            <span style="font-weight: 600; color: #a78bfa;">VK Portfolio</span>
            <div class="pulse-dot"></div>
          </div>
          <div id="root"></div>`
        );
      }
    },
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));