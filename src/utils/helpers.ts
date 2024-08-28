import CryptoJS from "crypto-js";

// Encrypt the token
export const encryptToken = (token: string, secretKey: string): string => {
  return CryptoJS.AES.encrypt(token, secretKey).toString();
};

// Decrypt the token
export const decryptToken = (encryptedToken: string, secretKey: string): string => {
  const bytes = CryptoJS.AES.decrypt(encryptedToken, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};

const secretKey = "sfdkjchkjarwhsfkkjksjhckjhfjjhbareweytjinsjahjhgsc"; // Manage this key securely

export const storeToken = (token: string) => {
  const encryptedToken = encryptToken(token, secretKey);
  localStorage.setItem("accessToken", encryptedToken);
};

export const getStoredToken = (): string | null => {
  const encryptedToken = localStorage.getItem("accessToken");
  if (encryptedToken) {
    const decryptedToken = decryptToken(encryptedToken, secretKey);
    return decryptedToken;
  }
  return null;
};

export const isTokenExpired = (token: string): boolean => {
    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    const exp = decodedToken.exp; // Expiration time in seconds since Unix epoch
    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds since Unix epoch
  
    return currentTime > exp;
  };
  

  export const capitalizeFirstLetter = (str:string) => {
    return str.split('.').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
}

