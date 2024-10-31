import NextLink from "next/link";
import { Link as MUILink } from "@mui/material";

interface Props {
  href: string;
  children: string;
}

const Link = ({ href, children }: Props) => {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <MUILink>{children}</MUILink>
    </NextLink>
  );
};

export default Link;
