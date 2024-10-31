import { Button } from "@mui/material";
import Link from "next/link";
import EditIcon from "@mui/icons-material/Edit";

const EditUserButton = ({ userId }: { userId: number }) => {
  return (
    <Button variant="outlined" startIcon={<EditIcon />}>
      <Link href={`/users/edit/${userId}`}>Edit User</Link>
    </Button>
  );
};

export default EditUserButton;
