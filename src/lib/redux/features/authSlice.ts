import { createSlice} from "@reduxjs/toolkit";

interface AuthState {
  refs: {
    about: boolean; // Adjust the type as needed
    resume : boolean;
    contact : boolean;
    project : boolean;
  };
}

const initialState: AuthState = {
  refs: {
    about: false,
    resume: false,
    contact: false,
    project: false,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAbout(state) {
      state.refs.about = !(state.refs.about);
    },
    setResume(state) {
      state.refs.resume = !(state.refs.resume);
    },
    setContact(state) {
      state.refs.contact = !(state.refs.contact);
    },
    setProject(state) {
      state.refs.project = !(state.refs.project);
    },
  },
});

export const { setAbout, setResume, setContact, setProject } = authSlice.actions;
export default authSlice.reducer;