import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function TestMUIComponents() {
  return (
    <Stack direction="row" spacing={2}>
      <Button color="secondary">Secondary</Button>
      <Button color="success">Success</Button>
      <Button color="error">Error</Button>
    </Stack>
  );
}
