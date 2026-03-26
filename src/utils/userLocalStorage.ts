const USER_KEY = "user_data";

export const authStorage = {
  saveUser: (user: any) => {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  },
  getUser: () => {
    const data = localStorage.getItem(USER_KEY);
    return data ? JSON.parse(data) : null;
  },
  removeUser: () => {
    localStorage.removeItem(USER_KEY);
  }
};