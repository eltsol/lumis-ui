import { Avatar } from "./Avatar";

export default {
  title: "Atoms/Avatar",
  component: Avatar,
};

export const WithImage = {
  args: {
    src: "https://i.pravatar.cc/150",
    alt: "User avatar",
    size: "md",
  },
};

export const WithName = {
  args: {
    name: "John Doe",
    size: "md",
  },
};

export const Small = {
  args: {
    name: "Jane Smith",
    size: "sm",
  },
};

export const Large = {
  args: {
    name: "Alex Johnson",
    size: "lg",
  },
};
