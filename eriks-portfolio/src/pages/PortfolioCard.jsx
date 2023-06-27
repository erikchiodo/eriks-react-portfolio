//TODO: Fix react icons - use absolute positioning and set
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
        position: "relative",
        display: "inline-block",
      }}
    >
      <Stack spacing={1}>
        <img src={image} alt={title} />
        <a
          href={gitHubLink}
          target="_blank"
          rel="noreferrer"
          style={{ position: "absolute", top: 0, right: 0 }}
        >
          <BsGithub fontSize={40} />
        </a>

        <Stack spacing={0}>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body1">{description}</Typography>
        </Stack>

        <Stack direction="row" spacing={1}>
          <a href={deployedApp} target="_blank" rel="noreferrer">
            <BiLinkExternal fontSize={20} />
          </a>
        </Stack>
      </Stack>
    </Box>
  );
}
