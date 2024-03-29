export const handleAuth = (state, { payload }) => {
  state.token = payload.token;
  state.user = { ...state.user, ...payload.user };
  state.isLoggedIn = true;
};

export const handleRefreshFul = (state, { payload }) => {
  state.user = { ...payload };
  state.isLoggedIn = true;
  state.diary = {...state.diary}
};

export const handleRefreshRej = state => {
  state.token = '';
};

export const handleLogout = state => {
  state.token = '';
  state.user = null;
  state.isLoggedIn = false;
};
