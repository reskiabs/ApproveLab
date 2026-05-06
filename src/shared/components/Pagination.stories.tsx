import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { AppPagination } from "./Pagination";

const meta = {
  title: "Components/AppPagination",
  component: AppPagination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  args: {
    onPageChange: () => {},
  },

  argTypes: {
    page: {
      control: "number",
    },
    totalPages: {
      control: "number",
    },
    siblingCount: {
      control: "number",
    },
    onPageChange: {
      action: "pageChanged",
    },
  },
} satisfies Meta<typeof AppPagination>;

export default meta;

type Story = StoryObj<typeof meta>;

function PaginationWithState(args: React.ComponentProps<typeof AppPagination>) {
  const [page, setPage] = useState(args.page);

  return (
    <AppPagination
      {...args}
      page={page}
      onPageChange={(newPage) => {
        setPage(newPage);

        args.onPageChange?.(newPage);
      }}
    />
  );
}

export const Default: Story = {
  render: (args) => <PaginationWithState {...args} />,
  args: {
    page: 1,
    totalPages: 5,
    siblingCount: 1,
  },
};

export const MiddlePage: Story = {
  render: (args) => <PaginationWithState {...args} />,
  args: {
    page: 5,
    totalPages: 10,
    siblingCount: 1,
  },
};

export const ManyPages: Story = {
  render: (args) => <PaginationWithState {...args} />,
  args: {
    page: 10,
    totalPages: 50,
    siblingCount: 2,
  },
};

export const FirstPageDisabled: Story = {
  render: (args) => <PaginationWithState {...args} />,
  args: {
    page: 1,
    totalPages: 10,
  },
};

export const LastPageDisabled: Story = {
  render: (args) => <PaginationWithState {...args} />,
  args: {
    page: 10,
    totalPages: 10,
  },
};

export const WithoutEllipsis: Story = {
  render: (args) => <PaginationWithState {...args} />,
  args: {
    page: 2,
    totalPages: 4,
  },
};

export const SinglePage: Story = {
  render: (args) => <PaginationWithState {...args} />,
  args: {
    page: 1,
    totalPages: 1,
  },
};
