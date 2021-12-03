/**
 *  node运行环境
 *  "dev" | "alpha" | "preprod" | "prod"
 */
export const environmentVariable = () => {
  return import.meta.env.VITE_APP_ANT ?? 'dev';
};
