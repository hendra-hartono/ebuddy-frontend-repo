import { notFound } from "next/navigation";
import UserForm from "../../_components/UserForm";
import axios from "axios";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

interface Props {
  params: { id: string };
}

const EditUserPage = async ({ params }: Props) => {
  const resp = await axios.get(
    `${publicRuntimeConfig.baseUrl}/api/users/${params.id}`
  );
  if (!resp || !resp.data.data) notFound();
  const user = resp.data.data;

  if (!user) notFound();

  return <UserForm user={user} />;
};

export default EditUserPage;
