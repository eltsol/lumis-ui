import { Button } from "./Button";

export default {
    title: "Atoms/Button",
    component: Button,
};

export const Primary = {
    args: {
        children: "Button",
        variant: "primary",
    },
};

export const Loading = {
    args: {
        children: "Button",
        loading: true,
    },
};

export const WithIcons = {
    args: {
        children: "Button",
        leftIcon: "🔥",
        rightIcon: "→",
    },
};

export const FullWidth = {
    args: {
        children: "Button",
        fullWidth: true,
    },
};