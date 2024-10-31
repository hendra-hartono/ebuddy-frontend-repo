import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import axios from "axios";
import UserAction from "./UserAction";
import { Link } from "@/app/components";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

const UsersPage = async () => {
  const users = await axios.get(`${publicRuntimeConfig.baseUrl}/api/users`);

  return (
    <div>
      <UserAction />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Mobile Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.data.data.map((user: any) => (
              <TableRow key={user.id}>
                <TableCell>
                  <Link href={`/users/${user.id}`}>{user.name}</Link>
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.mobilePhone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export const dynamic = "force-dynamic";
export default UsersPage;
