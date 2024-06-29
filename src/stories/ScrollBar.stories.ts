import type { Meta, StoryObj } from '@storybook/react';
import { ScrollBar } from '@/lib/main';

const meta = {
  title: 'Example/ScrollBar',
  component: ScrollBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    barStyle: {
      control: 'object',
      description: '滚动条样式',
      defaultValue: { width: 500, height: 300 },
    },
  }
} satisfies Meta<typeof ScrollBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ScrolBarTest: Story = {
  args: {
    barStyle:{
      width: 500,
      height: 300
    },
    children: undefined
  },
};