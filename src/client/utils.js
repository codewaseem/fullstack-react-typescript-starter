export const saveAuthData = (data) => {
  localStorage.setItem("auth", JSON.stringify(data));
}

export const getAuthData = () => {
  return JSON.parse(localStorage.getItem("auth"));
}

export const clearAuthData = () => {
  localStorage.removeItem("auth");
}