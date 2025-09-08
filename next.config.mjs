let userConfig = undefined
try {
  // try to import ESM first
  userConfig = await import('./v0-user-next.config.mjs')
} catch (e) {
  try {
    // fallback to CJS import
    userConfig = await import("./v0-user-next.config");
  } catch (innerError) {
    // ignore error
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  // Bundle optimization
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Ensure optimization object exists
      if (!config.optimization) {
        config.optimization = {};
      }
      if (!config.optimization.splitChunks) {
        config.optimization.splitChunks = {
          chunks: 'all',
          cacheGroups: {}
        };
      }
      if (!config.optimization.splitChunks.cacheGroups) {
        config.optimization.splitChunks.cacheGroups = {};
      }
      
      // Split chunks for better caching
      Object.assign(config.optimization.splitChunks.cacheGroups, {
        framer: {
          name: 'framer-motion',
          test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
          chunks: 'all',
          priority: 10,
        },
        ui: {
          name: 'ui-components',
          test: /[\\/]components[\\/]ui[\\/]/,
          chunks: 'all',
          priority: 8,
        },
      });
    }
    return config;
  },
}

if (userConfig) {
  // ESM imports will have a "default" property
  const config = userConfig.default || userConfig

  for (const key in config) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...config[key],
      }
    } else {
      nextConfig[key] = config[key]
    }
  }
}

export default nextConfig
