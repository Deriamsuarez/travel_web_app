
export const logout = () => {
  localStorage.clear();

  window.location.href = "/"
};

const useLogout = () => logout;

export default useLogout;
