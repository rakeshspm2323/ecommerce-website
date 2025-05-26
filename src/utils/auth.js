// export const isAuthenticated = () => typeof window !== 'undefined' && localStorage.getItem('token');


export const isAuthenticated = () =>
  typeof window !== "undefined" && localStorage.getItem("token");

export const login = async (email, password) => {
  const response = await fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  if (data.token) {
    localStorage.setItem("token", data.token);
    return { success: true, token: data.token };
  } else {
    return { success: false, error: data.error || "Login failed" };
  }
};

export const logout = () => {
  localStorage.removeItem("token");
};
