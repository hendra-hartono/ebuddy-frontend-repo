import { Box, Grid2, Card, CardContent } from "@mui/material";
import { notFound } from "next/navigation";
import EditUserButton from "./EditUserButton";
import UserDetails from "./UserDetails";
// import { getServerSession } from "next-auth";
// import authOptions from "@/app/api/auth/authoptions";
import axios from "axios";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

interface Props {
  params: { id: string };
}

const UserDetailPage = async ({ params }: Props) => {
  // const session = await getServerSession(authOptions);
  const resp = await axios.get(
    `${publicRuntimeConfig.baseUrl}/api/users/${params.id}`
  );
  if (!resp || !resp.data.data) notFound();
  const user = resp.data.data;

  return (
    <Grid2 container spacing={2}>
      <Grid2 size={{ xs: 6, md: 8 }}>
        <Card variant="outlined">
          <CardContent>
            <UserDetails user={user} />
          </CardContent>
        </Card>
      </Grid2>

      <Grid2 size={{ xs: 6, md: 4 }}>
        <Box>
          <EditUserButton userId={user.id} />
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default UserDetailPage;
