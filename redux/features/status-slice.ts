import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: StatusState;
};
type StatusState = {
  isSubmitting: boolean;
  error: string;
};

const initialState = {
  value: {
    isSubmitting: false,
    error: "",
  } as StatusState,
} as InitialState;

export const status = createSlice({
  name: "status",
  initialState,
  reducers: {
    setSubmitting: (state, action: PayloadAction<boolean>) => {
      return {
        value: {
          isSubmitting: action.payload,
          error: "",
        },
      };
    },
    setError: (state, action: PayloadAction<string>) => {
      return {
        value: {
          isSubmitting: false,
          error: action.payload,
        },
      };
    },
  },
});

export const { setSubmitting, setError } = status.actions;
export default status.reducer;
