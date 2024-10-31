import { Box, Typography, Stack } from "@mui/material";
import { EmailOutlined, PhoneIphoneOutlined } from "@mui/icons-material";

interface User {
  name: string;
  email: string;
  mobilePhone: string;
}

const UserDetails = ({ user }: { user: User }) => {
  return (
    <>
      <Typography variant="h5">{user.name}</Typography>
      <Box sx={{ my: 2 }}>
        <Stack direction="row" gap={2} sx={{ mb: 2 }}>
          <EmailOutlined />
          <Typography component="p">{user.email}</Typography>
        </Stack>
        <Stack direction="row" gap={2}>
          <PhoneIphoneOutlined />
          <Typography component="p">{user.mobilePhone}</Typography>
        </Stack>
      </Box>
    </>
  );
};

export default UserDetails;
