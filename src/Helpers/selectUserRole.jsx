import { createSelector } from '@reduxjs/toolkit';
const selectAuthState = (state) => state.auth;

export const selectUserRole = createSelector(
    selectAuthState,
    (auth) => auth.role
  );
  