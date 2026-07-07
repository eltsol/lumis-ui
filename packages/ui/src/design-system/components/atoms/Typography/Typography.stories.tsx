import { Typography } from "./Typography";

export default {
    title: "Atoms/Typography",
    component: Typography,
};

export const AllVariants = () => (
    <>
        <Typography variant="h1">Heading 1</Typography>
        <Typography variant="h2">Heading 2</Typography>
        <Typography variant="body1">Body 1</Typography>
        <Typography variant="caption">Caption</Typography>
    </>
);