
export const logout = () => {
  localStorage.clear();

  window.location.href = "/login"
};

const useLogout = () => logout;

export default useLogout;
