//TODO: Fix react icons
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { Box, Stack, Typography } from "@mui/material";

export default function PortfolioCard({
  title,
  description,
  gitHubLink,
  deployedApp,
  image,
}) {
  return (
    <Box
      sx={{
        boxShadow: 1,
        p: 2,
      }}
    >
      <Stack spacing={1}>
        <img src={image} alt={title} />

        <Stack spacing={0}>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body1">{description}</Typography>
        </Stack>

        <Stack direction="row" spacing={1}>
          <a href={gitHubLink} target="_blank" rel="noreferrer">
            <BsGithub fontSize={20} />
          </a>
          <a href={deployedApp} target="_blank" rel="noreferrer">
            <BiLinkExternal fontSize={20} />
          </a>
        </Stack>
      </Stack>
    </Box>
  );
}
