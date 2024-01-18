import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { UserType } from "../../types/user.types";
export interface userState {
  status: "idle" | "loading" | "failed" | "success";
  users: UserType[];
}

const initialState: userState = {
  status: "idle",
  users: [],
};

export const fetchUsersAsync = createAsyncThunk("users/getUsers", () => {
  const response = [
    {
      name: "Bob",
      age: "35",
      sex: "Male",
      mobile: "9876543210",
      govtIdType: "Aadhaar",
      govtId: "ABCD1234567890",
      address: "254 B Street, Bangalore",
      state: "Karnataka",
      city: "Bangalore",
      country: "India",
      pincode: "560043",
    },
  ];

  return response;
});

export const addUserAsync = createAsyncThunk(
  "users/addUser",
  async (user: UserType) => {
    const response = { data: user };
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addUserAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.users.push(action.payload);
      })
      .addCase(addUserAsync.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(fetchUsersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsersAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.users = action.payload;
      })
      .addCase(fetchUsersAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default userSlice.reducer;
