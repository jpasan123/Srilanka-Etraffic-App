// Server configuration
export const SERVER_CONFIG = {
    // API endpoints
    API_URL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
    
    // Email settings
    FEEDBACK_EMAIL: 'etraffic@police.gov.lk',
    
    // Download settings
    APK_DOWNLOAD_PATH: '/etraffic.apk',
    APK_FILENAME: 'SLPolice-eTraffic.apk',
    
    // Feature flags
    ENABLE_FEEDBACK: true,
    ENABLE_BETA_NOTICE: true
  };
  
  // Validate required environment variables
  export function validateServerConfig() {
    if (!import.meta.env.VITE_API_URL) {
      console.warn('VITE_API_URL not set, using default localhost URL');
    }
  }