import type { Meta, StoryObj } from '@storybook/react';
import { ScrollBar } from './ScrollBar';

const meta = {
  title: 'Example/ScrollBar',
  component: ScrollBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    autoHide: {
      control: 'boolean',
      description: '是否自动隐藏滚动条'
    },
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
    autoHide: true,
    barStyle:{
      width: 500,
      height: 300
    }
  },
};