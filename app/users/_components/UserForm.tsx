"use client";

import {
  TextField,
  Button,
  Alert,
  CircularProgress,
  Card,
  CardContent,
} from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
// import { useState } from "react";
import { setSubmitting, setError } from "@/redux/features/status-slice";
import { useDispatch } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "@/app/validationSchema";
import { z } from "zod";
import ErrorMessage from "@/app/components/ErrorMessage";
import { AppDispatch, useAppSelector } from "@/redux/store";

type UserFormData = z.infer<typeof userSchema>;

const UserForm = ({ user }: { user?: any }) => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
  });

  //   const [error, setError] = useState("");
  //   const [isSubmitting, setSubmitting] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const isSubmitting = useAppSelector(
    (state) => state.statusReducer.value.isSubmitting
  );
  const error = useAppSelector((state) => state.statusReducer.value.error);

  const onSubmit = handleSubmit(async (data) => {
    try {
      // setSubmitting(true);
      dispatch(setSubmitting(true));
      if (user) await axios.patch("/api/users/" + user.id, data);
      else await axios.post("/api/users", data);
      router.push("/users/list");
      router.refresh();
    } catch (error) {
      // setSubmitting(false);
      // setError("An unexpected error occured.");
      // dispatch(setSubmitting(false));
      dispatch(setError("An unexpected error occured."));
    }
  });

  return (
    <div>
      <Card variant="outlined">
        <CardContent>
          {error && <Alert severity="error">{error}</Alert>}
          <form onSubmit={onSubmit}>
            <TextField
              variant="outlined"
              label="Name"
              defaultValue={user?.name}
              fullWidth
              margin="normal"
              {...register("name")}
            />
            {<ErrorMessage>{errors.name?.message}</ErrorMessage>}

            <TextField
              variant="outlined"
              label="Email"
              defaultValue={user?.email}
              fullWidth
              margin="normal"
              {...register("email")}
            />
            {<ErrorMessage>{errors.email?.message}</ErrorMessage>}

            <TextField
              variant="outlined"
              label="Mobile Phone"
              defaultValue={user?.mobilePhone}
              fullWidth
              margin="normal"
              {...register("mobilePhone")}
            />
            {<ErrorMessage>{errors.mobilePhone?.message}</ErrorMessage>}

            <Button
              type="submit"
              variant="contained"
              disabled={isSubmitting}
              sx={{ mt: 2 }}
            >
              {user ? "Update User" : "Submit New User"}{" "}
              {isSubmitting && <CircularProgress />}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserForm;
